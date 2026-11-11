import { useState, useEffect, useCallback } from 'react';
import {
  Star,
  Quote,
  Maximize2,
  X,
  Camera,
  ChevronLeft,
  ChevronRight,
  MapPin,
  CheckCircle2,
  Instagram,
  ExternalLink,
} from 'lucide-react';
import { TESTIMONIALS, REAL_GALLERY_PHOTOS, LIBRARY_INFO } from '../data/libraryData';

const GALLERY_CATEGORIES = ['All Photos', 'Reading Hall & AC', 'CCTV & Safety', 'Books & Desks'];
const REVIEW_CATEGORIES = ['All Reviews', 'Girls Zone', 'SSC & Railway', 'BPSC & College'];

export function TestimonialsAndGallery() {
  const [activeCategory, setActiveCategory] = useState('All Photos');
  const [activeReviewCategory, setActiveReviewCategory] = useState('All Reviews');
  const [activePhotoId, setActivePhotoId] = useState(REAL_GALLERY_PHOTOS[0].id);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredReviews =
    activeReviewCategory === 'All Reviews'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === activeReviewCategory);

  const filteredPhotos =
    activeCategory === 'All Photos'
      ? REAL_GALLERY_PHOTOS
      : REAL_GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  const activePhoto =
    filteredPhotos.find((p) => p.id === activePhotoId) || filteredPhotos[0];

  const handleSelectCategory = (cat) => {
    setActiveCategory(cat);
    const nextList =
      cat === 'All Photos'
        ? REAL_GALLERY_PHOTOS
        : REAL_GALLERY_PHOTOS.filter((p) => p.category === cat);
    if (nextList.length > 0) {
      setActivePhotoId(nextList[0].id);
    }
  };

  const stepPhoto = useCallback(
    (delta) => {
      if (filteredPhotos.length === 0) return;
      const currentIdx = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
      const nextIdx = (currentIdx + delta + filteredPhotos.length) % filteredPhotos.length;
      setActivePhotoId(filteredPhotos[nextIdx].id);
      if (lightboxIndex !== null) {
        setLightboxIndex(nextIdx);
      }
    },
    [filteredPhotos, activePhoto.id, lightboxIndex]
  );

  useEffect(() => {
    if (lightboxIndex === null) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') stepPhoto(1);
      if (e.key === 'ArrowLeft') stepPhoto(-1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, stepPhoto]);

  return (
    <section className="relative py-14 sm:py-20 bg-[#07111e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* REAL CAMPUS GALLERY HUB */}
        <div id="gallery" className="scroll-mt-24 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div className="max-w-2xl space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 border border-amber-400/25 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#f5b915]">
                <Camera className="w-3.5 h-3.5" />
                Real Campus Gallery Hub
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
                See Our Real{' '}
                <span className="text-gold-gradient">Reading Hall Before You Visit</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Actual inside photos of Ritesh Digital Library, Koli Chok, Laxmipur — inspect the
                AC cooling, numbered cubicles, power sockets, reference bookshelf & 24×7 CCTV
                monitoring.
              </p>
            </div>

            {/* Category Filter Pills & Official Instagram Link */}
            <div className="flex flex-col sm:items-end gap-2.5">
              <div className="flex flex-wrap gap-2">
                {GALLERY_CATEGORIES.map((cat) => {
                  const isActive = cat === activeCategory;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => handleSelectCategory(cat)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#f5b915] text-[#07111e] shadow'
                          : 'bg-[#0c1a30] text-slate-300 border border-slate-800 hover:border-amber-400/40'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
              <a
                href={LIBRARY_INFO.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start sm:self-auto inline-flex items-center gap-2 rounded-xl border border-pink-400/35 bg-gradient-to-r from-fuchsia-500/15 via-rose-500/15 to-amber-500/15 hover:from-fuchsia-500/25 hover:to-amber-500/25 px-3.5 py-2 text-xs font-bold text-pink-200 transition-all"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-300 shrink-0" />
                <span>Reels &amp; Updates: {LIBRARY_INFO.social.instagram.handle}</span>
                <ExternalLink className="w-3 h-3 text-pink-300 shrink-0" />
              </a>
            </div>
          </div>

          {/* Interactive Gallery Showcase Stage */}
          <div className="rounded-3xl bg-[#0b182c] border border-amber-400/25 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Featured Main Photo Viewer */}
              <div className="lg:col-span-8 relative bg-[#040a14] flex items-center justify-center min-h-[220px] sm:min-h-[380px] lg:min-h-[420px] max-h-[500px] overflow-hidden">
                <img
                  src={activePhoto.src}
                  alt={`${activePhoto.title} — Ritesh Digital Library Above IDBI Bank Koli Chok Laxmipur Begusarai`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full max-h-[500px] object-contain"
                />

                {/* Badge Overlay */}
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 rounded-full bg-[#07111e]/90 border border-amber-400/40 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-bold text-[#f5b915] backdrop-blur">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {activePhoto.badge}
                </span>

                {/* Prev / Next Arrows */}
                {filteredPhotos.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => stepPhoto(-1)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/65 hover:bg-[#f5b915] text-white hover:text-[#07111e] flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Previous campus photo"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => stepPhoto(1)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/65 hover:bg-[#f5b915] text-white hover:text-[#07111e] flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Next campus photo"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Expand Lightbox Button */}
                <button
                  type="button"
                  onClick={() => {
                    const idx = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
                    setLightboxIndex(idx >= 0 ? idx : 0);
                  }}
                  className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 inline-flex items-center gap-1.5 rounded-xl bg-black/75 hover:bg-[#f5b915] text-white hover:text-[#07111e] border border-white/15 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold backdrop-blur transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Full Screen View</span>
                </button>
              </div>

              {/* Right Details & Selector List */}
              <div className="lg:col-span-4 p-6 sm:p-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800 bg-[#091528]">
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-amber-300">
                    {activePhoto.category}
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white leading-snug">
                    {activePhoto.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{activePhoto.caption}</p>

                  <div className="rounded-xl bg-[#060f1d] border border-slate-800 p-3.5 flex items-start gap-2.5 text-xs text-slate-300">
                    <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-hindi font-semibold text-white">
                        {LIBRARY_INFO.address.landmarkHi}
                      </span>
                      , 1st Floor, Koli Chok, Laxmipur, Begusarai
                    </div>
                  </div>
                </div>

                {/* Quick Photo Switcher Grid */}
                <div className="mt-6 pt-5 border-t border-slate-800">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Select Photo ({filteredPhotos.length})
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 gap-2">
                    {filteredPhotos.map((photo) => {
                      const selected = photo.id === activePhoto.id;
                      return (
                        <button
                          key={photo.id}
                          type="button"
                          onClick={() => setActivePhotoId(photo.id)}
                          aria-label={`Select photo: ${photo.title}`}
                          className={`group relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all cursor-pointer ${
                            selected
                              ? 'border-[#f5b915] ring-2 ring-[#f5b915]/30 scale-[1.03]'
                              : 'border-slate-800 opacity-70 hover:opacity-100 hover:border-slate-600'
                          }`}
                        >
                          <img
                            src={photo.src}
                            alt={`${photo.title} — Ritesh Digital Library Begusarai`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Photos Cards Strip for Instant Scanning */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mt-5">
            {filteredPhotos.map((photo, index) => {
              const isSelected = photo.id === activePhoto.id;
              return (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => {
                    setActivePhotoId(photo.id);
                    setLightboxIndex(index);
                  }}
                  className={`group rounded-2xl overflow-hidden border text-left transition-all cursor-pointer bg-[#0b182c] ${
                    isSelected
                      ? 'border-[#f5b915] shadow-lg shadow-amber-500/10'
                      : 'border-slate-800 hover:border-[#f5b915]/55'
                  }`}
                >
                  <div className="aspect-[16/10] bg-[#040a14] overflow-hidden relative">
                    <img
                      src={photo.src}
                      alt={`${photo.title} — Ritesh Digital Library Koli Chok Laxmipur Begusarai`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/65 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="p-3.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                      {photo.badge}
                    </div>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-white mt-0.5 line-clamp-1 group-hover:text-[#f5b915] transition-colors">
                      {photo.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* STUDENT TESTIMONIALS */}
        <div id="testimonials" className="scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 border border-amber-400/25 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#f5b915]">
              For Students, By Students • {TESTIMONIALS.length} Verified Aspirants
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Trusted by Begusarai’s{' '}
              <span className="text-gold-gradient">Dedicated Aspirants</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Real feedback from B.A./B.Sc., SSC, Railway, BPSC & Girl Zone scholars studying from
              Laxmipur, Koli Chok & nearby villages.
            </p>

            {/* Review Category Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {REVIEW_CATEGORIES.map((cat) => {
                const count =
                  cat === 'All Reviews'
                    ? TESTIMONIALS.length
                    : TESTIMONIALS.filter((t) => t.category === cat).length;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveReviewCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      activeReviewCategory === cat
                        ? 'bg-[#f5b915] text-[#07111e] shadow'
                        : 'bg-slate-900 border border-slate-700 text-slate-300 hover:border-amber-400/40'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredReviews.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl bg-[#0c1a30] border border-slate-800 hover:border-amber-400/35 p-5 sm:p-6 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="flex items-center gap-1 text-[#f5b915]">
                      {Array.from({ length: item.rating }).map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                          item.category === 'Girls Zone'
                            ? 'bg-rose-500/15 border-rose-400/35 text-rose-200'
                            : 'bg-sky-500/12 border-sky-400/30 text-sky-200'
                        }`}
                      >
                        {item.category}
                      </span>
                      <Quote className="w-5 h-5 text-amber-400/30 shrink-0" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed italic">“{item.quote}”</p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <div className="font-display font-bold text-white text-sm sm:text-base truncate">
                      {item.name}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-400 truncate">
                      {item.target}
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 shrink-0">
                    {item.shift}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal with Prev/Next */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[85] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full rounded-2xl overflow-hidden bg-[#0b182c] border border-amber-400/35 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/75 text-white hover:text-[#f5b915] flex items-center justify-center cursor-pointer"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative bg-[#040a14] flex items-center justify-center">
              <img
                src={filteredPhotos[lightboxIndex].src}
                alt={filteredPhotos[lightboxIndex].title}
                className="w-full max-h-[75vh] object-contain"
              />
              {filteredPhotos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => stepPhoto(-1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/75 hover:bg-[#f5b915] text-white hover:text-[#07111e] flex items-center justify-center cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => stepPhoto(1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/75 hover:bg-[#f5b915] text-white hover:text-[#07111e] flex items-center justify-center cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            <div className="p-5 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="font-display font-bold text-lg text-[#f5b915]">
                  {filteredPhotos[lightboxIndex].title}
                </h4>
                <p className="text-sm text-slate-300 mt-1">
                  {filteredPhotos[lightboxIndex].caption}
                </p>
              </div>
              <span className="font-mono-tech text-xs text-slate-400 shrink-0">
                {lightboxIndex + 1} / {filteredPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
