import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';
import { NavHeader } from '../components/sections/NavHeader';
import { HeroSection } from '../components/sections/HeroSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { QuoteSection } from '../components/sections/QuoteSection';
import { AboutSection } from '../components/sections/AboutSection';
import { TeamSection } from '../components/sections/TeamSection';
import { ContactSection } from '../components/sections/ContactSection';
import { FooterSection } from '../components/sections/FooterSection';

const HERO_TEXT = 'Exzellenz in Recht, Steuern und Verwaltung';

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
    message: '',
  });

  // Typing animation
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= HERO_TEXT.length) {
        setTypedText(HERO_TEXT.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
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
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Scroll-driven parallax layers
  useEffect(() => {
    const layers = Array.from(document.querySelectorAll('[data-parallax]'));
    if (!layers.length) return undefined;

    let ticking = false;
    const update = () => {
      const winH = window.innerHeight;
      layers.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax')) || 0;
        const rect = el.parentElement.getBoundingClientRect();
        const progress = rect.top + rect.height / 2 - winH / 2;
        el.style.transform = `translate3d(0, ${(-progress * speed).toFixed(1)}px, 0)`;
      });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
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

  const handleNavClick = useCallback((e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleFormChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.');
    setFormData({ name: '', email: '', phone: '', rechtsgebiet: '', message: '' });
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <NavHeader
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
        onNavClick={handleNavClick}
      />
      <HeroSection typedText={typedText} onNavClick={handleNavClick} />
      <ServicesSection />
      <QuoteSection />
      <AboutSection />
      <TeamSection onNavClick={handleNavClick} />
      <ContactSection formData={formData} onFormChange={handleFormChange} onSubmit={handleSubmit} />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        data-testid="back-to-top-btn"
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#d4a446] hover:bg-[#e0b558] text-[#0f172a] rounded-full shadow-xl shadow-[#d4a446]/30 flex items-center justify-center transition-all duration-500 ${
          showBackToTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <FooterSection onNavClick={handleNavClick} />
    </div>
  );
};

export default Home;
