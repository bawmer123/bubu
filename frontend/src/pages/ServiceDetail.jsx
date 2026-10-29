import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Scale,
  Landmark,
  Building2,
  Briefcase,
  Shield,
  Users,
  ArrowLeft,
  CheckCircle2,
  Phone,
  Mail,
  Calendar,
} from 'lucide-react';

const iconMap = { Scale, Landmark, Building2, Briefcase, Shield, Users };

const serviceDetails = {
  immobilienrecht: {
    icon: 'Scale',
    title: 'Immobilienrecht',
    subtitle: 'Umfassende Beratung rund um Ihre Immobilie',
    description: 'Wir beraten Sie kompetent in allen Fragen des Immobilienrechts – vom Kauf über die Vermietung bis hin zu Baurechtsstreitigkeiten.',
    features: [
      'Kaufverträge und Verkauf von Immobilien',
      'Mietrecht und Vermieterfragen',
      'Baurecht und Baugenehmigungen',
      'Wohnungseigentumsrecht',
      'Grundstücksrecht und Grenzkonflikte',
      'Maklerverträge und Provisionsstreitigkeiten',
    ],
    details: [
      { title: 'Immobilienkauf & Verkauf', content: 'Wir prüfen Kaufverträge, begleiten Sie beim Notartermin und sichern Ihre Rechte beim Immobilienerwerb oder -verkauf.' },
      { title: 'Mietrecht', content: 'Ob Kündigungsschutz, Mieterhöhungen oder Betriebskostenabrechnungen – wir vertreten sowohl Mieter als auch Vermieter.' },
      { title: 'Baurecht', content: 'Von der Baugenehmigung bis zu Mängelansprüchen beim Hausbau stehen wir Ihnen zur Seite.' },
    ],
  },
  verwaltungsrecht: {
    icon: 'Landmark',
    title: 'Verwaltungsrecht',
    subtitle: 'Ihre Rechte gegenüber Behörden durchsetzen',
    description: 'Wir vertreten Sie in allen verwaltungsrechtlichen Angelegenheiten und setzen Ihre Interessen gegenüber Behörden durch.',
    features: [
      'Widerspruchsverfahren gegen Behördenentscheidungen',
      'Verwaltungsgerichtliche Klagen',
      'Aufenthalts- und Asylrecht',
      'Sozialrecht und Leistungen',
      'Gewerberecht und Genehmigungen',
      'Polizei- und Ordnungsrecht',
    ],
    details: [
      { title: 'Widersprüche & Klagen', content: 'Wir legen fristgerecht Widerspruch ein und führen erforderliche Klageverfahren vor den Verwaltungsgerichten.' },
      { title: 'Aufenthaltsrecht', content: 'Beratung bei Visa, Aufenthaltstiteln, Einbürgerung und ausländerrechtlichen Fragen.' },
      { title: 'Sozialrecht', content: 'Durchsetzung von Ansprüchen auf Sozialleistungen, ALG II, Pflegegeld und andere Leistungen.' },
    ],
  },
  wirtschaftsrecht: {
    icon: 'Building2',
    title: 'Wirtschaftsrecht',
    subtitle: 'Rechtssichere Beratung für Ihr Unternehmen',
    description: 'Wir begleiten Unternehmen in allen wirtschaftsrechtlichen Belangen – von der Gründung bis zur Vertragsgestaltung.',
    features: [
      'Gesellschaftsrecht (GmbH, AG, UG)',
      'Handelsrecht und Handelsverträge',
      'Wettbewerbsrecht und Markenrecht',
      'Vertragsrecht und AGB-Prüfung',
      'Unternehmenskauf und M&A',
      'Compliance und Datenschutz',
    ],
    details: [
      { title: 'Gesellschaftsrecht', content: 'Gründungsberatung, Gesellschafterverträge, Umstrukturierungen und Gesellschafterstreitigkeiten.' },
      { title: 'Vertragsgestaltung', content: 'Erstellung und Prüfung von Verträgen, AGB, Lizenzverträgen und Kooperationsvereinbarungen.' },
      { title: 'Wettbewerbsrecht', content: 'Schutz vor unlauterem Wettbewerb, Markenanmeldungen und gewerblicher Rechtsschutz.' },
    ],
  },
  arbeitsrecht: {
    icon: 'Briefcase',
    title: 'Arbeitsrecht',
    subtitle: 'Schutz Ihrer Arbeitnehmerrechte',
    description: 'Kompetente Vertretung bei Kündigungen, Abfindungen und allen arbeitsrechtlichen Streitigkeiten.',
    features: [
      'Kündigungsschutz und Kündigungsschutzklagen',
      'Abfindungsverhandlungen',
      'Abmahnungen und Zeugnisse',
      'Arbeitsverträge und Aufhebungsverträge',
      'Überstunden und Urlaubsansprüche',
      'Betriebsrat und kollektives Arbeitsrecht',
    ],
    details: [
      { title: 'Kündigungsschutz', content: 'Prüfung der Rechtmäßigkeit von Kündigungen und Durchsetzung Ihrer Rechte vor dem Arbeitsgericht.' },
      { title: 'Abfindungen', content: 'Verhandlung optimaler Abfindungen und Prüfung von Aufhebungsverträgen.' },
      { title: 'Arbeitsverträge', content: 'Prüfung und Verhandlung von Arbeitsverträgen, Änderungsverträgen und Versetzungen.' },
    ],
  },
  strafrecht: {
    icon: 'Shield',
    title: 'Strafrecht',
    subtitle: 'Engagierte Strafverteidigung in allen Instanzen',
    description: 'Wir verteidigen Sie effektiv in Strafverfahren – vom Ermittlungsverfahren bis zur Hauptverhandlung.',
    features: [
      'Strafverteidigung in allen Bereichen',
      'Vertretung im Ermittlungsverfahren',
      'Revision und Berufung',
      'Ordnungswidrigkeiten und Bußgelder',
      'Verkehrsstrafrecht',
      'Wirtschaftsstrafrecht',
    ],
    details: [
      { title: 'Strafverteidigung', content: 'Umfassende Verteidigung bei Strafvorwürfen aller Art – von der Polizeivernehmung bis zum Gerichtsverfahren.' },
      { title: 'Ermittlungsverfahren', content: 'Frühzeitige Intervention im Ermittlungsverfahren zur Wahrung Ihrer Rechte und Vermeidung von Aussagen.' },
      { title: 'Revision', content: 'Überprüfung von Urteilen und Einlegung von Rechtsmitteln zur Korrektur von Fehlurteilen.' },
    ],
  },
};

export default function ServiceDetail() {
  const { service } = useParams();
  const navigate = useNavigate();
  const details = serviceDetails[service];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  if (!details) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service nicht gefunden</h1>
          <Link to="/" className="text-[#d4a446] hover:underline">Zurück zur Startseite</Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[details.icon];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={`${process.env.PUBLIC_URL}/icmn-logo.png`} alt="ICMN Logo" className="h-10 w-10 object-contain" />
            <span className="text-2xl font-serif font-bold text-[#0f172a]">
              ICMN <span className="text-[#d4a446]">&amp; Partner</span>
            </span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-[#d4a446] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Zurück</span>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-[#d4a446]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <IconComponent className="w-10 h-10 text-[#d4a446]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0f172a] mb-4">{details.title}</h1>
            <p className="text-xl text-[#d4a446] font-semibold mb-6">{details.subtitle}</p>
            <p className="text-lg text-gray-600 leading-relaxed">{details.description}</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-8 text-center">
            Unsere <span className="text-[#d4a446]">Leistungen</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {details.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-6 h-6 text-[#d4a446] flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-[#0f172a] mb-12 text-center">
            Details & <span className="text-[#d4a446]">Schwerpunkte</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {details.details.map((detail) => (
              <div key={detail.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-serif font-bold text-[#0f172a] mb-4">{detail.title}</h3>
                <p className="text-gray-600 leading-relaxed">{detail.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-[#0f172a] to-[#1a2332]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
            Benötigen Sie rechtliche Beratung?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Kontaktieren Sie uns für eine unverbindliche Erstberatung zu Ihrem {details.title}-Fall.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+493012345678"
              className="px-8 py-4 bg-[#d4a446] text-[#0f172a] font-bold rounded-lg hover:bg-[#e0b558] transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Jetzt anrufen
            </a>
            <Link
              to="/#kontakt"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0f172a] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Kontaktformular
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-gray-400">
            <Calendar className="w-5 h-5" />
            <span>Montag - Freitag: 09:00 - 18:00 Uhr</span>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#d4a446] transition-colors font-semibold"
            data-testid="back-to-home-btn"
          >
            <ArrowLeft className="w-5 h-5" />
            Zurück zur Startseite
          </button>
        </div>
      </section>
    </div>
  );
}
