import React from 'react';
import { Quote } from 'lucide-react';

export function QuoteSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute left-0 right-0 parallax-bg"
        data-parallax="0.2"
        style={{
          top: '-40%',
          height: '180%',
          backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-[#0f172a]/85" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="reveal">
          <Quote className="w-16 h-16 text-[#d4a446] mx-auto mb-8 opacity-50" />
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif text-white leading-relaxed mb-8 italic">
            &bdquo;Das Recht ist das Schwert der Gerechtigkeit. Wir führen es mit Präzision und Leidenschaft für unsere Mandanten.&ldquo;
          </blockquote>
          <div className="w-16 h-0.5 bg-[#d4a446] mx-auto mb-4" />
          <cite className="text-[#d4a446] font-semibold text-lg not-italic">&mdash; ICMN &amp; Partner, Gründungskanzlei</cite>
        </div>
      </div>
    </section>
  );
}
