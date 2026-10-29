import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function SubPageHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4" data-testid="sub-page-header">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" data-testid="header-logo-link">
          <img
            src={`${process.env.PUBLIC_URL}/icmn-logo.png`}
            alt="ICMN Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-2xl font-serif font-bold text-[#0f172a]">
            ICMN <span className="text-[#d4a446]">&amp; Partner</span>
          </span>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-700 hover:text-[#d4a446] transition-colors"
          data-testid="header-back-link"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Zurück</span>
        </Link>
      </nav>
    </header>
  );
}
