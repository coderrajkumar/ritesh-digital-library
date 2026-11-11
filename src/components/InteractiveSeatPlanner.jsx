import { useState } from 'react';
import {
  Clock,
  Armchair,
  Wifi,
  Zap,
  Lock,
  ArrowRight,
  MessageCircle,
  Sparkles,
  SlidersHorizontal,
  IndianRupee,
} from 'lucide-react';
import {
  FEE_PLANS,
  FLOOR_ZONES,
  TIME_OPTIONS,
  CUSTOM_SLOT_PRESETS,
  formatHour,
  getCustomFeeInfo,
} from '../data/libraryData';

export function InteractiveSeatPlanner({ seats, selectedSeat, onSelectSeat, onOpenBooking }) {
  // Slot Mode: 'standard' or 'custom'
  const [slotMode, setSlotMode] = useState('standard');
  const [selectedPlanId, setSelectedPlanId] = useState('8hr');
  const [selectedSlotId, setSelectedSlotId] = useState('8hr-1');

  // Custom Time Slot State (default e.g. 8 AM - 12 PM)
  const [customStart, setCustomStart] = useState(8);
  const [customEnd, setCustomEnd] = useState(12);

  const [activeZoneId, setActiveZoneId] = useState('all');
  const [girlsZonePreferred, setGirlsZonePreferred] = useState(false);

  const activePlan = FEE_PLANS.find((p) => p.id === selectedPlanId) || FEE_PLANS[0];
  const activeSlot =
    activePlan.slots.find((s) => s.id === selectedSlotId) || activePlan.slots[0];

  const customCalc = getCustomFeeInfo(customStart, customEnd);
  const customTimingText = `${formatHour(customStart)} – ${formatHour(customEnd)}`;

  const summaryPlanTitle =
    slotMode === 'standard'
      ? `${activePlan.title}`
      : `Custom Slot (${customCalc.valid ? `${customCalc.duration} Hours` : 'Invalid'})`;

  const summaryTimingText =
    slotMode === 'standard' ? activeSlot.label : customTimingText;

  const summaryFeeText =
    slotMode === 'standard' ? `₹${activeSlot.fee} / month` : customCalc.feeLabel;

  const filteredZones =
    activeZoneId === 'all' ? FLOOR_ZONES : FLOOR_ZONES.filter((z) => z.id === activeZoneId);

  const availableCount = seats.filter((s) => s.status === 'available').length;
  const occupiedCount = seats.filter((s) => s.status === 'occupied').length;
  const reservedCount = seats.filter((s) => s.status === 'reserved').length;

  const whatsappInquiryUrl = `https://wa.me/919031464838?text=${encodeURIComponent(
    `Hello Ritesh Digital Library! I want to enquire about seat admission:\n• Plan: ${summaryPlanTitle}\n• Timing: ${summaryTimingText}\n• Fee Slab: ${summaryFeeText}${
      selectedSeat ? `\n• Preferred Seat: ${selectedSeat.id}` : ''
    }\n• Girls Dedicated Zone: ${
      girlsZonePreferred ? 'Yes (Safe Reserved Section)' : 'No (Standard Hall)'
    }\nPlease confirm availability.`
  )}`;

  const handleSelectStandardSlot = (planId, slotId) => {
    setSlotMode('standard');
    setSelectedPlanId(planId);
    setSelectedSlotId(slotId);
  };

  const handleBookingTrigger = () => {
    onOpenBooking({
      slotMode,
      planTitle: summaryPlanTitle,
      durationHours:
        slotMode === 'standard' ? activePlan.durationHours : customCalc.duration || 4,
      timingText: summaryTimingText,
      customStart,
      customEnd,
      monthlyFee:
        slotMode === 'standard'
          ? String(activeSlot.fee)
          : customCalc.feeAmount
            ? String(customCalc.feeAmount)
            : 'Custom (Desk Confirmed)',
      seatId: selectedSeat?.id || '',
      girlsZone: girlsZonePreferred,
    });
  };

  return (
    <section id="seats" className="relative py-14 sm:py-20 bg-[#060f1d] scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 border border-amber-400/25 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#f5b915]">
            Fees Structure • Custom Slot • 50-Seat Floor Map
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Transparent Fees, Custom Timings &{' '}
            <span className="text-gold-gradient">50-Seat Live Map</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Tap any Standard Shift card below — OR build your own Custom Time Slot (like{' '}
            <span className="text-amber-300 font-semibold">8 AM – 12 PM</span> or{' '}
            <span className="text-amber-300 font-semibold">12 PM – 2 PM</span>) and pick your seat.
          </p>
        </div>

        {/* PART 1: Official 4 Fees Structure Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          {FEE_PLANS.map((plan) => {
            const isPlanActive = slotMode === 'standard' && plan.id === selectedPlanId;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-5 sm:p-6 transition-all border flex flex-col justify-between ${
                  isPlanActive
                    ? 'bg-gradient-to-b from-[#13294b] to-[#0a172c] border-[#f5b915] ring-2 ring-[#f5b915]/30 shadow-[0_10px_35px_rgba(245,185,21,0.18)]'
                    : 'bg-[#0b182c] border-slate-800 hover:border-slate-600'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 right-5 rounded-full bg-[#f5b915] text-[#07111e] px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-wide shadow">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-xs font-mono-tech font-bold text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-md">
                      {plan.durationHours} Hours / Day
                    </span>
                    {!plan.featured && (
                      <span className="text-[11px] text-slate-400 font-medium">{plan.badge}</span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-xl text-white">{plan.title}</h3>
                  <div className="flex items-center gap-1 mt-1 text-base font-mono-tech font-extrabold text-emerald-300">
                    <IndianRupee className="w-4 h-4" />
                    <span>{plan.priceRange.replace('₹', '')}</span>
                  </div>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">{plan.idealFor}</p>

                  {/* Clickable Shift Timings inside each Plan */}
                  <div className="mt-4 space-y-2">
                    {plan.slots.map((slot) => {
                      const isSlotSelected =
                        slotMode === 'standard' && selectedSlotId === slot.id;
                      return (
                        <button
                          key={slot.id}
                          type="button"
                          onClick={() => handleSelectStandardSlot(plan.id, slot.id)}
                          className={`w-full rounded-xl px-3 py-2.5 text-left border transition-all flex items-center justify-between gap-2 cursor-pointer ${
                            isSlotSelected
                              ? 'bg-[#f5b915] text-[#07111e] border-white font-bold shadow'
                              : 'bg-[#07111e] border-slate-800 text-slate-200 hover:border-amber-400/50'
                          }`}
                        >
                          <div className="flex items-center gap-2 text-xs font-mono-tech">
                            <Clock className="w-3.5 h-3.5 shrink-0" />
                            <span>{slot.label}</span>
                          </div>
                          <span className="font-mono-tech text-xs font-extrabold shrink-0">
                            ₹{slot.fee}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>AC + Wi-Fi + Socket</span>
                  <span className={isPlanActive ? 'text-[#f5b915] font-bold' : 'text-slate-400'}>
                    {isPlanActive ? 'Active Plan ✓' : 'Tap slot to pick'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* PART 2: Custom Time Slot Builder (For flexible 8-12, 12-2, village/college students) */}
        <div
          className={`rounded-3xl p-6 sm:p-8 mb-12 border transition-all ${
            slotMode === 'custom'
              ? 'bg-gradient-to-br from-[#122645] via-[#0b182c] to-[#081222] border-[#f5b915] ring-2 ring-[#f5b915]/25 shadow-2xl'
              : 'bg-[#0b182c] border-amber-400/25 shadow-xl'
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#f5b915]">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Custom Time Slot Builder (अपना मनपसंद समय चुनें)</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white">
                Need a Custom Timing? (e.g. 8 AM–12 PM or 12 PM–2 PM)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Gaon aur aas-paas ke students apni college/coaching timing ke hisaab se apna custom
                slot choose kar sakte hain — fee aapke hours ke hisaab se adjust hogi.
              </p>

              {/* Quick Custom Presets */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 pt-2">
                {CUSTOM_SLOT_PRESETS.map((preset) => {
                  const isThisPreset =
                    slotMode === 'custom' &&
                    customStart === preset.start &&
                    customEnd === preset.end;
                  return (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => {
                        setSlotMode('custom');
                        setCustomStart(preset.start);
                        setCustomEnd(preset.end);
                      }}
                      className={`px-2.5 sm:px-3 py-2 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all cursor-pointer text-center ${
                        isThisPreset
                          ? 'bg-[#f5b915] text-[#07111e] font-bold'
                          : 'bg-[#07111e] border border-slate-700 text-slate-200 hover:border-[#f5b915]/60'
                      }`}
                    >
                      {preset.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Interactive Start / End Pickers */}
            <div className="rounded-2xl bg-[#07111e] border border-slate-800 p-4 min-[375px]:p-5 w-full lg:w-[440px] shrink-0 space-y-4">
              <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Start Time
                  </label>
                  <select
                    value={customStart}
                    onChange={(e) => {
                      const nextStart = Number(e.target.value);
                      setSlotMode('custom');
                      setCustomStart(nextStart);
                      if (customEnd <= nextStart) {
                        setCustomEnd(Math.min(22, nextStart + 2));
                      }
                    }}
                    className="w-full rounded-xl bg-[#0c1a30] border border-slate-700 px-2.5 min-[375px]:px-3 py-2.5 text-xs min-[375px]:text-sm font-mono-tech text-white focus:outline-none focus:border-[#f5b915]"
                  >
                    {TIME_OPTIONS.slice(0, -1).map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    End Time
                  </label>
                  <select
                    value={customEnd}
                    onChange={(e) => {
                      setSlotMode('custom');
                      setCustomEnd(Number(e.target.value));
                    }}
                    className="w-full rounded-xl bg-[#0c1a30] border border-slate-700 px-2.5 min-[375px]:px-3 py-2.5 text-xs min-[375px]:text-sm font-mono-tech text-white focus:outline-none focus:border-[#f5b915]"
                  >
                    {TIME_OPTIONS.filter((opt) => opt.value > customStart).map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="rounded-xl bg-[#0c1a30] border border-amber-400/25 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] text-slate-400">
                    Selected: <strong className="text-white">{customTimingText}</strong> (
                    {customCalc.duration} Hrs)
                  </div>
                  <div className="font-mono-tech font-bold text-sm text-[#f5b915] mt-0.5">
                    {customCalc.feeLabel}
                  </div>
                  {customCalc.note && (
                    <div className="text-[10px] text-emerald-300 mt-0.5">{customCalc.note}</div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSlotMode('custom');
                    handleBookingTrigger();
                  }}
                  className="w-full sm:w-auto shrink-0 rounded-xl bg-[#f5b915] hover:bg-amber-300 text-[#07111e] font-bold px-3.5 py-2.5 sm:py-2 text-xs transition-colors cursor-pointer"
                >
                  Apply Slot
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PART 3: Interactive 50-Seat Reading Hall Floor Map */}
        <div className="rounded-3xl glass-navy p-5 sm:p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#f5b915]">
                <Armchair className="w-4 h-4" />
                <span>Interactive Reading Hall Layout (50 Private Study Seats)</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mt-1">
                1st Floor AC Hall — Live Seat Selection (RDL-01 to RDL-50)
              </h3>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-emerald-500/25 border border-emerald-400 inline-block" />
                <span className="text-slate-200">Available ({availableCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-slate-800 border border-slate-600 inline-block" />
                <span className="text-slate-400">Occupied ({occupiedCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-amber-500/20 border border-amber-400/70 inline-block" />
                <span className="text-amber-200">Reserved ({reservedCount})</span>
              </div>
            </div>
          </div>

          {/* Zone Filter Tabs */}
          <div className="flex flex-wrap gap-2 py-5">
            <button
              type="button"
              onClick={() => setActiveZoneId('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeZoneId === 'all'
                  ? 'bg-[#f5b915] text-[#07111e]'
                  : 'bg-slate-900/90 text-slate-300 border border-slate-700 hover:border-amber-400/50'
              }`}
            >
              All Zones (50 Seats)
            </button>
            {FLOOR_ZONES.map((zone) => (
              <button
                key={zone.id}
                type="button"
                onClick={() => setActiveZoneId(zone.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeZoneId === zone.id
                    ? 'bg-[#f5b915] text-[#07111e]'
                    : 'bg-slate-900/90 text-slate-300 border border-slate-700 hover:border-amber-400/50'
                }`}
              >
                {zone.name.split('—')[0].trim()} ({zone.seatsCount})
              </button>
            ))}
          </div>

          {/* Floor Grid + Selected Seat Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              {filteredZones.map((zone) => {
                const zoneSeats = seats.filter((s) => s.zoneId === zone.id);
                return (
                  <div
                    key={zone.id}
                    className="rounded-2xl bg-[#07111e]/90 border border-slate-800/90 p-4 sm:p-5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
                      <h4 className="font-display font-bold text-base text-white">{zone.name}</h4>
                      <span className="text-xs text-slate-400">{zone.description}</span>
                    </div>

                    <div className="grid grid-cols-4 min-[375px]:grid-cols-5 sm:grid-cols-7 md:grid-cols-8 lg:grid-cols-6 xl:grid-cols-8 gap-1.5 sm:gap-2.5">
                      {zoneSeats.map((seat) => {
                        const isPicked = selectedSeat?.id === seat.id;
                        const isAvail = seat.status === 'available';
                        const isReserved = seat.status === 'reserved';

                        let seatClasses =
                          'bg-slate-900/80 border-slate-700/80 text-slate-500 cursor-not-allowed';
                        if (isAvail) {
                          seatClasses = isPicked
                            ? 'bg-[#f5b915] border-white text-[#07111e] font-extrabold shadow-[0_0_20px_rgba(245,185,21,0.55)] scale-105 cursor-pointer'
                            : 'bg-emerald-500/12 border-emerald-400/50 text-emerald-200 hover:bg-emerald-500/25 hover:border-emerald-300 cursor-pointer';
                        } else if (isReserved) {
                          seatClasses =
                            'bg-amber-500/12 border-amber-400/35 text-amber-300/75 cursor-not-allowed';
                        }

                        return (
                          <button
                            key={seat.id}
                            type="button"
                            disabled={!isAvail}
                            onClick={() => isAvail && onSelectSeat(seat)}
                            title={
                              isAvail
                                ? `Select Seat ${seat.id}`
                                : `Seat ${seat.id} is currently ${seat.status}`
                            }
                            className={`rounded-xl border py-2 sm:py-2.5 px-1 flex flex-col items-center justify-center transition-all ${seatClasses}`}
                          >
                            <Armchair className="w-3.5 h-3.5 sm:w-4 sm:h-4 mb-0.5 sm:mb-1" />
                            <span className="font-mono-tech text-[10px] sm:text-[11px] font-bold">
                              #{String(seat.number).padStart(2, '0')}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Sticky Inspector Card */}
            <div className="lg:col-span-4 rounded-2xl bg-[#07111e] border border-amber-400/30 p-5 sm:p-6 lg:sticky lg:top-24 space-y-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#f5b915]">
                  Your Admission Plan Summary
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1">
                  {summaryPlanTitle}
                </h3>
                <div className="flex items-center justify-between gap-2 mt-1.5">
                  <span className="font-mono-tech text-xs text-emerald-300">
                    {summaryTimingText}
                  </span>
                  <span className="font-mono-tech font-bold text-sm text-[#f5b915]">
                    {summaryFeeText}
                  </span>
                </div>
              </div>

              <div className="rounded-xl bg-[#0c1a30] border border-slate-800 p-4 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Selected Cubicle (out of 50)</span>
                  <span className="font-mono-tech font-bold text-sm text-[#f5b915]">
                    {selectedSeat ? selectedSeat.id : 'Tap any green seat'}
                  </span>
                </div>

                {selectedSeat ? (
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                    {selectedSeat.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-center gap-1.5 text-[11px] text-slate-200"
                      >
                        <Sparkles className="w-3 h-3 text-[#f5b915] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Every desk includes an individual power switchboard, comfortable chair, dual-band
                    Wi-Fi & AC comfort.
                  </p>
                )}
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-slate-900 p-2.5 border border-slate-800">
                  <Wifi className="w-4 h-4 text-sky-400 mx-auto mb-1" />
                  <span className="text-[10px] text-slate-300 block">150+ Mbps</span>
                </div>
                <div className="rounded-lg bg-slate-900 p-2.5 border border-slate-800">
                  <Zap className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                  <span className="text-[10px] text-slate-300 block">Power Plug</span>
                </div>
                <div className="rounded-lg bg-slate-900 p-2.5 border border-slate-800">
                  <Lock className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                  <span className="text-[10px] text-slate-300 block">CCTV Safe</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-1">
                <label className="flex items-start gap-2.5 rounded-xl bg-rose-500/10 border border-rose-400/30 p-3 text-xs text-rose-100 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={girlsZonePreferred}
                    onChange={(e) => setGirlsZonePreferred(e.target.checked)}
                    className="mt-0.5 accent-[#f5b915] w-4 h-4 shrink-0"
                  />
                  <span>
                    <strong className="text-rose-200 block">
                      Girls Dedicated Study Zone
                    </strong>
                    <span className="text-[11px] text-slate-300">
                      Request seating in reserved quiet & safe girls section
                    </span>
                  </span>
                </label>

                <button
                  type="button"
                  onClick={handleBookingTrigger}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#f5b915] hover:bg-amber-300 text-[#07111e] font-bold py-3.5 text-sm shadow-lg transition-all cursor-pointer"
                >
                  <span>
                    {selectedSeat
                      ? `Fill Admission Form (Seat ${selectedSeat.id})`
                      : 'Fill Admission / Trial Form'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-semibold py-3 text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Slot Query on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
