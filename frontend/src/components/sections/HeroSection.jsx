import React from 'react';
import { ChevronDown } from 'lucide-react';
import { stats } from '../../mockData';

export function HeroSection({ typedText, onNavClick }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-[#0f172a]/80 to-[#0f172a]/95" />

      {/* Decorative blurs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4a446]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4a446]/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-16">
        <div className="inline-block px-5 py-2 border border-[#d4a446]/40 rounded-full mb-8 animate-fadeInUp">
          <span className="text-[#d4a446] text-sm font-medium tracking-widest uppercase">Seit 2013 an Ihrer Seite</span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6 animate-fadeInUp text-3d-block"
          style={{ animationDelay: '0.2s' }}
        >
          ICMN <span className="text-[#d4a446] text-3d-block-gold">&amp; Partner</span>
        </h1>

        <div className="h-16 sm:h-20 flex items-center justify-center mb-8 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
            {typedText}<span className="text-[#d4a446] ml-0.5 animate-blink">|</span>
          </p>
        </div>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          Ihr strategischer Partner für steuerliche, betriebswirtschaftliche und administrative Herausforderungen. Wir verbinden fachliche Expertise mit persönlicher Beratung und präzisen Lösungen für unseren Mandanten.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <a
            href="#kontakt"
            onClick={(e) => onNavClick(e, 'kontakt')}
            className="px-8 py-4 bg-[#d4a446] text-[#0f172a] font-bold rounded-lg hover:bg-[#e0b558] transition-all duration-300 shadow-lg shadow-[#d4a446]/30 hover:shadow-[#d4a446]/50 text-lg cursor-pointer"
          >
            Kostenlose Erstberatung
          </a>
          <a
            href="#leistungen"
            onClick={(e) => onNavClick(e, 'leistungen')}
            className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-[#d4a446] hover:text-[#d4a446] transition-all duration-300 text-lg cursor-pointer"
          >
            Unsere Leistungen
          </a>
        </div>

        <div
          className="grid grid-cols-3 max-w-xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 divide-x divide-white/10 animate-fadeInUp"
          style={{ animationDelay: '1s' }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-6 py-4">
              <div className="text-3xl sm:text-4xl font-bold text-[#d4a446] font-serif">{stat.value}</div>
              <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#leistungen" onClick={(e) => onNavClick(e, 'leistungen')} className="cursor-pointer">
          <ChevronDown className="text-[#d4a446] w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
