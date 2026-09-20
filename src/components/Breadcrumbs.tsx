import React from 'react';
import { ChevronRight, Folder } from 'lucide-react';
import { FolderBreadcrumb } from '../types';

interface BreadcrumbsProps {
  items: FolderBreadcrumb[];
  onNavigate: (index: number) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav className="flex items-center space-x-1 text-sm overflow-x-auto py-1 scrollbar-none" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={item.id + '-' + index}>
            {index > 0 && <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mx-0.5" />}
            <button
              id={`breadcrumb-item-${index}`}
              type="button"
              onClick={() => onNavigate(index)}
              disabled={isLast}
              className={`flex items-center space-x-1.5 px-2 py-1 rounded-md transition-colors whitespace-nowrap ${
                isLast
                  ? 'font-semibold text-slate-900 cursor-default bg-slate-100'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {index === 0 && <Folder className="w-4 h-4 text-amber-500" />}
              <span>{item.name}</span>
            </button>
          </React.Fragment>
        );
      })}
    </nav>
  );
};
