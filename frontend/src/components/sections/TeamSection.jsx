import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { teamMembers } from '../../mockData';

export function TeamSection({ onNavClick }) {
  return (
    <section id="team" className="py-24 bg-gray-50" data-testid="team-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 bg-[#d4a446]/10 text-[#d4a446] rounded-full text-sm font-semibold tracking-widest uppercase mb-4">
            Unser Team
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
            <div
              key={member.id}
              className="reveal team-card group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              data-testid={`team-member-${member.id}`}
            >
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
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-[#d4a446] rounded-full flex items-center justify-center transition-all duration-300 group/icon"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-white group-hover/icon:text-[#0f172a]" />
                  </a>
                  <button
                    onClick={(e) => onNavClick(e, 'kontakt')}
                    className="w-10 h-10 bg-white/10 hover:bg-[#d4a446] rounded-full flex items-center justify-center transition-all duration-300 group/icon"
                    aria-label="Send email"
                  >
                    <Mail className="w-5 h-5 text-white group-hover/icon:text-[#0f172a]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
