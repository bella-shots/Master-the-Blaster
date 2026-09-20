import React from 'react';
import {
  FileText,
  FileCode,
  Film,
  Image as ImageIcon,
  Music,
  Folder,
  FileSpreadsheet,
  Presentation,
  Archive,
  File,
} from 'lucide-react';

interface FileIconProps {
  mimeType: string;
  className?: string;
}

export const FileTypeIcon: React.FC<FileIconProps> = ({ mimeType, className = 'w-5 h-5' }) => {
  if (mimeType === 'application/vnd.google-apps.folder') {
    return <Folder className={`${className} text-amber-500 fill-amber-500/20`} />;
  }

  if (mimeType.includes('pdf')) {
    return <FileText className={`${className} text-red-500`} />;
  }

  if (
    mimeType.includes('document') ||
    mimeType.includes('vnd.google-apps.document') ||
    mimeType.includes('msword') ||
    mimeType.includes('text/plain')
  ) {
    return <FileText className={`${className} text-blue-500`} />;
  }

  if (
    mimeType.includes('spreadsheet') ||
    mimeType.includes('vnd.google-apps.spreadsheet') ||
    mimeType.includes('excel') ||
    mimeType.includes('csv')
  ) {
    return <FileSpreadsheet className={`${className} text-emerald-600`} />;
  }

  if (
    mimeType.includes('presentation') ||
    mimeType.includes('vnd.google-apps.presentation') ||
    mimeType.includes('powerpoint')
  ) {
    return <Presentation className={`${className} text-amber-600`} />;
  }

  if (mimeType.startsWith('image/')) {
    return <ImageIcon className={`${className} text-purple-500`} />;
  }

  if (mimeType.startsWith('video/')) {
    return <Film className={`${className} text-rose-500`} />;
  }

  if (mimeType.startsWith('audio/')) {
    return <Music className={`${className} text-teal-500`} />;
  }

  if (mimeType.includes('zip') || mimeType.includes('tar') || mimeType.includes('compressed')) {
    return <Archive className={`${className} text-yellow-600`} />;
  }

  if (
    mimeType.includes('json') ||
    mimeType.includes('javascript') ||
    mimeType.includes('typescript') ||
    mimeType.includes('html') ||
    mimeType.includes('css')
  ) {
    return <FileCode className={`${className} text-indigo-500`} />;
  }

  return <File className={`${className} text-slate-400`} />;
};
