import React, { useState, useEffect, useRef } from 'react';
import {
  Scale,
  Landmark,
  Building2,
  Briefcase,
  Shield,
  Users,
  ChevronDown,
  ArrowRight,
  Quote,
  Award,
  CircleCheckBig,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowUp,
  Linkedin,
  Clock as ClockIcon
} from 'lucide-react';
import { services, teamMembers, contactInfo, rechtsgebiete, stats, features } from '../mockData';

const iconMap = {
  Scale,
  Landmark,
  Building2,
  Briefcase,
  Shield,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock: ClockIcon
};

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rechtsgebiet: '',
    message: ''
  });

  const observerRef = useRef(null);

  // Typing animation
  useEffect(() => {
    const text = 'Ihr Rechtsanwalt in Berlin';
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Scroll reveal animation
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Back to top button visibility and nav scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      rechtsgebiet: '',
      message: ''
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center gap-3">
              <div className={`h-12 w-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                scrolled ? 'bg-[#0f172a]' : 'bg-white'
              }`}>
                <img 
                  src="https://customer-assets.emergentagent.com/job_web-overhaul-19/artifacts/13jzxqcy_file.png" 
                  alt="ICMN Logo" 
                  className={`h-10 w-10 object-contain transition-all duration-300 ${
                    scrolled ? '' : 'brightness-0 invert'
                  }`}
                />
              </div>
              <span className={`text-2xl font-serif font-bold transition-colors duration-300 ${
                scrolled ? 'text-[#0f172a]' : 'text-white'
              }`}>
                ICMN <span className="text-[#d4a446]">&amp; Partner</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, 'hero')}
                className={`font-medium transition-colors duration-300 hover:text-[#d4a446] ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Home
              </a>
              <a
                href="#leistungen"
                onClick={(e) => handleNavClick(e, 'leistungen')}
                className={`font-medium transition-colors duration-300 hover:text-[#d4a446] ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Leistungen
              </a>
              <a
                href="#ueber-uns"
                onClick={(e) => handleNavClick(e, 'ueber-uns')}
                className={`font-medium transition-colors duration-300 hover:text-[#d4a446] ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Über uns
              </a>
              <a
                href="#team"
                onClick={(e) => handleNavClick(e, 'team')}
                className={`font-medium transition-colors duration-300 hover:text-[#d4a446] ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Team
              </a>
              <a
                href="#kontakt"
                onClick={(e) => handleNavClick(e, 'kontakt')}
                className="px-6 py-2 bg-[#d4a446] text-[#0f172a] font-semibold rounded-lg hover:bg-[#e0b558] transition-all duration-300"
              >
                Kontakt
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                scrolled ? 'text-[#0f172a]' : 'text-white'
              }`}
              aria-label="Toggle menu"
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
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, 'hero')}
                  className="text-gray-700 font-medium hover:text-[#d4a446] transition-colors py-2"
                >
                  Home
                </a>
                <a
                  href="#leistungen"
                  onClick={(e) => handleNavClick(e, 'leistungen')}
                  className="text-gray-700 font-medium hover:text-[#d4a446] transition-colors py-2"
                >
                  Leistungen
                </a>
                <a
                  href="#ueber-uns"
                  onClick={(e) => handleNavClick(e, 'ueber-uns')}
                  className="text-gray-700 font-medium hover:text-[#d4a446] transition-colors py-2"
                >
                  Über uns
                </a>
                <a
                  href="#team"
                  onClick={(e) => handleNavClick(e, 'team')}
                  className="text-gray-700 font-medium hover:text-[#d4a446] transition-colors py-2"
                >
                  Team
                </a>
                <a
                  href="#kontakt"
                  onClick={(e) => handleNavClick(e, 'kontakt')}
                  className="px-6 py-2 bg-[#d4a446] text-[#0f172a] font-semibold rounded-lg hover:bg-[#e0b558] transition-all duration-300 text-center"
                >
                  Kontakt
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-[#0f172a]/80 to-[#0f172a]/95" />
        
        {/* Decorative blurs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4a446]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4a446]/3 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-16">
          <div className="inline-block px-5 py-2 border border-[#d4a446]/40 rounded-full mb-8 animate-fadeInUp">
            <span className="text-[#d4a446] text-sm font-medium tracking-widest uppercase">⚖️ Seit 2005 an Ihrer Seite</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            ICMN <span className="text-[#d4a446]">&amp; Partner</span>
          </h1>

          <div className="h-16 sm:h-20 flex items-center justify-center mb-8 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
              {typedText}<span className="text-[#d4a446] ml-0.5 animate-blink">|</span>
            </p>
          </div>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            Professionelle Rechtsberatung in allen Bereichen des nationalen und internationalen Rechts. Wir setzen Ihre Interessen durch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <a
              href="#kontakt"
              onClick={(e) => handleNavClick(e, 'kontakt')}
              className="px-8 py-4 bg-[#d4a446] text-[#0f172a] font-bold rounded-lg hover:bg-[#e0b558] transition-all duration-300 shadow-lg shadow-[#d4a446]/30 hover:shadow-[#d4a446]/50 text-lg cursor-pointer"
            >
              Kostenlose Erstberatung
            </a>
            <a
              href="#leistungen"
              onClick={(e) => handleNavClick(e, 'leistungen')}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-[#d4a446] hover:text-[#d4a446] transition-all duration-300 text-lg cursor-pointer"
            >
              Unsere Leistungen
            </a>
          </div>

          <div className="grid grid-cols-3 max-w-xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 divide-x divide-white/10 animate-fadeInUp" style={{ animationDelay: '1s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-6 py-4">
                <div className="text-3xl sm:text-4xl font-bold text-[#d4a446] font-serif">{stat.value}</div>
                <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#leistungen" onClick={(e) => handleNavClick(e, 'leistungen')} className="cursor-pointer">
            <ChevronDown className="text-[#d4a446] w-8 h-8" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1.5 bg-[#d4a446]/10 text-[#d4a446] rounded-full text-sm font-semibold tracking-widest uppercase mb-4">
              ⚖️ Unsere Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-4">
              Unsere <span className="text-[#d4a446]">Leistungen</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Wir bieten umfassende rechtliche Beratung und Vertretung in allen wichtigen Rechtsgebieten.
            </p>
            <div className="w-24 h-1 bg-[#d4a446] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className="reveal card-3d group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#d4a446]/30"
                  style={{ transitionDelay: `${service.delay}ms` }}
                >
                  <div className="w-16 h-16 bg-[#0f172a]/5 group-hover:bg-[#d4a446]/10 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-[#0f172a] group-hover:text-[#d4a446] transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0f172a] mb-3 group-hover:text-[#d4a446] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-6">{service.description}</p>
                  <button className="flex items-center gap-2 text-[#d4a446] font-semibold text-sm group/link hover:gap-3 transition-all duration-300">
                    <span>Mehr erfahren</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-[#0f172a]/85" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="reveal">
            <Quote className="w-16 h-16 text-[#d4a446] mx-auto mb-8 opacity-50" />
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif text-white leading-relaxed mb-8 italic">
              „Das Recht ist das Schwert der Gerechtigkeit. Wir führen es mit Präzision und Leidenschaft für unsere Mandanten."
            </blockquote>
            <div className="w-16 h-0.5 bg-[#d4a446] mx-auto mb-4" />
            <cite className="text-[#d4a446] font-semibold text-lg not-italic">— ICMN &amp; Partner, Gründungskanzlei</cite>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="ueber-uns" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=700&q=80"
                  alt="Internationale Zusammenarbeit"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-[#d4a446] text-[#0f172a] p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-3xl font-bold font-serif">18+</div>
                  <div className="text-sm font-semibold">Jahre Erfahrung</div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#d4a446]/30 rounded-2xl -z-10" />
            </div>

            <div className="reveal-right">
              <span className="inline-block px-4 py-1.5 bg-[#d4a446]/10 text-[#d4a446] rounded-full text-sm font-semibold tracking-widest uppercase mb-4">
                👥 Über uns
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0f172a] mb-6">
                Ihre Kanzlei für <span className="text-[#d4a446]">erstklassige Rechtsberatung</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                ICMN &amp; Partner steht für kompetente, engagierte und mandantenorientierte Rechtsberatung. Seit unserer Gründung im Jahr 2005 haben wir uns als eine der führenden Kanzleien im Bereich des internationalen und arabischen Rechts etabliert.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Unser mehrsprachiges Team aus erfahrenen Rechtsanwälten berät und vertritt Mandanten aus dem In- und Ausland in sämtlichen Rechtsfragen. Dabei stehen Vertrauen, Diskretion und Erfolg im Mittelpunkt unserer Arbeit.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CircleCheckBig className="w-5 h-5 text-[#d4a446] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-8 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#0f172a]/5 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#0f172a]" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#0f172a]">500+</div>
                    <div className="text-xs text-gray-500">Mandanten</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#0f172a]/5 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#0f172a]" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#0f172a]">24/7</div>
                    <div className="text-xs text-gray-500">Erreichbarkeit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1.5 bg-[#d4a446]/10 text-[#d4a446] rounded-full text-sm font-semibold tracking-widest uppercase mb-4">
              🏆 Unser Team
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-4">
              Erfahrene <span className="text-[#d4a446]">Anwälte</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Lernen Sie unser engagiertes Team aus erfahrenen Rechtsanwälten kennen.
            </p>
            <div className="w-24 h-1 bg-[#d4a446] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="reveal team-card group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/90 to-transparent p-6 pt-16">
                  <h3 className="text-xl font-serif font-bold text-white">{member.name}</h3>
                  <p className="text-[#d4a446] text-sm font-medium">{member.position}</p>
                </div>

                <div className="team-overlay absolute inset-0 bg-[#0f172a]/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                  <div className="w-24 h-24 rounded-full border-3 border-[#d4a446] mb-4 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#d4a446] text-sm font-medium mb-2">{member.position}</p>
                  <p className="text-gray-400 text-sm text-center mb-6">{member.specialization}</p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/10 hover:bg-[#d4a446] rounded-full flex items-center justify-center transition-all duration-300 group/icon"
                    >
                      <Linkedin className="w-5 h-5 text-white group-hover/icon:text-[#0f172a]" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/10 hover:bg-[#d4a446] rounded-full flex items-center justify-center transition-all duration-300 group/icon"
                    >
                      <Mail className="w-5 h-5 text-white group-hover/icon:text-[#0f172a]" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1.5 bg-[#d4a446]/10 text-[#d4a446] rounded-full text-sm font-semibold tracking-widest uppercase mb-4">
              📧 Kontakt
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-4">
              Nehmen Sie <span className="text-[#d4a446]">Kontakt auf</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Wir sind für Sie da. Kontaktieren Sie uns für eine unverbindliche Erstberatung.
            </p>
            <div className="w-24 h-1 bg-[#d4a446] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info) => {
              const IconComponent = iconMap[info.icon];
              return (
                <div
                  key={info.id}
                  className="reveal bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#d4a446]/30 group"
                >
                  <div className="w-14 h-14 bg-[#0f172a]/5 group-hover:bg-[#d4a446]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-[#0f172a] group-hover:text-[#d4a446] transition-colors duration-300" />
                  </div>
                  <h4 className="font-serif font-bold text-[#0f172a] mb-2">{info.title}</h4>
                  {info.lines.map((line, index) => (
                    <p key={index} className="text-gray-600 text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto reveal">
            <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a446]/50 focus:border-[#d4a446] transition-all"
                      placeholder="Ihr vollständiger Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-2">E-Mail *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a446]/50 focus:border-[#d4a446] transition-all"
                      placeholder="ihre@email.de"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-2">Telefon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a446]/50 focus:border-[#d4a446] transition-all"
                      placeholder="+49 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-2">Rechtsgebiet</label>
                    <select
                      name="rechtsgebiet"
                      value={formData.rechtsgebiet}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a446]/50 focus:border-[#d4a446] transition-all text-gray-700"
                    >
                      {rechtsgebiete.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-[#0f172a] mb-2">Nachricht *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a446]/50 focus:border-[#d4a446] transition-all resize-none"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-[#d4a446] hover:bg-[#e0b558] text-[#0f172a] font-bold rounded-xl transition-all duration-300 shadow-lg shadow-[#d4a446]/30 hover:shadow-[#d4a446]/50 flex items-center justify-center gap-2 text-lg"
                >
                  <Send className="w-5 h-5" />
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#d4a446] hover:bg-[#e0b558] text-[#0f172a] rounded-full shadow-xl shadow-[#d4a446]/30 flex items-center justify-center transition-all duration-500 ${
          showBackToTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Home;
