import { Phone } from 'lucide-react';

/**
 * High-precision SVG crest inspired by the official Ritesh Digital Library circular logo.
 */
export function BrandEmblem({ size = 'lg', showPhonePill = true, className = '' }) {
  const sizes = {
    sm: 'w-20 h-20',
    md: 'w-44 h-44',
    lg: 'w-56 h-56 min-[420px]:w-64 min-[420px]:h-64 sm:w-72 sm:h-72',
  };

  return (
    <div
      className={`relative rounded-full bg-[#07111e] border-[3px] border-[#f5b915] shadow-[0_0_50px_rgba(245,185,21,0.25)] flex flex-col items-center justify-center select-none overflow-hidden p-4 ${sizes[size] || sizes.lg} ${className}`}
    >
      {/* Subtle radial glow inside crest */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 50% 35%, rgba(245, 185, 21, 0.14), transparent 68%)',
        }}
      />

      {/* Graduation Cap & Open Book Vector */}
      <svg
        viewBox="0 0 180 105"
        className={size === 'sm' ? 'w-12 h-8' : 'w-36 sm:w-40 h-24 shrink-0 relative z-10'}
        aria-hidden="true"
      >
        {/* Graduation Cap */}
        <path d="M90 10 L132 25 L90 40 L48 25 Z" fill="#ffffff" />
        <path
          d="M66 34 L66 44 C66 48 77 52 90 52 C103 52 114 48 114 44 L114 34 L90 43 Z"
          fill="#ffffff"
        />
        {/* Cap tassel */}
        <line
          x1="125"
          y1="28"
          x2="125"
          y2="49"
          stroke="#f5b915"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path d="M121 49 L129 49 L131 58 L119 58 Z" fill="#f5b915" />

        {/* Open Book Inner Pages (White) */}
        <path
          d="M32 58 C54 48 74 54 88 73 L88 92 C72 78 52 75 28 82 Z"
          fill="#ffffff"
        />
        <path
          d="M148 58 C126 48 106 54 92 73 L92 92 C108 78 128 75 152 82 Z"
          fill="#ffffff"
        />

        {/* Open Book Outer Gold Cover Wings */}
        <path
          d="M22 65 C48 55 70 61 88 81 L88 95 C69 81 46 78 18 85 Z"
          fill="#f5b915"
        />
        <path
          d="M158 65 C132 55 110 61 92 81 L92 95 C111 81 134 78 162 85 Z"
          fill="#f5b915"
        />

        {/* Bottom spine accent */}
        <path
          d="M14 89 C46 81 71 84 90 99 C109 84 134 81 166 89 L164 94 C134 87 109 90 90 103 C71 90 46 87 16 94 Z"
          fill="#ffffff"
          opacity="0.92"
        />
      </svg>

      {size !== 'sm' && (
        <div className="relative z-10 flex flex-col items-center text-center -mt-2">
          {/* Script "Ritesh" */}
          <span className="font-script-logo text-white text-4xl sm:text-5xl leading-none tracking-wide drop-shadow-sm">
            Ritesh
          </span>
          {/* Golden swoosh underline */}
          <svg viewBox="0 0 140 10" className="w-28 h-2 -mt-0.5 mb-1" aria-hidden="true">
            <path
              d="M6 7 Q70 1 134 5"
              fill="none"
              stroke="#f5b915"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </svg>

          {/* DIGITAL LIBRARY */}
          <span className="font-display font-extrabold text-[#f5b915] tracking-[0.14em] text-xs sm:text-sm uppercase">
            Digital Library
          </span>

          {/* Focus • Discipline • Success */}
          <div className="mt-1 flex items-center gap-1.5 text-[9px] sm:text-[10px] text-slate-200 tracking-wider font-medium">
            <span className="w-3 h-[1px] bg-[#f5b915]/70" />
            <span>Focus • Discipline • Success</span>
            <span className="w-3 h-[1px] bg-[#f5b915]/70" />
          </div>

          {showPhonePill && (
            <a
              href="tel:9031464838"
              className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-[#f5b915] text-[#07111e] px-3 py-1 text-[11px] font-bold tracking-wide hover:bg-amber-300 transition-colors shadow"
            >
              <Phone className="w-3 h-3 fill-current" />
              <span className="font-mono-tech">9031464838</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Compact header/footer wordmark logo combining the vector book+cap icon with sharp typography.
 */
export function NavbarLogo({ className = '' }) {
  return (
    <a href="#top" className={`inline-flex items-center gap-2 sm:gap-3 group shrink-0 ${className}`}>
      <div className="relative w-8 h-8 min-[375px]:w-9 min-[375px]:h-9 sm:w-11 sm:h-11 rounded-full bg-[#07111e] border-2 border-[#f5b915] flex items-center justify-center shadow-[0_0_18px_rgba(245,185,21,0.28)] group-hover:scale-105 transition-transform shrink-0">
        <svg viewBox="0 0 120 90" className="w-5 h-4 sm:w-7 sm:h-6" aria-hidden="true">
          <path d="M60 8 L94 21 L60 34 L26 21 Z" fill="#ffffff" />
          <path
            d="M42 29 L42 36 C42 39 50 42 60 42 C70 42 78 39 78 36 L78 29 L60 36 Z"
            fill="#f5b915"
          />
          <path d="M16 48 C34 40 50 44 58 60 L58 76 C46 65 30 63 14 69 Z" fill="#ffffff" />
          <path d="M104 48 C86 40 70 44 62 60 L62 76 C74 65 90 63 106 69 Z" fill="#ffffff" />
          <path d="M10 55 C30 47 48 52 58 68 L58 80 C44 69 27 67 8 74 Z" fill="#f5b915" />
          <path d="M110 55 C90 47 72 52 62 68 L62 80 C76 69 93 67 112 74 Z" fill="#f5b915" />
        </svg>
      </div>
      <div className="flex flex-col leading-tight whitespace-nowrap">
        <span className="font-display font-bold text-white text-[12px] min-[375px]:text-[13px] sm:text-base xl:text-lg tracking-tight group-hover:text-amber-300 transition-colors">
          RITESH <span className="text-[#f5b915]">DIGITAL LIBRARY</span>
        </span>
        <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.12em] min-[375px]:tracking-[0.16em] sm:tracking-[0.18em] text-slate-400">
          Koli Chok • Begusarai
        </span>
      </div>
    </a>
  );
}

