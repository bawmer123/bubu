import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import { SubPageHeader } from '../components/SubPageHeader';

export default function Datenschutz() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SubPageHeader />

      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-[#d4a446]/10 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-[#d4a446]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0f172a]">Datenschutzerklärung</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8 text-lg">
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
            </p>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">1. Verantwortlicher</h2>
            <p className="text-gray-700 mb-4">Verantwortlicher für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="text-gray-700 mb-6">
              <strong>ICMN &amp; Partner Rechtsanwälte</strong><br />
              Maximilianstraße 123<br />
              80539 München<br />
              E-Mail: info@icmn-rechtsanwaelte.de<br />
              Telefon: +49 (0) 30 1234 5678
            </p>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p className="text-gray-700 mb-4">Bei der Nutzung unserer Website erheben wir folgende Daten:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>IP-Adresse des zugreifenden Rechners</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
              <li>Inhalt der Anforderung (konkrete Seite)</li>
              <li>Zugriffsstatus/HTTP-Statuscode</li>
              <li>Übertragene Datenmenge</li>
              <li>Website, von der die Anforderung kommt</li>
              <li>Browser und Betriebssystem</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">3. Kontaktformular</h2>
            <p className="text-gray-700 mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">4. Verwendung von Cookies</h2>
            <p className="text-gray-700 mb-4">
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Diese ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
            </p>
            <p className="text-gray-700 mb-6">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
            </p>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">5. Ihre Rechte</h2>
            <p className="text-gray-700 mb-4">
              Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>Auskunftsrecht:</strong> Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
              <li><strong>Berichtigungsrecht:</strong> Sie haben das Recht, unverzüglich die Berichtigung unrichtiger Daten zu verlangen.</li>
              <li><strong>Löschungsrecht:</strong> Sie können die Löschung Ihrer personenbezogenen Daten verlangen.</li>
              <li><strong>Einschränkung der Verarbeitung:</strong> Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.</li>
              <li><strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung Ihrer Daten widersprechen.</li>
              <li><strong>Beschwerderecht:</strong> Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren.</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">6. Datensicherheit</h2>
            <p className="text-gray-700 mb-4">
              Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.
            </p>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">7. Weitergabe von Daten</h2>
            <p className="text-gray-700 mb-4">
              Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben</li>
              <li>Die Verarbeitung zur Abwicklung eines Vertrags erforderlich ist</li>
              <li>Eine rechtliche Verpflichtung zur Weitergabe besteht</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">8. Aktualität der Datenschutzerklärung</h2>
            <p className="text-gray-700 mb-4">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand: {new Date().toLocaleDateString('de-DE')}.
            </p>
            <p className="text-gray-700 mb-6">
              Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#d4a446] transition-colors font-semibold" data-testid="datenschutz-back-link">
              <ArrowLeft className="w-5 h-5" />
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
