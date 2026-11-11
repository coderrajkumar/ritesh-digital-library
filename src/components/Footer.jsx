import { MapPin, Phone, MessageCircle, ArrowUpRight, Sparkles, Instagram } from 'lucide-react';
import { NavbarLogo } from './BrandEmblem';
import { LIBRARY_INFO } from '../data/libraryData';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-[#040a14] border-t border-amber-400/20 text-slate-300 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-4">
            <NavbarLogo />
            <p className="font-editorial italic text-lg text-amber-200/90 max-w-md">
              “{LIBRARY_INFO.quote}”
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              {LIBRARY_INFO.taglinePrimary} • {LIBRARY_INFO.mottoPillars.join(' • ')}. A dedicated
              AC self-study reading hall built for Begusarai’s competitive exam & academic students.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h2 className="font-display font-bold text-sm uppercase tracking-widest text-[#f5b915]">
              Explore Hall
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#facilities" className="hover:text-[#f5b915] transition-colors">
                  6 Core Facilities
                </a>
              </li>
              <li>
                <a href="#study-hub" className="hover:text-[#f5b915] transition-colors">
                  Book Archive & Study Tracks
                </a>
              </li>
              <li>
                <a href="#seats" className="hover:text-[#f5b915] transition-colors">
                  Fees, Custom Slot & 50 Seats
                </a>
              </li>
              <li>
                <a href="#girls-zone" className="hover:text-[#f5b915] transition-colors">
                  Girls Dedicated Zone (छात्रा ज़ोन)
                </a>
              </li>
              <li>
                <a href="#rules" className="hover:text-[#f5b915] transition-colors">
                  Library Rules (नियम एवं विनियम)
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#f5b915] transition-colors">
                  Student Reviews (12+)
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#f5b915] transition-colors">
                  Real Campus Gallery Hub
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="text-amber-300 hover:underline font-semibold cursor-pointer inline-flex items-center gap-1"
                >
                  <span>Admission / Free Trial Form</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Address & Helpline */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="font-display font-bold text-sm uppercase tracking-widest text-[#f5b915]">
              Address & Helpline
            </h2>
            <a
              href={LIBRARY_INFO.address.mapsQuery}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2.5 text-sm hover:text-[#f5b915] transition-colors group"
            >
              <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-1" />
              <span>
                <strong className="font-hindi text-white group-hover:text-[#f5b915]">
                  {LIBRARY_INFO.address.landmarkHi}
                </strong>
                , {LIBRARY_INFO.address.floor}, {LIBRARY_INFO.address.street},{' '}
                {LIBRARY_INFO.address.city}, {LIBRARY_INFO.address.state}{' '}
                <span className="text-xs text-amber-300 underline ml-1">(Open Google Map ↗)</span>
              </span>
            </a>

            <div className="flex flex-wrap gap-2 pt-1">
              {LIBRARY_INFO.contacts.map((c) => (
                <a
                  key={c.number}
                  href={`tel:${c.number}`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#f5b915]/60 px-3 py-1.5 text-xs font-mono-tech font-bold text-slate-200 hover:text-[#f5b915] transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#f5b915]" />
                  <span>{c.number}</span>
                </a>
              ))}
              <a
                href={LIBRARY_INFO.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-fuchsia-500/15 via-rose-500/15 to-amber-500/15 border border-pink-400/35 hover:border-pink-300 px-3 py-1.5 text-xs font-bold text-pink-200 hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-300 shrink-0" />
                <span>{LIBRARY_INFO.social.instagram.handle}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {CURRENT_YEAR} Ritesh Digital Library, Begusarai. All rights reserved.
          </p>
          <p className="text-slate-400">
            Read | Learn | Succeed — <span className="text-[#f5b915]">For Students, By Students</span>
          </p>
        </div>
      </div>

      {/* Floating Desktop WhatsApp Icon Pill (compact so it never covers cards) */}
      <a
        href="https://wa.me/919031464838?text=Hello%20Ritesh%20Digital%20Library!%20I%20want%20to%20enquire%20about%20seat%20availability."
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Enquiry"
        title="WhatsApp Enquiry (+91 9031464838)"
        className="hidden md:inline-flex fixed bottom-5 right-5 z-30 items-center justify-center w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#07111e] shadow-2xl shadow-emerald-500/35 transition-transform hover:scale-110 border-2 border-white/20"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Sticky Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#060f1d]/95 backdrop-blur-xl border-t border-amber-400/25 px-2.5 sm:px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] flex items-center gap-2">
        <a
          href="tel:9031464838"
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 py-2.5 text-[11px] min-[375px]:text-xs font-bold text-white whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 text-[#f5b915] shrink-0" />
          <span>Call 9031464838</span>
        </a>
        <button
          type="button"
          onClick={() => onOpenBooking()}
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#f5b915] py-2.5 text-[11px] min-[375px]:text-xs font-bold text-[#07111e] cursor-pointer whitespace-nowrap"
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span>Admission Form</span>
        </button>
      </div>
    </footer>
  );
}
