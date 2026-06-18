import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { SubPageHeader } from '../components/SubPageHeader';

export default function AGB() {
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
              <FileText className="w-8 h-8 text-[#d4a446]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0f172a]">Allgemeine Geschäftsbedingungen</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8 text-lg">
              Die nachfolgenden Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Rechtsberatungsverträge zwischen ICMN &amp; Partner Rechtsanwälte und ihren Mandanten.
            </p>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">1. Geltungsbereich</h2>
            <p className="text-gray-700 mb-4">
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Rechtsberatungsleistungen, die ICMN &amp; Partner Rechtsanwälte für Mandanten erbringt. Abweichende Bedingungen des Mandanten werden nicht anerkannt, es sei denn, wir stimmen ihrer Geltung ausdrücklich schriftlich zu.
            </p>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">2. Vertragsschluss und Mandatsübernahme</h2>
            <p className="text-gray-700 mb-4">
              Der Rechtsberatungsvertrag kommt durch ausdrückliche oder konkludente Mandatsübernahme zustande. Die Mandatsübernahme erfolgt in der Regel schriftlich, kann aber auch mündlich oder durch tatsächliche Bearbeitung erfolgen.
            </p>
            <p className="text-gray-700 mb-6">
              Wir sind berechtigt, die Übernahme eines Mandats ohne Angabe von Gründen abzulehnen. Eine Pflicht zur Mandatsübernahme besteht nur im Rahmen gesetzlicher Vorgaben (z.B. Pflichtverteidigung).
            </p>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">3. Umfang der Beauftragung</h2>
            <p className="text-gray-700 mb-4">
              Der Umfang des erteilten Mandats ergibt sich aus der Mandatsvereinbarung. Soweit nicht ausdrücklich anders vereinbart, umfasst das Mandat nur die ausdrücklich bezeichnete Angelegenheit in der bezeichneten Instanz.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Außergerichtliche Tätigkeiten sind grundsätzlich gesondert zu beauftragen</li>
              <li>Die Vertretung in weiteren Instanzen bedarf einer gesonderten Beauftragung</li>
              <li>Vollstreckungsmaßnahmen sind nicht vom ursprünglichen Mandat umfasst</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">4. Vergütung</h2>
            <p className="text-gray-700 mb-4">
              Die Vergütung richtet sich nach dem Rechtsanwaltsvergütungsgesetz (RVG), soweit nicht eine Vergütungsvereinbarung getroffen wurde. Mögliche Vergütungsformen sind:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>Gesetzliche Gebühren:</strong> nach dem RVG</li>
              <li><strong>Stundenhonorar:</strong> nach schriftlicher Vereinbarung</li>
              <li><strong>Pauschalhonorar:</strong> für bestimmte Tätigkeiten</li>
              <li><strong>Erfolgshonorar:</strong> nur in gesetzlich zulässigen Fällen</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">5. Fälligkeit und Abrechnung</h2>
            <p className="text-gray-700 mb-4">
              Gebühren und Auslagen werden nach Beendigung der Angelegenheit, bei umfangreicheren Mandaten auch in angemessenen Abständen in Rechnung gestellt. Rechnungen sind innerhalb von 14 Tagen nach Zugang ohne Abzug zahlbar.
            </p>
            <p className="text-gray-700 mb-6">
              Wir sind berechtigt, angemessene Vorschüsse zu verlangen. Vor Erbringung umfangreicher Leistungen können wir die Zahlung eines Kostenvorschusses verlangen.
            </p>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">6. Mitwirkungspflichten des Mandanten</h2>
            <p className="text-gray-700 mb-4">Der Mandant ist verpflichtet:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Uns vollständig und wahrheitsgemäß über alle rechtserheblichen Tatsachen zu informieren</li>
              <li>Alle erforderlichen Unterlagen und Informationen rechtzeitig zur Verfügung zu stellen</li>
              <li>Uns unverzüglich über Änderungen der Sach- oder Rechtslage zu informieren</li>
              <li>Fristen mitzuteilen und uns mit Schriftstücken zu befassen, die ihm im Zusammenhang mit dem Mandat zugehen</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">7. Verschwiegenheit und Datenschutz</h2>
            <p className="text-gray-700 mb-4">
              Wir unterliegen der anwaltlichen Verschwiegenheitspflicht nach § 43a BRAO. Alle Informationen, die uns im Zusammenhang mit dem Mandat anvertraut werden, behandeln wir streng vertraulich.
            </p>
            <p className="text-gray-700 mb-6">
              Die Verarbeitung personenbezogener Daten erfolgt im Einklang mit den Bestimmungen der DSGVO. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
            </p>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">8. Haftung</h2>
            <p className="text-gray-700 mb-4">
              Für Schäden haften wir nach den gesetzlichen Bestimmungen. Die Haftung ist durch eine Berufshaftpflichtversicherung abgedeckt. Details zur Versicherung finden Sie im Impressum.
            </p>
            <p className="text-gray-700 mb-6">
              Für leichte Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten. Die Haftung ist auf den vorhersehbaren, vertragstypischen Schaden begrenzt.
            </p>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">9. Beendigung des Mandats</h2>
            <p className="text-gray-700 mb-4">
              Das Mandatsverhältnis kann von beiden Seiten jederzeit gekündigt werden. Die Kündigung bedarf zu Nachweiszwecken der Schriftform.
            </p>
            <p className="text-gray-700 mb-6">
              Bei Kündigung durch den Mandanten besteht Anspruch auf Vergütung der bis zur Kündigung erbrachten Leistungen. Bei Kündigung durch uns sind wir verpflichtet, dem Mandanten seine Unterlagen herauszugeben.
            </p>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">10. Aufbewahrung von Handakten</h2>
            <p className="text-gray-700 mb-4">
              Nach Beendigung des Mandats bewahren wir die Handakten für die Dauer von 10 Jahren auf. Nach Ablauf dieser Frist sind wir berechtigt, die Akten zu vernichten, sofern der Mandant die Herausgabe nicht verlangt hat.
            </p>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">11. Anwendbares Recht und Gerichtsstand</h2>
            <p className="text-gray-700 mb-4">
              Es gilt deutsches Recht. Gerichtsstand für alle Streitigkeiten aus dem Mandatsverhältnis ist München, sofern der Mandant Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
            </p>

            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mt-8 mb-4">12. Salvatorische Klausel</h2>
            <p className="text-gray-700 mb-6">
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt.
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 mt-8">
              <p className="text-gray-700 text-sm">
                <strong>Stand:</strong> {new Date().toLocaleDateString('de-DE')}<br />
                ICMN &amp; Partner Rechtsanwälte<br />
                München
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#d4a446] transition-colors font-semibold" data-testid="agb-back-link">
              <ArrowLeft className="w-5 h-5" />
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
