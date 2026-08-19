import React from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { contactInfo, rechtsgebiete } from '../../mockData';

const iconMap = { MapPin, Phone, Mail, Clock };

export function ContactSection({ formData, onFormChange, onSubmit }) {
  return (
    <section id="kontakt" className="py-24 bg-white" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 bg-[#d4a446]/10 text-[#d4a446] rounded-full text-sm font-semibold tracking-widest uppercase mb-4">
            Kontakt
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
          {contactInfo.map((info, idx) => {
            const IconComponent = iconMap[info.icon];
            return (
              <div
                key={info.id}
                className="reveal bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#d4a446]/30 group"
                style={{ transitionDelay: `${idx * 100}ms` }}
                data-testid={`contact-info-${info.id}`}
              >
                <div className="w-14 h-14 bg-[#0f172a]/5 group-hover:bg-[#d4a446]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-[#0f172a] group-hover:text-[#d4a446] transition-colors duration-300" />
                </div>
                <h4 className="font-serif font-bold text-[#0f172a] mb-2">{info.title}</h4>
                {info.lines.map((line) => (
                  <p key={line} className="text-gray-600 text-sm">
                    {line}
                  </p>
                ))}
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto reveal">
          <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-lg">
            <form onSubmit={onSubmit} data-testid="contact-form">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0f172a] mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={onFormChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a446]/50 focus:border-[#d4a446] transition-all"
                    placeholder="Ihr vollständiger Name"
                    required
                    data-testid="contact-name-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0f172a] mb-2">E-Mail *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onFormChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a446]/50 focus:border-[#d4a446] transition-all"
                    placeholder="ihre@email.de"
                    required
                    data-testid="contact-email-input"
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
                    onChange={onFormChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a446]/50 focus:border-[#d4a446] transition-all"
                    placeholder="+49 ..."
                    data-testid="contact-phone-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0f172a] mb-2">Rechtsgebiet</label>
                  <select
                    name="rechtsgebiet"
                    value={formData.rechtsgebiet}
                    onChange={onFormChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a446]/50 focus:border-[#d4a446] transition-all text-gray-700"
                    data-testid="contact-rechtsgebiet-select"
                  >
                    {rechtsgebiete.map((option) => (
                      <option key={option.value || 'default'} value={option.value}>
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
                  onChange={onFormChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a446]/50 focus:border-[#d4a446] transition-all resize-none"
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                  required
                  data-testid="contact-message-textarea"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-[#d4a446] hover:bg-[#e0b558] text-[#0f172a] font-bold rounded-xl transition-all duration-300 shadow-lg shadow-[#d4a446]/30 hover:shadow-[#d4a446]/50 flex items-center justify-center gap-2 text-lg"
                data-testid="contact-submit-btn"
              >
                <Send className="w-5 h-5" />
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
