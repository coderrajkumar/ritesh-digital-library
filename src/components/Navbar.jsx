import { useState, useEffect, Fragment } from 'react';
import { Menu, X, Phone, Sparkles, Clock, MapPin, ExternalLink, Instagram } from 'lucide-react';
import { NavbarLogo } from './BrandEmblem';
import { LIBRARY_INFO } from '../data/libraryData';

const NAV_LINKS = [
  { label: 'Facilities', href: '#facilities' },
  { label: 'Plans & Fees', href: '#seats' },
  { label: 'Study Hub', href: '#study-hub' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Rules (नियम)', href: '#rules' },
  { label: 'Location', href: '#location' },
];

export function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      {/* Slim Top Utility Strip (desktop lg+, collapses smoothly on scroll) */}
      <div
        className={`hidden lg:block bg-[#040a14]/95 border-b border-amber-400/15 text-[11px] text-slate-300 transition-all duration-300 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0 border-b-0' : 'max-h-10 opacity-100 py-1.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <a
            href={LIBRARY_INFO.address.mapsQuery}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#f5b915] transition-colors whitespace-nowrap"
          >
            <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
            <span className="font-hindi font-semibold text-slate-100">
              {LIBRARY_INFO.address.landmarkHi},
            </span>
            <span>
              {LIBRARY_INFO.address.floor}, {LIBRARY_INFO.address.street}, Begusarai
            </span>
            <span className="inline-flex items-center gap-0.5 text-[#f5b915] font-semibold ml-1">
              (Map <ExternalLink className="w-3 h-3" />)
            </span>
          </a>

          <div className="flex items-center gap-4 shrink-0">
            <span className="inline-flex items-center gap-1.5 text-emerald-300 font-medium">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              <Clock className="w-3 h-3" />
              <span>{LIBRARY_INFO.hours.daily}</span>
            </span>

            <span className="text-slate-700">|</span>

            <div className="inline-flex items-center gap-2.5 font-mono-tech">
              {LIBRARY_INFO.contacts.map((c, idx) => (
                <Fragment key={c.number}>
                  {idx > 0 && <span className="text-slate-600">•</span>}
                  <a
                    href={`tel:${c.number}`}
                    className="hover:text-[#f5b915] text-slate-200 font-semibold transition-colors"
                  >
                    {c.number}
                  </a>
                </Fragment>
              ))}
            </div>

            <span className="text-slate-700">|</span>

            <a
              href={LIBRARY_INFO.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Ritesh Digital Library on Instagram"
              className="inline-flex items-center gap-1.5 text-pink-300 hover:text-[#f5b915] font-semibold transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden xl:inline">{LIBRARY_INFO.social.instagram.handle}</span>
              <span className="xl:hidden">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Single-Row Sticky Navigation */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#060f1d]/95 backdrop-blur-xl border-b border-amber-400/20 shadow-xl shadow-black/40 py-2.5'
            : 'bg-[#060f1d]/82 backdrop-blur-lg border-b border-white/10 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          <NavbarLogo />

          {/* Desktop Navigation Pills */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1 rounded-full bg-[#0b182c]/90 border border-slate-800/90 px-1.5 xl:px-2 py-1"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap px-2.5 xl:px-3.5 py-1.5 rounded-full text-[12px] xl:text-[13px] font-semibold text-slate-200 hover:text-[#07111e] hover:bg-[#f5b915] transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right CTA Cluster */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:9031464838"
              className="hidden xl:inline-flex items-center gap-1.5 rounded-full border border-slate-700/90 bg-slate-900/80 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:border-[#f5b915]/60 hover:text-[#f5b915] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#f5b915]" />
              <span className="font-mono-tech">9031464838</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#f5b915] hover:bg-amber-300 text-[#07111e] px-3.5 xl:px-4 py-2 text-xs xl:text-[13px] font-bold shadow-[0_4px_18px_rgba(245,185,21,0.32)] hover:shadow-[0_6px_24px_rgba(245,185,21,0.5)] transition-all cursor-pointer whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admission / Trial</span>
            </button>

            {/* Mobile & Tablet Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden p-2 rounded-xl border border-slate-700/90 bg-slate-900/90 text-slate-200 hover:text-[#f5b915] cursor-pointer"
              aria-label="Toggle Menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden mt-2 mx-3 sm:mx-4 rounded-2xl glass-navy p-4 sm:p-5 shadow-2xl border border-amber-400/25 max-h-[82dvh] overflow-y-auto"
        >
          <div className="flex flex-col gap-1.5">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 px-3.5 rounded-xl text-sm font-semibold text-slate-100 hover:bg-[#f5b915] hover:text-[#07111e] transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="h-px bg-slate-800 my-2" />

            <a
              href={LIBRARY_INFO.address.mapsQuery}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 py-2.5 text-xs font-semibold text-amber-300"
            >
              <MapPin className="w-4 h-4 text-red-400" />
              <span>Open Location on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="grid grid-cols-2 gap-2 pt-1">
              {LIBRARY_INFO.contacts.map((c) => (
                <a
                  key={c.number}
                  href={`tel:${c.number}`}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 py-2.5 text-[11px] min-[375px]:text-xs font-mono-tech font-bold text-slate-200"
                >
                  <Phone className="w-3.5 h-3.5 text-[#f5b915]" />
                  <span>{c.number}</span>
                </a>
              ))}
            </div>

            <a
              href={LIBRARY_INFO.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-pink-400/35 bg-gradient-to-r from-fuchsia-500/15 via-rose-500/15 to-amber-500/15 py-2.5 text-xs font-semibold text-pink-200 hover:border-pink-300 transition-colors"
            >
              <Instagram className="w-4 h-4 text-pink-300 shrink-0" />
              <span>Follow {LIBRARY_INFO.social.instagram.handle}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenBooking();
              }}
              className="mt-1 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#f5b915] text-[#07111e] py-3 text-sm font-bold cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book 1-Day Free Trial</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
