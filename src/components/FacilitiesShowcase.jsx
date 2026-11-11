import {
  Wifi,
  BookOpen,
  Armchair,
  Laptop,
  ShieldCheck,
  Snowflake,
  Zap,
  Droplets,
  Flame,
  QrCode,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Users,
} from 'lucide-react';
import { FACILITIES, GIRLS_ZONE_INFO } from '../data/libraryData';

const ICON_MAP = {
  Wifi,
  BookOpen,
  Armchair,
  Laptop,
  ShieldCheck,
  Snowflake,
};

const EXTRA_AMENITIES = [
  { icon: Users, label: 'Girls Dedicated Safe Zone' },
  { icon: Flame, label: 'Fire Safety & Clear Exit' },
  { icon: QrCode, label: 'UPI QR Instant Fee Desk' },
  { icon: Zap, label: 'Inverter & DG Power Backup' },
  { icon: Droplets, label: 'Chilled RO Drinking Water' },
  { icon: Sparkles, label: 'Daily Sanitized Clean Hall' },
];

export function FacilitiesShowcase({ onOpenBooking }) {
  return (
    <section id="facilities" className="scroll-mt-24 relative py-14 sm:py-20 bg-[#07111e] overflow-hidden">
      {/* Subtle Ambient Light */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[780px] h-[260px] bg-amber-400/6 blur-[130px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 border border-amber-400/25 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#f5b915]">
              Our Facilities
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Engineered for{' '}
              <span className="text-gold-gradient">Deep Unbroken Focus</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Every detail inside Ritesh Digital Library is thoughtfully designed so you can sit
              for hours in pure comfort, stay connected digitally, and achieve your exam goals faster.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {EXTRA_AMENITIES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900/90 border border-slate-800 px-3.5 py-2 text-xs font-medium text-slate-300"
                >
                  <Icon className="w-4 h-4 text-[#f5b915]" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6 Core Facilities Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {FACILITIES.map((facility, idx) => {
            const Icon = ICON_MAP[facility.iconName] || BookOpen;
            return (
              <div
                key={facility.id}
                className="group relative rounded-2xl bg-[#0c1a30]/90 border border-slate-800 hover:border-amber-400/45 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div
                      className={`w-13 h-13 rounded-xl bg-gradient-to-br border flex items-center justify-center shrink-0 ${facility.accent}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono-tech text-xs font-bold px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-700/80 text-amber-300">
                      {facility.metric}
                    </span>
                  </div>

                  <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                    0{idx + 1} • {facility.subtitle}
                  </div>
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-[#f5b915] transition-colors">
                    {facility.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-300">{facility.highlight}</span>
                  <span className="text-slate-500 font-mono-tech">Included</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated Girls Study Zone Spotlight */}
        <div
          id="girls-zone"
          className="scroll-mt-24 mt-12 rounded-3xl overflow-hidden border border-rose-400/35 bg-gradient-to-br from-[#17122b] via-[#0b182c] to-[#081326] shadow-2xl p-5 sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-rose-500/15 border border-rose-400/35 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-rose-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-rose-300" />
                  {GIRLS_ZONE_INFO.badge}
                </span>
                <span className="font-hindi text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/25 px-3 py-1 rounded-full">
                  {GIRLS_ZONE_INFO.titleHi}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                {GIRLS_ZONE_INFO.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {GIRLS_ZONE_INFO.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {GIRLS_ZONE_INFO.features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-start gap-2 rounded-xl bg-[#07111e]/80 border border-slate-800 px-3 py-2.5 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking({ girlsZone: true })}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f5b915] hover:bg-amber-300 text-[#07111e] font-bold px-5 py-3 text-xs sm:text-sm shadow-lg transition-colors cursor-pointer"
                >
                  <span>Reserve Girls Zone Seat / Admission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#seats"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-rose-400/35 bg-rose-500/10 hover:bg-rose-500/20 text-rose-200 font-semibold px-5 py-3 text-xs sm:text-sm transition-colors"
                >
                  <span>View Fees & Floor Zones</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-rose-400/25 shadow-xl">
                <img
                  src="/images/gallery/real-hall-cctv-zone.jpg"
                  alt="Safe 24x7 HD CCTV monitored silent study bays and Girls Dedicated Zone at Ritesh Digital Library Begusarai"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111e]/85 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-rose-500/90 text-white font-bold">
                    Girls Safe Seating + 24×7 CCTV
                  </span>
                  <span className="font-mono-tech px-2 py-1 rounded-md bg-black/70 text-amber-300 font-semibold">
                    From ₹300/mo
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                {GIRLS_ZONE_INFO.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl bg-[#07111e]/90 border border-slate-800 p-2.5"
                  >
                    <div className="font-mono-tech font-bold text-xs text-rose-200">{m.value}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dual Real Campus Photography Showcase Strip */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="group relative rounded-3xl overflow-hidden border border-amber-400/20 bg-[#0b182b] shadow-2xl flex flex-col">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/images/gallery/real-hall-entrance.jpg"
                alt="Numbered study desk cubicles with power switchboards, fans and ventilation at Ritesh Digital Library Begusarai"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-[#060f1d] via-[#060f1d]/30 to-transparent" />
            </div>
            <div className="p-5 sm:p-7 sm:absolute sm:bottom-0 sm:inset-x-0 flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-[#0b182b] sm:bg-transparent">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#f5b915] mb-1">
                  Personal Study Cubicles
                </span>
                <h3 className="font-display font-bold text-lg sm:text-2xl text-white">
                  Individual Power Boards & Acoustic Privacy
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md">
                  Bring your laptop, tablet, or textbooks — every desk gives you uninterrupted space.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="self-start sm:self-auto shrink-0 rounded-xl bg-[#f5b915] text-[#07111e] px-4 py-2.5 text-xs font-bold hover:bg-amber-300 transition-colors cursor-pointer"
              >
                Visit & Try Free
              </button>
            </div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden border border-amber-400/20 bg-[#0b182b] shadow-2xl flex flex-col">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/images/gallery/real-cctv-bookshelf.jpg"
                alt="Live 4-channel CCTV monitor screen and competitive books reference shelf at Ritesh Digital Library Begusarai"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-[#060f1d] via-[#060f1d]/30 to-transparent" />
            </div>
            <div className="p-5 sm:p-7 sm:absolute sm:bottom-0 sm:inset-x-0 flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-[#0b182b] sm:bg-transparent">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#f5b915] mb-1">
                  Reference Shelf & 4-Channel CCTV Monitor
                </span>
                <h3 className="font-display font-bold text-lg sm:text-2xl text-white">
                  Curated Books + Live Campus Monitoring
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md">
                  From Engineering and General Knowledge to Maths & English reference guides.
                </p>
              </div>
              <a
                href="#study-hub"
                className="self-start sm:self-auto shrink-0 rounded-xl border border-amber-400/40 bg-slate-900/80 text-amber-200 px-4 py-2.5 text-xs font-bold hover:bg-amber-400 hover:text-[#07111e] transition-colors"
              >
                Browse Book Stacks
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

