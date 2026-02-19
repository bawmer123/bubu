import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = (type) => {
    localStorage.setItem('cookie_consent', type);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      data-testid="cookie-consent-banner"
      className="fixed bottom-0 left-0 right-0 z-[100] animate-slideUp"
    >
      <div className="bg-[#0f172a]/95 backdrop-blur-xl border-t border-[#d4a446]/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Shield className="w-5 h-5 text-[#d4a446] flex-shrink-0 mt-0.5" />
              <p className="text-gray-300 text-sm leading-relaxed">
                Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Weitere Informationen finden Sie in unserer{' '}
                <Link to="/datenschutz" className="text-[#d4a446] hover:underline font-medium">
                  Datenschutzerklärung
                </Link>.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0 w-full sm:w-auto">
              <button
                data-testid="cookie-accept-necessary"
                onClick={() => handleAccept('necessary')}
                className="flex-1 sm:flex-none px-5 py-2.5 border border-white/20 text-white text-sm font-medium rounded-lg hover:border-[#d4a446] hover:text-[#d4a446] transition-all duration-300"
              >
                Nur notwendige
              </button>
              <button
                data-testid="cookie-accept-all"
                onClick={() => handleAccept('all')}
                className="flex-1 sm:flex-none px-5 py-2.5 bg-[#d4a446] text-[#0f172a] text-sm font-bold rounded-lg hover:bg-[#e0b558] transition-all duration-300 shadow-lg shadow-[#d4a446]/20"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
