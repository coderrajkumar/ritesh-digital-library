import { useState } from 'react';
import {
  Award,
  GraduationCap,
  Globe,
  Sparkles,
  Search,
  BookMarked,
  CheckCircle2,
  Layers,
  X,
} from 'lucide-react';
import { STUDY_PILLARS, SUBJECT_STACKS } from '../data/libraryData';

const PILLAR_ICONS = {
  Award,
  GraduationCap,
  Globe,
  Sparkles,
};

export function StudyStreamsAndBooks() {
  const [activeStackId, setActiveStackId] = useState(SUBJECT_STACKS[1].id); // Default to Competitive Exams
  const [searchTerm, setSearchTerm] = useState('');

  const activeStack =
    SUBJECT_STACKS.find((stack) => stack.id === activeStackId) || SUBJECT_STACKS[0];

  const normalizedQuery = searchTerm.trim().toLowerCase();
  const filteredResources = normalizedQuery
    ? SUBJECT_STACKS.flatMap((stack) =>
        stack.resources
          .filter(
            (res) =>
              res.title.toLowerCase().includes(normalizedQuery) ||
              res.level.toLowerCase().includes(normalizedQuery) ||
              stack.title.toLowerCase().includes(normalizedQuery)
          )
          .map((res) => ({ ...res, category: stack.title, badgeColor: stack.badgeColor }))
      )
    : activeStack.resources.map((res) => ({
        ...res,
        category: activeStack.title,
        badgeColor: activeStack.badgeColor,
      }));

  return (
    <section
      id="study-hub"
      className="scroll-mt-24 relative py-14 sm:py-20 bg-[#faf7f0] text-[#0b192c] overflow-hidden"
    >
      {/* Subtle Paper Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            'radial-gradient(rgba(11, 25, 44, 0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0b192c] text-[#f5b915] px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
            Read • Learn • Succeed
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#07111e] tracking-tight">
            Built for Every Serious{' '}
            <span className="text-[#991b1b] underline decoration-[#f5b915] decoration-4 underline-offset-4">
              Exam & Academic Goal
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Whether you are cracking UPSC/BPSC, SSC, Railway, Banking, Engineering, or Board
            Toppers — find structured resources and focused peers under one roof.
          </p>
        </div>

        {/* 4 Core Study Pillars from Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {STUDY_PILLARS.map((pillar) => {
            const Icon = PILLAR_ICONS[pillar.iconName] || Award;
            return (
              <div
                key={pillar.id}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-amber-400 transition-all p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#07111e] text-[#f5b915] flex items-center justify-center shadow">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-hindi text-xs font-bold text-slate-400">
                      {pillar.hindiLabel}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#07111e]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Iconic 5-Book Stack & Resource Finder */}
        <div className="rounded-3xl bg-[#07111e] text-white p-6 sm:p-10 shadow-2xl border border-amber-400/25">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Interactive 5-Book Stack (Inspired directly by Banner) */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#f5b915] mb-2">
                <Layers className="w-4 h-4" />
                <span>Interactive Reference Stack</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                Click Any Subject Spine
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Explore our signature 5-subject collection available inside the reading hall.
              </p>

              <div className="space-y-3">
                {SUBJECT_STACKS.map((stack, i) => {
                  const isActive = stack.id === activeStackId && !normalizedQuery;
                  // Slight horizontal stagger on sm+ to evoke a realistic physical stack of books
                  const offsets = [
                    'sm:ml-0 sm:mr-4',
                    'sm:ml-3 sm:mr-1',
                    'sm:ml-1 sm:mr-3',
                    'sm:ml-4 sm:mr-0',
                    'sm:ml-2 sm:mr-2',
                  ];
                  return (
                    <button
                      key={stack.id}
                      type="button"
                      onClick={() => {
                        setSearchTerm('');
                        setActiveStackId(stack.id);
                      }}
                      className={`w-full text-left rounded-r-xl rounded-l-md border-l-8 px-4 sm:px-5 py-3.5 transition-all duration-300 cursor-pointer flex items-center justify-between gap-2 shadow-lg ${
                        offsets[i]
                      } ${stack.spineColor} ${
                        isActive
                          ? 'ring-2 ring-[#f5b915] sm:translate-x-2 sm:scale-[1.02] shadow-amber-500/20'
                          : 'opacity-85 hover:opacity-100 sm:hover:translate-x-1'
                      }`}
                    >
                      <div>
                        <span className="font-display font-extrabold tracking-wider text-sm sm:text-base uppercase text-white">
                          {stack.title}
                        </span>
                        <div className="text-[11px] text-slate-200/80 mt-0.5">
                          {stack.examTargets.slice(0, 2).join(' • ')}
                        </div>
                      </div>
                      <span
                        className={`text-xs font-mono-tech px-2.5 py-1 rounded-full whitespace-nowrap shrink-0 ${
                          isActive
                            ? 'bg-[#f5b915] text-[#07111e] font-bold'
                            : 'bg-black/30 text-slate-200'
                        }`}
                      >
                        {isActive ? 'Viewing' : 'Inspect →'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Selected Stack Details & Searchable Resource Catalog */}
            <div className="lg:col-span-7 bg-[#0b192d] rounded-2xl border border-slate-800 p-5 sm:p-7">
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Search library books and exams"
                  placeholder="Search books, exams (e.g. BPSC, SSC, Maths, NCERT, GATE)..."
                  className="w-full rounded-xl bg-[#060f1d] border border-slate-700/90 pl-10 pr-10 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#f5b915]"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Active Header */}
              {!normalizedQuery ? (
                <div className="mb-5 pb-4 border-b border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display font-bold text-2xl text-[#f5b915]">
                      {activeStack.title} Shelf
                    </h3>
                    <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-400/25 px-3 py-1 rounded-full">
                      Available in Reading Hall
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeStack.examTargets.map((exam) => (
                      <span
                        key={exam}
                        className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${activeStack.badgeColor}`}
                      >
                        {exam}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mb-4 text-xs font-semibold text-amber-300">
                  Showing {filteredResources.length} matching resource
                  {filteredResources.length === 1 ? '' : 's'} for “{searchTerm}”
                </div>
              )}

              {/* Resource Cards */}
              <div className="space-y-3">
                {filteredResources.length > 0 ? (
                  filteredResources.map((item) => (
                    <div
                      key={`${item.category}-${item.title}`}
                      className="rounded-xl bg-[#07111e] border border-slate-800 hover:border-amber-400/35 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-[#f5b915] shrink-0 mt-0.5">
                          <BookMarked className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm sm:text-base">
                            {item.title}
                          </h4>
                          <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-slate-400">
                            <span>{item.category}</span>
                            <span>•</span>
                            <span className="text-amber-300">{item.type}</span>
                          </div>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 px-3 py-1.5 rounded-lg self-start sm:self-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{item.level}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="rounded-xl bg-[#07111e] border border-slate-800 p-6 text-center text-sm text-slate-400 space-y-3">
                    <p>
                      No matching book title found — ask our library coordinator on desk or call{' '}
                      <a
                        href="tel:9031464838"
                        className="text-amber-300 font-mono-tech underline hover:text-amber-200"
                      >
                        9031464838
                      </a>{' '}
                      to request any specific title!
                    </p>
                    <button
                      type="button"
                      onClick={() => setSearchTerm('')}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 px-3 py-1.5 text-xs font-semibold cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>Reset Search</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

