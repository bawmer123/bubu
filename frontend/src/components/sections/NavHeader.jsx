import React from 'react';

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'ueber-uns', label: 'Über uns' },
  { id: 'team', label: 'Team' },
];

export function NavHeader({ scrolled, mobileMenuOpen, onToggleMobileMenu, onNavClick }) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
      data-testid="nav-header"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#hero" onClick={(e) => onNavClick(e, 'hero')} className="flex items-center gap-3">
            <div className={`h-12 w-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
              scrolled ? 'bg-[#0f172a]/5' : 'bg-white'
            }`} style={{ perspective: '600px' }}>
              <img src="/icmn-logo.png" alt="ICMN Logo" className="h-10 w-10 object-contain logo-spin-3d" />
            </div>
            <span className={`text-2xl font-serif font-bold transition-colors duration-300 ${
              scrolled ? 'text-[#0f172a]' : 'text-white'
            }`}>
              ICMN <span className="text-[#d4a446]">&amp; Partner</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => onNavClick(e, link.id)}
                className={`font-medium transition-colors duration-300 hover:text-[#d4a446] ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={(e) => onNavClick(e, 'kontakt')}
              className="px-6 py-2 bg-[#d4a446] text-[#0f172a] font-semibold rounded-lg hover:bg-[#e0b558] transition-all duration-300"
            >
              Kontakt
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onToggleMobileMenu}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? 'text-[#0f172a]' : 'text-white'
            }`}
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-4 z-50">
            <div className="flex flex-col space-y-4 px-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => onNavClick(e, link.id)}
                  className="text-gray-700 font-medium hover:text-[#d4a446] transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={(e) => onNavClick(e, 'kontakt')}
                className="px-6 py-2 bg-[#d4a446] text-[#0f172a] font-semibold rounded-lg hover:bg-[#e0b558] transition-all duration-300 text-center"
              >
                Kontakt
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
