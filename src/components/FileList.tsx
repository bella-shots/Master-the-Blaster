import React, { useState } from 'react';
import { ExternalLink, Download, ArrowDownToLine, Check, Loader2 } from 'lucide-react';
import { DriveFile } from '../types';
import { FileTypeIcon } from './FileTypeIcon';
import { formatFileSize, formatDate, isFolder } from '../driveService';

interface FileListProps {
  files: DriveFile[];
  viewMode: 'list' | 'grid';
  onFolderClick: (folder: DriveFile) => void;
  onImportToWorkspace?: (file: DriveFile) => Promise<void>;
  accessToken: string;
}

export const FileList: React.FC<FileListProps> = ({
  files,
  viewMode,
  onFolderClick,
  onImportToWorkspace,
  accessToken,
}) => {
  const [importingId, setImportingId] = useState<string | null>(null);
  const [importedIds, setImportedIds] = useState<Set<string>>(new Set());

  const handleImport = async (e: React.MouseEvent, file: DriveFile) => {
    e.stopPropagation();
    if (!onImportToWorkspace) return;
    setImportingId(file.id);
    try {
      await onImportToWorkspace(file);
      setImportedIds((prev) => new Set([...prev, file.id]));
    } catch (err) {
      console.error('Import failed', err);
    } finally {
      setImportingId(null);
    }
  };
  if (files.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-xl border border-slate-200 text-center">
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
          <FileTypeIcon mimeType="" className="w-6 h-6" />
        </div>
        <h3 className="text-base font-semibold text-slate-800">This folder is empty</h3>
        <p className="text-sm text-slate-500 mt-1 max-w-sm">
          No files or folders were found in this directory.
        </p>
      </div>
    );
  }

  if (viewMode === 'grid') {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {files.map((file) => {
          const folder = isFolder(file.mimeType);
          return (
            <div
              key={file.id}
              id={`file-card-${file.id}`}
              onClick={() => folder && onFolderClick(file)}
              className={`group flex flex-col justify-between p-3.5 bg-white rounded-xl border border-slate-200 transition-all ${
                folder
                  ? 'cursor-pointer hover:border-amber-400 hover:shadow-sm'
                  : 'hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-slate-100 transition-colors">
                    <FileTypeIcon mimeType={file.mimeType} className="w-7 h-7" />
                  </div>
                  {file.webViewLink && (
                    <a
                      href={file.webViewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title="Open in Google Drive"
                      className="p-1 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <h4
                  className="text-sm font-medium text-slate-800 line-clamp-2 break-words"
                  title={file.name}
                >
                  {file.name}
                </h4>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{folder ? 'Folder' : formatFileSize(file.size)}</span>
                <div className="flex items-center space-x-1">
                  {!folder && onImportToWorkspace && (
                    <button
                      type="button"
                      onClick={(e) => handleImport(e, file)}
                      disabled={importingId === file.id || importedIds.has(file.id)}
                      title={importedIds.has(file.id) ? 'Saved to /data' : 'Save to /data workspace'}
                      className={`p-1 rounded-md transition-colors ${
                        importedIds.has(file.id)
                          ? 'text-emerald-600 bg-emerald-50'
                          : 'text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      {importingId === file.id ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : importedIds.has(file.id) ? (
                        <Check className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowDownToLine className="w-3.5 h-3.5" />
                      )}
                    </button>
                  )}
                  {file.capabilities?.canDownload && !folder && (
                    <a
                      href={`https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      title="Download file"
                      className="text-slate-400 hover:text-slate-700 p-1 rounded-md"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/75 text-xs font-semibold text-slate-600 uppercase tracking-wider">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4 hidden sm:table-cell">Owner</th>
              <th className="py-3 px-4 hidden md:table-cell">Last Modified</th>
              <th className="py-3 px-4">Size</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {files.map((file) => {
              const folder = isFolder(file.mimeType);
              const owner = file.owners?.[0]?.displayName || '--';
              return (
                <tr
                  key={file.id}
                  id={`file-row-${file.id}`}
                  onClick={() => folder && onFolderClick(file)}
                  className={`group transition-colors ${
                    folder ? 'cursor-pointer hover:bg-amber-50/40' : 'hover:bg-slate-50/60'
                  }`}
                >
                  <td className="py-3 px-4 font-medium text-slate-900">
                    <div className="flex items-center space-x-3">
                      <div className="shrink-0">
                        <FileTypeIcon mimeType={file.mimeType} className="w-5 h-5" />
                      </div>
                      <span
                        className={`truncate max-w-[200px] sm:max-w-[300px] md:max-w-md ${
                          folder ? 'hover:underline text-slate-900' : 'text-slate-800'
                        }`}
                        title={file.name}
                      >
                        {file.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-500 hidden sm:table-cell text-xs">
                    {owner}
                  </td>
                  <td className="py-3 px-4 text-slate-500 hidden md:table-cell text-xs">
                    {formatDate(file.modifiedTime)}
                  </td>
                  <td className="py-3 px-4 text-slate-500 text-xs">
                    {folder ? 'Folder' : formatFileSize(file.size)}
                  </td>
                  <td className="py-3 px-4 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end space-x-1">
                      {!folder && onImportToWorkspace && (
                        <button
                          type="button"
                          onClick={(e) => handleImport(e, file)}
                          disabled={importingId === file.id || importedIds.has(file.id)}
                          title={
                            importedIds.has(file.id)
                              ? 'Saved to /data'
                              : 'Save to /data workspace'
                          }
                          className={`p-1.5 rounded-lg transition-colors flex items-center space-x-1 text-xs ${
                            importedIds.has(file.id)
                              ? 'text-emerald-700 bg-emerald-50 border border-emerald-200'
                              : 'text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200'
                          }`}
                        >
                          {importingId === file.id ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : importedIds.has(file.id) ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Saved</span>
                            </>
                          ) : (
                            <>
                              <ArrowDownToLine className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Save to /data</span>
                            </>
                          )}
                        </button>
                      )}
                      {file.webViewLink && (
                        <a
                          href={file.webViewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Open in Google Drive"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {!folder && file.capabilities?.canDownload && (
                        <a
                          href={`https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                          title="Download"
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
