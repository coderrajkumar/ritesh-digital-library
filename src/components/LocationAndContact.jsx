import { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Copy,
  Check,
  Navigation,
  Clock,
  Building2,
  ChevronDown,
  Sparkles,
  Instagram,
  ExternalLink,
} from 'lucide-react';
import { LIBRARY_INFO, FAQS } from '../data/libraryData';

export function LocationAndContact({ onOpenBooking }) {
  const [copiedNum, setCopiedNum] = useState(null);
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  const handleCopy = async (num) => {
    try {
      await navigator.clipboard.writeText(num);
      setCopiedNum(num);
      setTimeout(() => setCopiedNum(null), 1800);
    } catch {
      // Fallback ignored
    }
  };

  return (
    <section id="location" className="scroll-mt-24 relative py-14 sm:py-20 bg-[#060f1d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 border border-amber-400/25 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#f5b915]">
            Visit Us Today
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Easy-to-Reach Location in{' '}
            <span className="text-gold-gradient">Begusarai, Bihar</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Walk in anytime between 6:00 AM and 10:00 PM for a quick campus tour or call our
            official helpline numbers.
          </p>
        </div>

        {/* Location & Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* Left: Landmark & Address Card */}
          <div className="lg:col-span-6 rounded-3xl glass-navy p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-xl bg-red-500/15 border border-red-400/30 px-3.5 py-2 text-xs font-bold text-red-200">
                <Building2 className="w-4 h-4 text-red-400" />
                <span>LANDMARK: ABOVE IDBI BANK (1st FLOOR)</span>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-snug">
                  <span className="font-hindi text-[#f5b915]">
                    {LIBRARY_INFO.address.landmarkHi}
                  </span>
                  , {LIBRARY_INFO.address.floor}
                </h3>
                <p className="text-lg sm:text-xl font-semibold text-slate-200 mt-1">
                  {LIBRARY_INFO.address.street}, {LIBRARY_INFO.address.city},{' '}
                  {LIBRARY_INFO.address.state}
                </p>
              </div>

              {/* Landmark Step Guide */}
              <div className="rounded-2xl bg-[#07111e] border border-slate-800 p-5 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Quick Arrival Guide
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>
                    Reach <strong>Koli Chok, Laxmipur (Begusarai)</strong> and look for the{' '}
                    <strong>IDBI Bank</strong> building on the main road — take the stairs directly
                    to the <strong>1st Floor</strong>.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">{LIBRARY_INFO.hours.daily}</strong> •{' '}
                    {LIBRARY_INFO.hours.days}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={LIBRARY_INFO.address.mapsQuery}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#f5b915] hover:bg-amber-300 text-[#07111e] font-bold py-3.5 px-5 text-sm shadow-lg transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-amber-400/40 bg-amber-400/10 hover:bg-amber-400/20 text-amber-200 font-bold py-3.5 px-5 text-sm transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Schedule Campus Visit</span>
              </button>
            </div>
          </div>

          {/* Right: Official Phone / WhatsApp Contact Cards & Map Preview */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-3xl bg-[#0b192d] border border-slate-800 p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#f5b915]">
                    Contact Us Directly
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white mt-0.5">
                    Official Helpline Numbers
                  </h3>
                </div>
                <span className="text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-400/25 px-3 py-1 rounded-full font-semibold whitespace-nowrap shrink-0">
                  Fast Response
                </span>
              </div>

              <div className="space-y-4">
                {LIBRARY_INFO.contacts.map((contact) => (
                  <div
                    key={contact.number}
                    className={`rounded-2xl p-4 sm:p-5 border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      contact.isPrimary
                        ? 'bg-gradient-to-r from-[#13294b] to-[#0a172b] border-[#f5b915]/50'
                        : 'bg-[#07111e] border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          contact.isPrimary
                            ? 'bg-[#f5b915] text-[#07111e]'
                            : 'bg-amber-400/10 border border-amber-400/25 text-[#f5b915]'
                        }`}
                      >
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-400">
                          {contact.label}
                        </div>
                        <div className="font-mono-tech font-bold text-xl sm:text-2xl text-white tracking-wide">
                          {contact.number}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={`tel:${contact.number}`}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-[#f5b915] hover:text-[#07111e] text-white px-3.5 py-2 text-xs font-bold transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call</span>
                      </a>
                      <a
                        href={`https://wa.me/91${contact.number}?text=${encodeURIComponent(
                          'Hello Ritesh Digital Library! I would like to know about seat availability and shift timings.'
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500/15 border border-emerald-400/30 hover:bg-emerald-500 hover:text-white text-emerald-300 px-3.5 py-2 text-xs font-bold transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopy(contact.number)}
                        className="p-2 rounded-xl border border-slate-700 bg-slate-900 text-slate-300 hover:text-[#f5b915] cursor-pointer"
                        title="Copy phone number"
                        aria-label={`Copy phone number ${contact.number}`}
                      >
                        {copiedNum === contact.number ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}

                {/* Official Instagram Page Card */}
                <a
                  href={LIBRARY_INFO.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl p-4 sm:p-5 border border-pink-400/35 bg-gradient-to-r from-fuchsia-500/12 via-rose-500/12 to-amber-500/12 hover:border-pink-300/70 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-400 text-white flex items-center justify-center shrink-0 shadow-lg">
                      <Instagram className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-pink-200">
                        Official Instagram Page
                      </div>
                      <div className="font-mono-tech font-bold text-base sm:text-lg text-white truncate group-hover:text-amber-300 transition-colors">
                        {LIBRARY_INFO.social.instagram.handle}
                      </div>
                    </div>
                  </div>

                  <span className="self-start sm:self-auto shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-white/10 group-hover:bg-[#f5b915] group-hover:text-[#07111e] text-white px-4 py-2 text-xs font-bold transition-colors">
                    <span>Follow Page</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f5b915]">
              Common Student Questions
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-[#0b182c] border border-slate-800 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                  >
                    <span className="font-display font-semibold text-base sm:text-lg text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#f5b915] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/70 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

