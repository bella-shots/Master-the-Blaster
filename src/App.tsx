import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Folder,
  Search,
  ExternalLink,
  RefreshCw,
  LayoutGrid,
  List,
  Lock,
  LogOut,
  AlertCircle,
  FolderOpen,
  ArrowLeft,
  CheckCircle2,
  HardDrive,
  Upload,
  FileCheck,
  Smartphone,
  Info,
} from 'lucide-react';
import { DriveFile, FolderBreadcrumb } from './types';
import {
  getStoredToken,
  requestGoogleAccessToken,
  clearStoredToken,
} from './googleAuth';
import {
  extractFolderId,
  fetchFolderDetails,
  fetchFolderFiles,
  formatFileSize,
  formatDate,
} from './driveService';
import { Breadcrumbs } from './components/Breadcrumbs';
import { FileList } from './components/FileList';

const DEFAULT_FOLDER_URL =
  'https://drive.google.com/drive/folders/1A3Ex02WHDf3lP0EA1RkHq0Br_MPgxyfI';

interface WorkspaceFile {
  name: string;
  size: number;
  modifiedTime: string;
}

export default function App() {
  const [token, setToken] = useState<string | null>(() => getStoredToken());
  const [folderInput, setFolderInput] = useState<string>(DEFAULT_FOLDER_URL);
  const [currentFolderId, setCurrentFolderId] = useState<string>('');
  const [folderMetadata, setFolderMetadata] = useState<DriveFile | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<FolderBreadcrumb[]>([]);
  const [files, setFiles] = useState<DriveFile[]>([]);
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [loading, setLoading] = useState<boolean>(false);
  const [authLoading, setAuthLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [workspaceFiles, setWorkspaceFiles] = useState<WorkspaceFile[]>([]);
  const [isUploadingToWorkspace, setIsUploadingToWorkspace] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load workspace /data files
  const loadWorkspaceFiles = useCallback(async () => {
    try {
      const res = await fetch('/api/workspace-data-files');
      if (res.ok) {
        const data = await res.json();
        setWorkspaceFiles(data.files || []);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    loadWorkspaceFiles();
  }, [loadWorkspaceFiles]);

  // Load a folder given an ID and token
  const loadFolder = useCallback(
    async (folderId: string, accessToken: string, folderNameOverride?: string) => {
      setLoading(true);
      setError(null);
      try {
        // Fetch metadata
        let metadata: DriveFile | null = null;
        try {
          metadata = await fetchFolderDetails(folderId, accessToken);
        } catch (e: any) {
          // If metadata fetch fails due to permissions, create minimal fallback
          metadata = {
            id: folderId,
            name: folderNameOverride || 'Folder',
            mimeType: 'application/vnd.google-apps.folder',
            webViewLink: `https://drive.google.com/drive/folders/${folderId}`,
          };
        }
        setFolderMetadata(metadata);

        // Fetch children
        const result = await fetchFolderFiles(folderId, accessToken);
        setFiles(result.files);
      } catch (err: any) {
        console.error('Error fetching folder files:', err);
        setError(err.message || 'Could not access this folder.');
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Initial load when token is present
  useEffect(() => {
    if (token && !currentFolderId) {
      const initialId = extractFolderId(DEFAULT_FOLDER_URL);
      setCurrentFolderId(initialId);
      setBreadcrumbs([{ id: initialId, name: 'Target Folder' }]);
      loadFolder(initialId, token, 'Target Folder');
    }
  }, [token, currentFolderId, loadFolder]);

  // Handle Connect to Google Drive
  const handleConnect = async () => {
    setAuthLoading(true);
    setError(null);
    try {
      const newToken = await requestGoogleAccessToken();
      setToken(newToken);
      const targetId = extractFolderId(folderInput) || extractFolderId(DEFAULT_FOLDER_URL);
      setCurrentFolderId(targetId);
      setBreadcrumbs([{ id: targetId, name: 'Target Folder' }]);
      await loadFolder(targetId, newToken, 'Target Folder');
    } catch (err: any) {
      console.error('Authentication error:', err);
      setError(err.message || 'Failed to authenticate with Google Drive.');
    } finally {
      setAuthLoading(false);
    }
  };

  // Disconnect
  const handleDisconnect = () => {
    clearStoredToken();
    setToken(null);
    setFiles([]);
    setFolderMetadata(null);
    setBreadcrumbs([]);
    setCurrentFolderId('');
  };

  // Handle load custom folder URL or ID
  const handleLoadFolderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    const parsedId = extractFolderId(folderInput);
    if (!parsedId) {
      setError('Please provide a valid Google Drive folder URL or ID.');
      return;
    }
    setCurrentFolderId(parsedId);
    setBreadcrumbs([{ id: parsedId, name: 'Root Folder' }]);
    loadFolder(parsedId, token, 'Root Folder');
  };

  // Navigate deeper into a subfolder
  const handleFolderClick = (folder: DriveFile) => {
    if (!token) return;
    setCurrentFolderId(folder.id);
    setBreadcrumbs((prev) => [...prev, { id: folder.id, name: folder.name }]);
    loadFolder(folder.id, token, folder.name);
  };

  // Navigate via breadcrumbs
  const handleBreadcrumbNavigate = (targetIndex: number) => {
    if (!token || targetIndex >= breadcrumbs.length) return;
    const target = breadcrumbs[targetIndex];
    setBreadcrumbs((prev) => prev.slice(0, targetIndex + 1));
    setCurrentFolderId(target.id);
    loadFolder(target.id, token, target.name);
  };

  // Save file from Google Drive directly into workspace /data
  const handleImportToWorkspace = async (file: DriveFile) => {
    if (!token) return;
    try {
      const downloadUrl = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`;
      const res = await fetch(downloadUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        throw new Error(`Failed to download from Drive (HTTP ${res.status})`);
      }

      const blob = await res.blob();
      const reader = new FileReader();

      await new Promise<void>((resolve, reject) => {
        reader.onloadend = async () => {
          try {
            const base64Content = (reader.result as string).split(',')[1];
            const uploadRes = await fetch('/api/upload-to-workspace', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                filename: file.name,
                contentBase64: base64Content,
              }),
            });

            if (!uploadRes.ok) {
              throw new Error('Failed to write file to workspace /data');
            }

            setStatusMessage(`Successfully saved "${file.name}" to workspace /data!`);
            await loadWorkspaceFiles();
            resolve();
          } catch (e) {
            reject(e);
          }
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (err: any) {
      console.error('Import error:', err);
      setError(`Could not save "${file.name}" to workspace: ${err.message}`);
    }
  };

  // Upload file from phone storage directly into workspace /data
  const handlePhoneFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles || selectedFiles.length === 0) return;

    setIsUploadingToWorkspace(true);
    setError(null);
    let successCount = 0;

    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        await new Promise<void>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = async () => {
            try {
              const base64Content = (reader.result as string).split(',')[1];
              const uploadRes = await fetch('/api/upload-to-workspace', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  filename: file.name,
                  contentBase64: base64Content,
                }),
              });
              if (!uploadRes.ok) throw new Error(`Failed to upload ${file.name}`);
              successCount++;
              resolve();
            } catch (err) {
              reject(err);
            }
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      }

      setStatusMessage(`Uploaded ${successCount} file(s) to workspace /data!`);
      await loadWorkspaceFiles();
    } catch (err: any) {
      setError(`Upload failed: ${err.message}`);
    } finally {
      setIsUploadingToWorkspace(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  // Filter files by search term
  const filteredFiles = files.filter((f) =>
    f.name.toLowerCase().includes(searchFilter.toLowerCase().trim())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
              <FolderOpen className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base font-semibold text-slate-900 leading-tight">
                Drive Folder Explorer
              </h1>
              <p className="text-xs text-slate-500">
                Direct folder access & file inspection
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {token ? (
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  Connected
                </span>
                <button
                  id="btn-disconnect"
                  type="button"
                  onClick={handleDisconnect}
                  className="inline-flex items-center space-x-1 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Disconnect</span>
                </button>
              </div>
            ) : (
              <button
                id="btn-connect-header"
                type="button"
                onClick={handleConnect}
                disabled={authLoading}
                className="inline-flex items-center space-x-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg shadow-xs transition-colors disabled:opacity-50"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>{authLoading ? 'Connecting...' : 'Authorize Google Drive'}</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1 flex flex-col space-y-6">
        {/* Folder Input Bar */}
        <section className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
          <form onSubmit={handleLoadFolderSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <label htmlFor="folder-url-input" className="sr-only">
                Google Drive Folder URL or ID
              </label>
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Folder className="w-4 h-4" />
              </div>
              <input
                id="folder-url-input"
                type="text"
                value={folderInput}
                onChange={(e) => setFolderInput(e.target.value)}
                placeholder="Paste Google Drive folder URL or Folder ID"
                className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-900"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button
                id="btn-load-folder"
                type="submit"
                disabled={!token || loading}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center space-x-1.5 shrink-0"
              >
                <span>Open Folder</span>
              </button>
              {token && currentFolderId && (
                <button
                  id="btn-refresh-folder"
                  type="button"
                  onClick={() => loadFolder(currentFolderId, token)}
                  disabled={loading}
                  title="Refresh folder contents"
                  className="p-2 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                </button>
              )}
            </div>
          </form>

          {/* Quick preset indicator */}
          <div className="mt-2.5 flex items-center text-xs text-slate-500">
            <span className="font-medium mr-1.5 text-slate-600">Requested Folder:</span>
            <button
              type="button"
              onClick={() => {
                setFolderInput(DEFAULT_FOLDER_URL);
                if (token) {
                  const id = extractFolderId(DEFAULT_FOLDER_URL);
                  setCurrentFolderId(id);
                  setBreadcrumbs([{ id, name: 'Target Folder' }]);
                  loadFolder(id, token, 'Target Folder');
                }
              }}
              className="font-mono text-blue-600 hover:underline truncate max-w-xs sm:max-w-md md:max-w-lg"
              title={DEFAULT_FOLDER_URL}
            >
              1A3Ex02WHDf3lP0EA1RkHq0Br_MPgxyfI
            </button>
          </div>
        </section>

        {/* Status notification */}
        {statusMessage && (
          <div
            id="status-banner"
            className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 flex items-center justify-between text-sm shadow-xs"
          >
            <div className="flex items-center space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{statusMessage}</span>
            </div>
            <button
              type="button"
              onClick={() => setStatusMessage(null)}
              className="text-emerald-700 hover:text-emerald-900 text-xs font-semibold ml-3"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Error notification */}
        {error && (
          <div
            id="error-banner"
            className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-start space-x-3 text-sm"
          >
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
            <div className="flex-1">
              <p className="font-semibold">Access Notice</p>
              <p className="mt-0.5">{error}</p>
              {!token && (
                <p className="mt-1 text-xs text-red-600">
                  You need to grant authorization to read Drive files before accessing this folder.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Unauthenticated State */}
        {!token ? (
          <div className="flex flex-col items-center justify-center p-12 bg-white rounded-xl border border-slate-200 text-center shadow-xs my-auto">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <FolderOpen className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900">
              Authorize to Access Google Drive
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-md leading-relaxed">
              Google Drive permissions are required to view the contents of folder{' '}
              <span className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-slate-700">
                1A3Ex02WHDf3lP0EA1RkHq0Br_MPgxyfI
              </span>
              . Click below to sign in with your Google account.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <button
                id="btn-connect-center"
                type="button"
                onClick={handleConnect}
                disabled={authLoading}
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl shadow-sm transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                <Lock className="w-4 h-4" />
                <span>{authLoading ? 'Connecting to Google...' : 'Grant Read-Only Access'}</span>
              </button>
              <a
                href={DEFAULT_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-sm rounded-xl transition-colors flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-4 h-4 text-slate-500" />
                <span>Open in Drive directly</span>
              </a>
            </div>
          </div>
        ) : (
          /* Authenticated Explorer Area */
          <div className="space-y-4">
            {/* Explorer Toolbar: Breadcrumbs & Views */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center space-x-2 overflow-hidden">
                {breadcrumbs.length > 1 && (
                  <button
                    id="btn-nav-up"
                    type="button"
                    onClick={() => handleBreadcrumbNavigate(breadcrumbs.length - 2)}
                    className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                    title="Go up one folder"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                )}
                <Breadcrumbs
                  items={breadcrumbs}
                  onNavigate={handleBreadcrumbNavigate}
                />
              </div>

              {/* View options & Search */}
              <div className="flex items-center space-x-2 shrink-0">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                    <Search className="w-3.5 h-3.5" />
                  </div>
                  <input
                    id="filter-files-input"
                    type="text"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder="Filter files..."
                    className="w-36 sm:w-48 pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-800"
                  />
                </div>

                <div className="flex items-center border border-slate-200 rounded-lg p-0.5 bg-slate-50">
                  <button
                    id="btn-view-list"
                    type="button"
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded-md transition-colors ${
                      viewMode === 'list'
                        ? 'bg-white shadow-xs text-slate-900 font-semibold'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                    title="List View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                  <button
                    id="btn-view-grid"
                    type="button"
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-md transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-white shadow-xs text-slate-900 font-semibold'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                    title="Grid View"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                </div>

                {folderMetadata?.webViewLink && (
                  <a
                    id="btn-open-in-drive"
                    href={folderMetadata.webViewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-slate-200"
                    title="Open current folder in Google Drive"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Folder Header Information */}
            {folderMetadata && (
              <div className="flex items-center justify-between px-1 text-xs text-slate-500">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-slate-700">
                    {folderMetadata.name}
                  </span>
                  <span>•</span>
                  <span>{filteredFiles.length} item{filteredFiles.length === 1 ? '' : 's'}</span>
                </div>
                {folderMetadata.owners?.[0]?.displayName && (
                  <span>Owner: {folderMetadata.owners[0].displayName}</span>
                )}
              </div>
            )}

            {/* File List / Content State */}
            {loading ? (
              <div className="flex flex-col items-center justify-center p-16 bg-white rounded-xl border border-slate-200">
                <RefreshCw className="w-8 h-8 text-blue-600 animate-spin mb-3" />
                <p className="text-sm font-medium text-slate-700">Loading folder contents...</p>
                <p className="text-xs text-slate-400 mt-1">Retrieving files from Google Drive</p>
              </div>
            ) : (
              <FileList
                files={filteredFiles}
                viewMode={viewMode}
                onFolderClick={handleFolderClick}
                onImportToWorkspace={handleImportToWorkspace}
                accessToken={token}
              />
            )}
          </div>
        )}

        {/* Workspace /data Directory Section (Designed for Mobile & Phone Use) */}
        <section className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center space-x-2">
                <HardDrive className="w-5 h-5 text-indigo-600" />
                <h3 className="text-sm font-semibold text-slate-900">
                  Workspace Files (<code className="font-mono text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded text-xs">/data</code>)
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Files placed here are directly readable by the AI assistant in your workspace.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={handlePhoneFileUpload}
                className="hidden"
                id="phone-file-input"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploadingToWorkspace}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-lg shadow-xs transition-colors disabled:opacity-50"
              >
                {isUploadingToWorkspace ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Smartphone className="w-3.5 h-3.5" />
                )}
                <span>{isUploadingToWorkspace ? 'Uploading...' : 'Upload from Phone'}</span>
              </button>

              <button
                type="button"
                onClick={loadWorkspaceFiles}
                title="Refresh /data files"
                className="p-2 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {workspaceFiles.length === 0 ? (
            <div className="py-6 text-center text-xs text-slate-500">
              <p>No files currently in <code className="font-mono">/data</code>.</p>
              <p className="mt-1 text-slate-400">
                You can tap <strong>"Save to /data"</strong> on any Drive file above, or tap <strong>"Upload from Phone"</strong> to upload downloaded files.
              </p>
            </div>
          ) : (
            <div className="mt-3 divide-y divide-slate-100">
              {workspaceFiles.map((wf) => (
                <div
                  key={wf.name}
                  className="py-2.5 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center space-x-2 truncate mr-3">
                    <FileCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium text-slate-800 truncate" title={wf.name}>
                      {wf.name}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-500 shrink-0">
                    <span>{formatFileSize(wf.size)}</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Accessible by AI
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
