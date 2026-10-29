import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { services } from '../../mockData';

export function FooterSection({ onNavClick }) {
  return (
    <footer className="bg-[#0f172a] text-white" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={`${process.env.PUBLIC_URL}/icmn-logo.png`} alt="ICMN Logo" className="h-10 w-10 object-contain" />
              <span className="text-xl font-serif font-bold">
                ICMN <span className="text-[#d4a446]">&amp; Partner</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Ihre Kanzlei für erstklassige Rechtsberatung in München. Seit 2013 an Ihrer Seite.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/tea-tsiklauri-r%C3%A9gal-58084477/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#d4a446] rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@icmn.de"
                className="w-10 h-10 bg-white/10 hover:bg-[#d4a446] rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4 text-[#d4a446]">Navigation</h3>
            <ul className="space-y-2">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'leistungen', label: 'Leistungen' },
                { id: 'ueber-uns', label: 'Über uns' },
                { id: 'team', label: 'Team' },
                { id: 'kontakt', label: 'Kontakt' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => onNavClick(e, link.id)}
                    className="text-gray-400 hover:text-[#d4a446] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtsgebiete */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4 text-[#d4a446]">Rechtsgebiete</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/service/${service.value}`}
                    className="text-gray-400 hover:text-[#d4a446] transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4 text-[#d4a446]">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4a446] flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <div>Orleansstraße 21</div>
                  <div>81667 München</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#d4a446] flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <div>+49 (0) 30 1234 5678</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#d4a446] flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <a href="mailto:info@icmn.de" className="hover:text-[#d4a446] transition-colors" data-testid="footer-email-link">info@icmn.de</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#d4a446] flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <div>Mo – Fr: 09:00 – 18:00</div>
                  <div>Sa: nach Vereinbarung</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ICMN &amp; Partner. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <Link to="/impressum" className="text-gray-400 hover:text-[#d4a446] text-sm transition-colors" data-testid="footer-impressum-link">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-gray-400 hover:text-[#d4a446] text-sm transition-colors" data-testid="footer-datenschutz-link">
                Datenschutz
              </Link>
              <Link to="/agb" className="text-gray-400 hover:text-[#d4a446] text-sm transition-colors" data-testid="footer-agb-link">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
