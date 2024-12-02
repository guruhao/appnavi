import React from 'react';
import { PenLine } from 'lucide-react';
import siteConfig from '../config/site.json';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm py-4 border-b border-primary-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <PenLine className="w-8 h-8 text-primary-600" />
            <h1 className="text-2xl font-bold text-primary-900">{siteConfig.title}</h1>
          </div>
        </div>
      </div>
    </header>
  );
}