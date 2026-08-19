import React from 'react';
import { Award, CircleCheckBig, Users, Clock } from 'lucide-react';
import { features } from '../../mockData';

export function AboutSection() {
  return (
    <section id="ueber-uns" className="py-24 bg-white" data-testid="about-section">
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
                <div className="text-3xl font-bold font-serif">12+</div>
                <div className="text-sm font-semibold">Jahre Erfahrung</div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#d4a446]/30 rounded-2xl -z-10" />
          </div>

          <div className="reveal-right">
            <span className="inline-block px-4 py-1.5 bg-[#d4a446]/10 text-[#d4a446] rounded-full text-sm font-semibold tracking-widest uppercase mb-4">
              Über uns
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0f172a] mb-6">
              Ihre Kanzlei für <span className="text-[#d4a446]">erstklassige Rechtsberatung</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              ICMN &amp; Partner steht für kompetente, engagierte und mandantenorientierte Rechtsberatung. Seit unserer Gründung im Jahr 2013 haben wir uns als eine der führenden Kanzleien im Bereich des Immobilienrechts etabliert.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Unser mehrsprachiges Team aus erfahrenen Rechtsanwälten berät und vertritt Mandanten aus dem In- und Ausland in sämtlichen Rechtsfragen. Dabei stehen Vertrauen, Diskretion und Erfolg im Mittelpunkt unserer Arbeit.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
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
  );
}
