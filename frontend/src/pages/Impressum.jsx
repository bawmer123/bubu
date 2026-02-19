import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail } from 'lucide-react';

const Impressum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/icmn-logo.png" 
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
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Zurück</span>
          </Link>
        </nav>
      </header>

      {/* Content */}
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0f172a] mb-8">
            Impressum
          </h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>ICMN &amp; Partner Rechtsanwälte</strong><br />
              Maximilianstraße 123<br />
              80539 München<br />
              Deutschland
            </p>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">
              Kontakt
            </h2>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#d4a446]" />
                <span className="text-gray-700">+49 (0) 30 1234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#d4a446]" />
                <a href="mailto:info@icmn-rechtsanwaelte.de" className="text-[#d4a446] hover:underline">
                  info@icmn-rechtsanwaelte.de
                </a>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">
              Vertretungsberechtigte
            </h2>
            <p className="text-gray-700 mb-4">
              Dr. Karim Nassar, Rechtsanwalt<br />
              RA Sarah Al-Rashid, Rechtsanwältin<br />
              RA Michael Weber, Rechtsanwalt
            </p>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">
              Berufsrechtliche Regelungen
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Bundesrechtsanwaltsordnung (BRAO)</li>
              <li>Berufsordnung für Rechtsanwälte (BORA)</li>
              <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
              <li>Fachanwaltsordnung (FAO)</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">
              Zuständige Kammer
            </h2>
            <p className="text-gray-700 mb-4">
              Rechtsanwaltskammer München<br />
              Tal 33<br />
              80331 München<br />
              <a href="https://www.rak-muenchen.de" target="_blank" rel="noopener noreferrer" className="text-[#d4a446] hover:underline">
                www.rak-muenchen.de
              </a>
            </p>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">
              Berufsbezeichnung
            </h2>
            <p className="text-gray-700 mb-4">
              Rechtsanwalt (verliehen in der Bundesrepublik Deutschland)
            </p>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">
              Berufshaftpflichtversicherung
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>HDI Versicherung AG</strong><br />
              HDI-Platz 1<br />
              30659 Hannover
            </p>
            <p className="text-gray-700 mb-4">
              Geltungsbereich: Deutschland und europaweit
            </p>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">
              Haftungsausschluss
            </h2>
            <h3 className="text-xl font-semibold text-[#0f172a] mt-6 mb-3">
              Haftung für Inhalte
            </h3>
            <p className="text-gray-700 mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>

            <h3 className="text-xl font-semibold text-[#0f172a] mt-6 mb-3">
              Haftung für Links
            </h3>
            <p className="text-gray-700 mb-4">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="text-xl font-semibold text-[#0f172a] mt-6 mb-3">
              Urheberrecht
            </h3>
            <p className="text-gray-700 mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#d4a446] transition-colors font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
