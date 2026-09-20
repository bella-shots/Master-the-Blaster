export interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  size?: string;
  modifiedTime?: string;
  webViewLink?: string;
  iconLink?: string;
  thumbnailLink?: string;
  hasThumbnail?: boolean;
  owners?: Array<{
    displayName: string;
    emailAddress?: string;
    photoLink?: string;
  }>;
  shared?: boolean;
  capabilities?: {
    canDownload?: boolean;
  };
}

export interface FolderBreadcrumb {
  id: string;
  name: string;
}
