import { useState } from 'react';
import {
  ShieldAlert,
  BookOpenCheck,
  Wifi,
  AlertTriangle,
  Scale,
  Camera,
  CheckCircle2,
  Phone,
  Languages,
} from 'lucide-react';
import { LIBRARY_RULES, LIBRARY_INFO } from '../data/libraryData';

const RULE_ICONS = {
  general: BookOpenCheck,
  discipline: ShieldAlert,
  digital: Wifi,
  action: AlertTriangle,
  legal: Scale,
  notes: Camera,
};

const TONE_STYLES = {
  navy: 'bg-[#0f2b57] border-blue-400/30 text-sky-200',
  crimson: 'bg-[#7f1d1d] border-red-400/30 text-red-100',
  emerald: 'bg-[#065f46] border-emerald-400/30 text-emerald-100',
  amber: 'bg-[#78350f] border-amber-400/35 text-amber-100',
  slate: 'bg-[#1e293b] border-slate-500/35 text-slate-100',
  indigo: 'bg-[#312e81] border-indigo-400/35 text-indigo-100',
};

export function RulesAndRegulations() {
  const [lang, setLang] = useState('hi');

  return (
    <section
      id="rules"
      className="relative py-14 sm:py-20 bg-[#faf7f0] text-[#07111e] scroll-mt-24 overflow-hidden"
    >
      {/* Subtle Paper Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(11, 25, 44, 0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header + Language Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#07111e] text-[#f5b915] px-4 py-1 text-xs font-bold uppercase tracking-widest">
              <Scale className="w-3.5 h-3.5" />
              Official Campus Charter • नियम एवं विनियम
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#07111e] tracking-tight">
              {lang === 'hi' ? (
                <span className="font-hindi">
                  लाइब्रेरी के{' '}
                  <span className="text-[#991b1b] underline decoration-[#f5b915] decoration-4 underline-offset-4">
                    नियम एवं विनियम
                  </span>
                </span>
              ) : (
                <>
                  Library{' '}
                  <span className="text-[#991b1b] underline decoration-[#f5b915] decoration-4 underline-offset-4">
                    Rules & Regulations
                  </span>
                </>
              )}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              {lang === 'hi' ? (
                <span className="font-hindi">
                  यह कॉलेज जैसा भीड़भाड़ वाला परिसर नहीं बल्कि शांत सेल्फ-स्टडी हॉल है — सभी सदस्यों
                  (B.A., B.Sc., SSC एवं प्रतियोगी विद्यार्थियों) के लिए इन नियमों का पालन अनिवार्य है।
                </span>
              ) : (
                'Built for peaceful self-study — not noisy college corridors. Every student joining our 50-seat reading hall agrees to uphold these rules.'
              )}
            </p>
          </div>

          {/* Bilingual Toggle */}
          <div className="inline-flex items-center gap-1 rounded-2xl bg-[#07111e] p-1.5 shadow-lg self-start lg:self-auto">
            <Languages className="w-4 h-4 text-[#f5b915] ml-2.5 mr-1" />
            <button
              type="button"
              onClick={() => setLang('hi')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-hindi transition-all cursor-pointer ${
                lang === 'hi' ? 'bg-[#f5b915] text-[#07111e]' : 'text-slate-300 hover:text-white'
              }`}
            >
              हिन्दी (Official)
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                lang === 'en' ? 'bg-[#f5b915] text-[#07111e]' : 'text-slate-300 hover:text-white'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* 6 Rule Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {LIBRARY_RULES.map((block) => {
            const Icon = RULE_ICONS[block.id] || BookOpenCheck;
            const items = lang === 'hi' ? block.itemsHi : block.itemsEn;
            const headerTone = TONE_STYLES[block.tone] || TONE_STYLES.navy;

            return (
              <div
                key={block.id}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
              >
                <div className={`px-4 sm:px-5 py-3 border-b flex items-center justify-between gap-2 ${headerTone}`}>
                  <div className="flex items-center gap-2 min-w-0">
                    <Icon className="w-4 h-4 shrink-0" />
                    <h3 className="font-display font-bold text-sm font-hindi truncate">
                      {block.num}. {lang === 'hi' ? block.titleHi : block.titleEn}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono-tech uppercase opacity-80 whitespace-nowrap shrink-0">
                    {lang === 'hi' ? block.titleEn : block.titleHi}
                  </span>
                </div>

                <ul className="p-4 sm:p-5 space-y-2 flex-1">
                  {items.map((point, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed ${
                        lang === 'hi' ? 'font-hindi' : ''
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0b192c] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom Charter Banner */}
        <div className="mt-10 rounded-3xl bg-[#07111e] text-white p-6 sm:p-8 border-2 border-[#f5b915]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left space-y-2">
            <div className="font-hindi text-xl sm:text-2xl font-bold text-[#f5b915]">
              “{LIBRARY_INFO.hindiQuote}”
            </div>
            <p className="font-hindi text-xs sm:text-sm text-slate-300">
              <strong className="text-white">ध्यान दें:</strong> लाइब्रेरी में प्रवेश करते ही आप सभी
              नियमों से सहमत माने जाएंगे • ★ {LIBRARY_INFO.swachhSlogan} ★
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
            {LIBRARY_INFO.contacts.map((c) => (
              <a
                key={c.number}
                href={`tel:${c.number}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#f5b915] hover:bg-amber-300 text-[#07111e] font-mono-tech font-bold px-4 py-2.5 text-xs sm:text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{c.number}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

