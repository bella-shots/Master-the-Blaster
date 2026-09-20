import { DriveFile } from './types';

export function extractFolderId(input: string): string {
  const trimmed = input.trim();
  // Match standard google drive folder url patterns:
  // https://drive.google.com/drive/folders/1A3Ex02WHDf3lP0EA1RkHq0Br_MPgxyfI
  // https://drive.google.com/drive/u/0/folders/1A3Ex02WHDf3lP0EA1RkHq0Br_MPgxyfI
  const match = trimmed.match(/\/folders\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return match[1];
  }
  // If it's already an ID
  if (/^[a-zA-Z0-9_-]{15,}$/.test(trimmed)) {
    return trimmed;
  }
  return trimmed;
}

export async function fetchFolderDetails(
  folderId: string,
  accessToken: string
): Promise<DriveFile> {
  const fields = 'id,name,mimeType,webViewLink,owners,modifiedTime';
  const url = `https://www.googleapis.com/drive/v3/files/${folderId}?fields=${encodeURIComponent(fields)}&supportsAllDrives=true`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    const message = errorData?.error?.message || `HTTP ${res.status}: Failed to fetch folder metadata`;
    throw new Error(message);
  }

  return res.json();
}

export async function fetchFolderFiles(
  folderId: string,
  accessToken: string,
  pageToken?: string
): Promise<{ files: DriveFile[]; nextPageToken?: string }> {
  const query = `'${folderId}' in parents and trashed = false`;
  const fields = 'nextPageToken,files(id,name,mimeType,size,modifiedTime,webViewLink,iconLink,thumbnailLink,hasThumbnail,owners,capabilities)';
  const pageSize = 100;

  let url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(
    query
  )}&fields=${encodeURIComponent(fields)}&pageSize=${pageSize}&orderBy=${encodeURIComponent(
    'folder,name'
  )}&supportsAllDrives=true&includeItemsFromAllDrives=true`;

  if (pageToken) {
    url += `&pageToken=${encodeURIComponent(pageToken)}`;
  }

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    const message = errorData?.error?.message || `HTTP ${res.status}: Failed to fetch folder contents`;
    throw new Error(message);
  }

  return res.json();
}

export function formatFileSize(bytes?: string | number): string {
  if (!bytes) return '--';
  const num = typeof bytes === 'string' ? parseInt(bytes, 10) : bytes;
  if (isNaN(num)) return '--';
  if (num === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(num) / Math.log(k));
  return `${parseFloat((num / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

export function formatDate(isoString?: string): string {
  if (!isoString) return '--';
  try {
    const date = new Date(isoString);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return isoString;
  }
}

export function isFolder(mimeType: string): boolean {
  return mimeType === 'application/vnd.google-apps.folder';
}
