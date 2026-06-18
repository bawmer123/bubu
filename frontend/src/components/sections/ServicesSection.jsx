import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Landmark, Building2, Briefcase, Shield, Users, ArrowRight } from 'lucide-react';
import { services } from '../../mockData';

const iconMap = { Scale, Landmark, Building2, Briefcase, Shield, Users };

export function ServicesSection() {
  return (
    <section id="leistungen" className="py-24 bg-gray-50" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 bg-[#d4a446]/10 text-[#d4a446] rounded-full text-sm font-semibold tracking-widest uppercase mb-4">
            Unsere Expertise
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
                data-testid={`service-card-${service.value}`}
              >
                <div className="w-16 h-16 bg-[#0f172a]/5 group-hover:bg-[#d4a446]/10 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-[#0f172a] group-hover:text-[#d4a446] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0f172a] mb-3 group-hover:text-[#d4a446] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">{service.description}</p>
                <Link
                  to={`/service/${service.value}`}
                  className="flex items-center gap-2 text-[#d4a446] font-semibold text-sm group/link hover:gap-3 transition-all duration-300"
                  data-testid={`service-link-${service.value}`}
                >
                  <span>Mehr erfahren</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
