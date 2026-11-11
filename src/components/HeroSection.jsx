import {
  MapPin,
  Phone,
  ArrowRight,
  Wifi,
  Snowflake,
  ShieldCheck,
  BookOpen,
  CheckCircle2,
  Armchair,
} from 'lucide-react';
import { BrandEmblem } from './BrandEmblem';
import { LIBRARY_INFO } from '../data/libraryData';

export function HeroSection({ availableSeatsCount, onOpenBooking }) {
  return (
    <section
      id="top"
      className="relative lg:min-h-screen flex flex-col justify-between pt-20 sm:pt-24 lg:pt-32 overflow-hidden bg-[#060f1d]"
    >
      {/* Background Photograph with Deep Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/gallery/real-hall-main.jpg"
          onError={(e) => {
            e.currentTarget.src = '/images/gallery/real-hall-entrance.jpg';
          }}
          alt="Ritesh Digital Library 50-seat quiet AC self-study reading hall Above IDBI Bank Koli Chok Laxmipur Begusarai"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-35 scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(110deg, rgba(6,15,29,0.97) 0%, rgba(6,15,29,0.88) 52%, rgba(6,15,29,0.72) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-scholar-grid opacity-70" />
        {/* Warm Radial Accent */}
        <div className="pointer-events-none absolute -top-24 right-1/4 w-[520px] h-[520px] rounded-full bg-amber-400/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1">
        {/* Left Story & CTA */}
        <div className="lg:col-span-7 space-y-6">
          {/* Top Motto Pills matching Banner */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-400/12 border border-amber-400/35 px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase text-[#f5b915]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5b915]" />
              {LIBRARY_INFO.communityBadge}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 px-3 py-1.5 text-xs font-semibold text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {availableSeatsCount} / 50 Seats Open • From ₹300/mo
            </span>
          </div>

          {/* 3 slanted-inspired brand tags */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-md bg-[#112a54] border border-blue-400/30 text-xs font-bold tracking-wide text-sky-200 uppercase">
              Study Better • Learn More
            </span>
            <span className="px-3 py-1 rounded-md bg-[#991b1b] border border-red-400/30 text-xs font-bold tracking-wide text-red-100 uppercase">
              Achieve Big • SSC / B.A. / B.Sc.
            </span>
            <a
              href="#girls-zone"
              className="px-3 py-1 rounded-md bg-rose-500/20 border border-rose-400/40 text-xs font-bold tracking-wide text-rose-200 hover:bg-rose-500/30 transition-colors uppercase"
            >
              Girls Dedicated Zone
            </a>
            <span className="px-3 py-1 rounded-md bg-[#166534] border border-emerald-400/30 text-xs font-bold tracking-wide text-emerald-100 uppercase">
              Custom Time Slots
            </span>
          </div>

          {/* Main Display Headline */}
          <div className="space-y-2">
            <h1 className="font-display font-extrabold tracking-tight leading-[1.04]">
              <span className="block text-[30px] min-[375px]:text-[34px] sm:text-6xl xl:text-[66px] text-white">
                RITESH
              </span>
              <span className="block text-[23px] min-[375px]:text-[26px] sm:text-5xl xl:text-[56px] text-gold-gradient mt-1">
                DIGITAL LIBRARY
              </span>
            </h1>
            <p className="font-editorial italic text-base min-[375px]:text-lg sm:text-2xl text-amber-200/90 tracking-wide pt-1">
              {LIBRARY_INFO.taglineSecondary} &nbsp;•&nbsp; {LIBRARY_INFO.badgeText}
            </p>
          </div>

          {/* Quote Banner matching official poster */}
          <blockquote className="relative rounded-2xl glass-navy px-5 py-4 border-l-4 border-l-[#f5b915] max-w-2xl">
            <p className="font-editorial italic text-lg sm:text-xl text-slate-100 leading-relaxed">
              “A Library is not just a place, it’s a way to a{' '}
              <span className="text-[#f5b915] font-semibold not-italic">Better Future</span>.”
            </p>
          </blockquote>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#f5b915] hover:bg-amber-300 text-[#07111e] font-bold px-7 py-4 text-base shadow-[0_8px_30px_rgba(245,185,21,0.35)] hover:shadow-[0_10px_36px_rgba(245,185,21,0.5)] transition-all cursor-pointer"
            >
              <span>Fill Admission / Trial Form</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#seats"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-600/80 bg-slate-900/75 hover:bg-slate-800/90 hover:border-[#f5b915]/50 text-white font-semibold px-6 py-4 text-base transition-all"
            >
              <Armchair className="w-5 h-5 text-[#f5b915]" />
              <span>Fees & 50-Seat Map</span>
            </a>
          </div>

          {/* Exact Location & Quick Numbers */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-slate-300">
            <a
              href={LIBRARY_INFO.address.mapsQuery}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-start gap-2.5 hover:text-[#f5b915] transition-colors group"
            >
              <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <span>
                <span className="font-hindi font-semibold text-white">
                  {LIBRARY_INFO.address.landmarkHi},
                </span>{' '}
                {LIBRARY_INFO.address.floor}, {LIBRARY_INFO.address.street},{' '}
                <strong className="text-amber-300">
                  {LIBRARY_INFO.address.city}, {LIBRARY_INFO.address.state}
                </strong>{' '}
                <span className="inline-block text-xs underline decoration-amber-400/60 text-amber-300 ml-1 whitespace-nowrap">
                  (Google Map ↗)
                </span>
              </span>
            </a>

            <span className="hidden sm:inline text-slate-600">|</span>

            <a
              href="tel:9031464838"
              className="inline-flex items-center gap-2 text-amber-300 font-semibold hover:text-amber-200 shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span className="font-mono-tech">9031464838</span>
            </a>
          </div>
        </div>

        {/* Right Showcase: Emblem Crest + Live Hall Metrics Card */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative flex flex-col items-center">
            {/* Ambient Pulse Halo */}
            <div className="absolute -inset-4 rounded-full border border-amber-400/20 animate-pulse-ring pointer-events-none" />
            <div className="animate-float-slow">
              <BrandEmblem size="lg" showPhonePill />
            </div>
          </div>

          {/* Live Quick Specs Bar */}
          <div className="mt-7 w-full max-w-md grid grid-cols-2 gap-2.5 sm:gap-3">
            <div className="rounded-xl glass-navy p-2.5 min-[375px]:p-3.5 flex items-center gap-2 min-[375px]:gap-3">
              <div className="w-8 h-8 min-[375px]:w-9 min-[375px]:h-9 rounded-lg bg-sky-500/15 border border-sky-400/25 flex items-center justify-center text-sky-300 shrink-0">
                <Wifi className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="font-mono-tech font-bold text-xs min-[375px]:text-sm text-white">150+ Mbps</div>
                <div className="text-[10px] min-[375px]:text-[11px] text-slate-400 leading-tight">Dual-Band Wi-Fi</div>
              </div>
            </div>

            <div className="rounded-xl glass-navy p-2.5 min-[375px]:p-3.5 flex items-center gap-2 min-[375px]:gap-3">
              <div className="w-8 h-8 min-[375px]:w-9 min-[375px]:h-9 rounded-lg bg-cyan-500/15 border border-cyan-400/25 flex items-center justify-center text-cyan-300 shrink-0">
                <Snowflake className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="font-mono-tech font-bold text-xs min-[375px]:text-sm text-white">AC Hall</div>
                <div className="text-[10px] min-[375px]:text-[11px] text-slate-400 leading-tight">Quiet & Cool 22°C</div>
              </div>
            </div>

            <div className="rounded-xl glass-navy p-2.5 min-[375px]:p-3.5 flex items-center gap-2 min-[375px]:gap-3">
              <div className="w-8 h-8 min-[375px]:w-9 min-[375px]:h-9 rounded-lg bg-rose-500/15 border border-rose-400/25 flex items-center justify-center text-rose-300 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="font-mono-tech font-bold text-xs min-[375px]:text-sm text-white">24×7 CCTV</div>
                <div className="text-[10px] min-[375px]:text-[11px] text-slate-400 leading-tight">Safe 1st Floor Campus</div>
              </div>
            </div>

            <div className="rounded-xl glass-navy p-2.5 min-[375px]:p-3.5 flex items-center gap-2 min-[375px]:gap-3">
              <div className="w-8 h-8 min-[375px]:w-9 min-[375px]:h-9 rounded-lg bg-amber-500/15 border border-amber-400/25 flex items-center justify-center text-amber-300 shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="font-mono-tech font-bold text-xs min-[375px]:text-sm text-white">1,200+ Books</div>
                <div className="text-[10px] min-[375px]:text-[11px] text-slate-400 leading-tight">Exam & Study Library</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Brand Ticker */}
      <div className="relative z-10 border-y border-amber-400/20 bg-[#09162b]/95 py-3 overflow-hidden">
        <div className="animate-ticker flex items-center gap-8 text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-200/90">
          {[...Array(2)].map((_, copyIdx) => (
            <div key={copyIdx} className="flex items-center gap-8 shrink-0">
              <span>★ Focus • Discipline • Success</span>
              <span className="text-slate-600">•</span>
              <span>Girls Dedicated Safe Zone</span>
              <span className="text-slate-600">•</span>
              <span>High Speed Wi-Fi</span>
              <span className="text-slate-600">•</span>
              <span>AC Reading Hall</span>
              <span className="text-slate-600">•</span>
              <span>Your Success Starts Here</span>
              <span className="text-slate-600">•</span>
              <span>24×7 CCTV & Fire Safety</span>
              <span className="text-slate-600">•</span>
              <span>For Students, By Students</span>
              <span className="text-slate-600">•</span>
              <span>Above IDBI Bank, Koli Chok, Laxmipur, Begusarai</span>
              <span className="text-slate-600">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

