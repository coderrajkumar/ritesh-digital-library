import { useState } from 'react';
import {
  X,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  MapPin,
  Printer,
  UserCheck,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import {
  FEE_PLANS,
  LIBRARY_INFO,
  TIME_OPTIONS,
  formatHour,
  getCustomFeeInfo,
} from '../data/libraryData';

const DEFAULT_VISIT_DATE = new Date().toISOString().split('T')[0];

function buildAdmissionWhatsAppUrl(slip, phoneIntl = '919031464838') {
  const feeDisplay = /^\d+$/.test(slip.finalFee) ? `₹${slip.finalFee}/month` : slip.finalFee;
  const text = [
    '*RITESH DIGITAL LIBRARY — ADMISSION / QUERY FORM*',
    `Form No.: ${slip.formNo}`,
    `1. Student Name: ${slip.fullName}`,
    `2. Father / Guardian: ${slip.fatherName}`,
    `3. Mobile Number: ${slip.phone}`,
    `4. Alternate Mobile: ${slip.altPhone || 'Not Provided'}`,
    `5. Date of Birth: ${slip.dob || 'Not Provided'}`,
    `6. Village / Address: ${slip.address}`,
    `7. Preparing For / Course: ${slip.examTrack}`,
    `8. ID Proof: ${slip.idProofType}${slip.idProofNo ? ` (${slip.idProofNo})` : ' (Verify at Desk)'}`,
    `9. Seating Zone: ${slip.girlsZone ? 'Girls Dedicated Study Zone (Reserved)' : 'Standard Reading Hall'}`,
    `10. Selected Timing: ${slip.finalTiming}`,
    `11. Monthly Fee Slab: ${feeDisplay}`,
    `12. Seat Preference: ${slip.seatId || 'Any Available (RDL-01 to RDL-50)'}`,
    `13. Joining / Visit Date: ${slip.admissionDate}`,
    `14. Rules Declaration: ${slip.agreedToRules ? 'Accepted & Agreed' : 'Pending'}`,
  ].join('\n');

  return `https://wa.me/${phoneIntl}?text=${encodeURIComponent(text)}`;
}

export function AdmissionModal({ initialPreset, onClose, onConfirmSeat }) {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    phone: '',
    altPhone: '',
    dob: '',
    address: '',
    idProofType: 'Aadhar Card',
    idProofNo: '',
    examTrack: 'SSC / Railway / Competitive',
    girlsZone: Boolean(initialPreset?.girlsZone),
    slotMode: initialPreset?.slotMode || 'standard',
    durationHours: initialPreset?.durationHours || 8,
    standardTiming: initialPreset?.timingText || '6:00 AM – 2:00 PM',
    customStart: initialPreset?.customStart ?? 8,
    customEnd: initialPreset?.customEnd ?? 12,
    monthlyFee: initialPreset?.monthlyFee || '500',
    seatId: initialPreset?.seatId || '',
    admissionDate: DEFAULT_VISIT_DATE,
    agreedToRules: true,
  });

  const [generatedSlip, setGeneratedSlip] = useState(null);

  const selectedPlan =
    FEE_PLANS.find((p) => p.durationHours === Number(formData.durationHours)) || FEE_PLANS[1];

  const handlePlanHoursChange = (hrs) => {
    const plan = FEE_PLANS.find((p) => p.durationHours === hrs) || FEE_PLANS[0];
    setFormData((prev) => ({
      ...prev,
      slotMode: 'standard',
      durationHours: hrs,
      standardTiming: plan.slots[0].label,
      monthlyFee: String(plan.slots[0].fee),
    }));
  };

  const handleStandardSlotPick = (slot) => {
    setFormData((prev) => ({
      ...prev,
      standardTiming: slot.label,
      monthlyFee: String(slot.fee),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formNo = `RDL-${Math.floor(1000 + Math.random() * 9000)}`;

    const finalTiming =
      formData.slotMode === 'custom'
        ? `${formatHour(formData.customStart)} – ${formatHour(formData.customEnd)} (${
            formData.customEnd - formData.customStart
          } Hrs Custom)`
        : `${formData.standardTiming} (${formData.durationHours} Hrs Plan)`;

    let finalFee = formData.monthlyFee;
    if (formData.slotMode === 'custom') {
      const tariff = getCustomFeeInfo(formData.customStart, formData.customEnd);
      finalFee = tariff.feeAmount ? String(tariff.feeAmount) : 'Custom (Desk Confirmed)';
    }

    const completedSlip = {
      ...formData,
      formNo,
      finalTiming,
      finalFee,
    };

    setGeneratedSlip(completedSlip);

    if (formData.seatId && onConfirmSeat) {
      onConfirmSeat(formData.seatId);
    }

    // Automatically launch WhatsApp with complete filled admission details to 9031464838
    window.open(buildAdmissionWhatsAppUrl(completedSlip), '_blank', 'noopener,noreferrer');
  };

  const whatsappPrimaryUrl = generatedSlip ? buildAdmissionWhatsAppUrl(generatedSlip, '919031464838') : '#';
  const whatsappSecondaryUrl = generatedSlip ? buildAdmissionWhatsAppUrl(generatedSlip, '917321890516') : '#';

  return (
    <div
      className="fixed inset-0 z-[80] bg-black/82 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-[#091528] border border-amber-400/35 shadow-[0_25px_70px_rgba(0,0,0,0.65)] overflow-hidden my-4 sm:my-6 max-h-[92dvh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Banner matching Physical Admission Form Header */}
        <div className="bg-gradient-to-r from-[#07111e] via-[#102544] to-[#07111e] px-4 sm:px-6 py-4 border-b border-amber-400/25 flex items-center justify-between shrink-0">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#f5b915]">
              <Sparkles className="w-3.5 h-3.5" />
              Ritesh Digital Library • 50-Seat Quiet Hall
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-0.5">
              {generatedSlip ? 'Official Admission & Office Slip' : 'Student Admission / Trial Form'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-4 sm:p-7 overflow-y-auto">
          {!generatedSlip ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Student Personal Details */}
              <div className="text-[11px] font-bold uppercase tracking-widest text-sky-300 border-b border-slate-800 pb-1.5">
                Student Details (विद्यार्थी विवरण)
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    1. Student Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Aditya Kumar"
                    className="w-full rounded-xl bg-[#060f1d] border border-slate-700 px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#f5b915]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    2. Father’s / Guardian’s Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.fatherName}
                    onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                    placeholder="Father / Guardian Name"
                    className="w-full rounded-xl bg-[#060f1d] border border-slate-700 px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#f5b915]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    3. Mobile Number *
                  </label>
                  <input
                    required
                    type="tel"
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile"
                    className="w-full rounded-xl bg-[#060f1d] border border-slate-700 px-3.5 py-2 text-sm text-white font-mono-tech focus:outline-none focus:border-[#f5b915]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    4. Alternate Number
                  </label>
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    value={formData.altPhone}
                    onChange={(e) => setFormData({ ...formData, altPhone: e.target.value })}
                    placeholder="Parent / Alt mobile"
                    className="w-full rounded-xl bg-[#060f1d] border border-slate-700 px-3.5 py-2 text-sm text-white font-mono-tech focus:outline-none focus:border-[#f5b915]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    5. Date of Birth
                  </label>
                  <input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full rounded-xl bg-[#060f1d] border border-slate-700 px-3 py-2 text-sm text-white font-mono-tech focus:outline-none focus:border-[#f5b915]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    6. Village / Mohalla Address *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="e.g. Laxmipur / Nearby Village, Begusarai"
                    className="w-full rounded-xl bg-[#060f1d] border border-slate-700 px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#f5b915]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    7. Preparing For / Course
                  </label>
                  <select
                    value={formData.examTrack}
                    onChange={(e) => setFormData({ ...formData, examTrack: e.target.value })}
                    className="w-full rounded-xl bg-[#060f1d] border border-slate-700 px-3 py-2 text-sm text-white focus:outline-none focus:border-[#f5b915]"
                  >
                    <option>SSC / Railway / Competitive</option>
                    <option>B.A. / B.Sc. / B.Com (College)</option>
                    <option>Bihar Police / Daroga / Defence</option>
                    <option>UPSC / BPSC</option>
                    <option>Class 10th / 12th Board</option>
                    <option>Engineering / Polytechnic / GATE</option>
                    <option>NEET / JEE</option>
                  </select>
                </div>
              </div>

              {/* ID Proof matching Image 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    8. ID Proof Type (Verified at Desk)
                  </label>
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                    {['Aadhar Card', 'Student ID', 'Other'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, idProofType: type })}
                        className={`py-2 px-1.5 sm:px-2 rounded-xl text-[11px] sm:text-xs font-semibold border cursor-pointer transition-colors whitespace-nowrap ${
                          formData.idProofType === type
                            ? 'bg-[#f5b915] text-[#07111e] border-white font-bold'
                            : 'bg-[#060f1d] border-slate-700 text-slate-300'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    ID Proof No. / Last 4 Digits (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.idProofNo}
                    onChange={(e) => setFormData({ ...formData, idProofNo: e.target.value })}
                    placeholder="e.g. XXXX-1234 or College Roll No."
                    className="w-full rounded-xl bg-[#060f1d] border border-slate-700 px-3.5 py-2 text-sm text-white font-mono-tech focus:outline-none focus:border-[#f5b915]"
                  />
                </div>
              </div>

              {/* Selected Timing & Custom Slot Mode */}
              <div className="rounded-2xl bg-[#060f1d] border border-slate-800 p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#f5b915] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Selected Timing Plan
                  </span>
                  <div className="inline-flex rounded-lg bg-[#0b182c] p-0.5 border border-slate-700">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, slotMode: 'standard' })}
                      className={`px-3 py-1 rounded-md text-xs font-bold cursor-pointer ${
                        formData.slotMode === 'standard'
                          ? 'bg-[#f5b915] text-[#07111e]'
                          : 'text-slate-300'
                      }`}
                    >
                      Standard Plan
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, slotMode: 'custom' })}
                      className={`px-3 py-1 rounded-md text-xs font-bold cursor-pointer ${
                        formData.slotMode === 'custom'
                          ? 'bg-[#f5b915] text-[#07111e]'
                          : 'text-slate-300'
                      }`}
                    >
                      Custom Time
                    </button>
                  </div>
                </div>

                {formData.slotMode === 'standard' ? (
                  <>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {FEE_PLANS.map((plan) => (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() => handlePlanHoursChange(plan.durationHours)}
                          className={`py-2 rounded-xl text-xs font-bold border cursor-pointer transition-all ${
                            Number(formData.durationHours) === plan.durationHours
                              ? 'bg-[#f5b915] text-[#07111e] border-white'
                              : 'bg-[#0b182c] border-slate-700 text-slate-300 hover:border-amber-400/40'
                          }`}
                        >
                          {plan.durationHours} Hours
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedPlan.slots.map((slot) => (
                        <button
                          key={slot.id}
                          type="button"
                          onClick={() => handleStandardSlotPick(slot)}
                          className={`px-3 py-2 rounded-xl text-xs font-mono-tech border flex items-center justify-between cursor-pointer ${
                            formData.standardTiming === slot.label
                              ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold'
                              : 'bg-[#0b182c] border-slate-800 text-slate-300'
                          }`}
                        >
                          <span>{slot.label}</span>
                          <span>₹{slot.fee}</span>
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">
                        Custom Start Time
                      </label>
                      <select
                        value={formData.customStart}
                        onChange={(e) => {
                          const s = Number(e.target.value);
                          setFormData((prev) => ({
                            ...prev,
                            customStart: s,
                            customEnd: prev.customEnd <= s ? Math.min(22, s + 2) : prev.customEnd,
                          }));
                        }}
                        className="w-full rounded-xl bg-[#0b182c] border border-slate-700 px-3 py-2 text-xs font-mono-tech text-white"
                      >
                        {TIME_OPTIONS.slice(0, -1).map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">
                        Custom End Time
                      </label>
                      <select
                        value={formData.customEnd}
                        onChange={(e) =>
                          setFormData({ ...formData, customEnd: Number(e.target.value) })
                        }
                        className="w-full rounded-xl bg-[#0b182c] border border-slate-700 px-3 py-2 text-xs font-mono-tech text-white"
                      >
                        {TIME_OPTIONS.filter((t) => t.value > formData.customStart).map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Joining / Trial Visit Date
                  </label>
                  <input
                    type="date"
                    value={formData.admissionDate}
                    onChange={(e) => setFormData({ ...formData, admissionDate: e.target.value })}
                    className="w-full rounded-xl bg-[#060f1d] border border-slate-700 px-3.5 py-2 text-sm text-white font-mono-tech focus:outline-none focus:border-[#f5b915]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Seat No. (Out of 50)
                  </label>
                  <input
                    type="text"
                    value={formData.seatId}
                    onChange={(e) => setFormData({ ...formData, seatId: e.target.value })}
                    placeholder="e.g. RDL-08 or Any Available"
                    className="w-full rounded-xl bg-[#060f1d] border border-slate-700 px-3.5 py-2 text-sm text-white font-mono-tech focus:outline-none focus:border-[#f5b915]"
                  />
                </div>
              </div>

              <label className="flex items-start gap-2.5 rounded-xl bg-rose-500/10 border border-rose-400/30 p-3 text-xs text-rose-100 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.girlsZone}
                  onChange={(e) => setFormData({ ...formData, girlsZone: e.target.checked })}
                  className="mt-0.5 accent-[#f5b915] w-4 h-4 shrink-0"
                />
                <span>
                  <strong className="text-rose-200">
                    Reserve in Girls Dedicated Study Zone (छात्रा सुरक्षित ज़ोन)
                  </strong>{' '}
                  — Quiet reserved section for female aspirants with 24×7 CCTV monitoring.
                </span>
              </label>

              {/* Declaration Checkbox matching Image 2 */}
              <label className="flex items-start gap-2.5 rounded-xl bg-[#060f1d] border border-slate-800 p-3 text-xs text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.agreedToRules}
                  onChange={(e) => setFormData({ ...formData, agreedToRules: e.target.checked })}
                  className="mt-0.5 accent-[#f5b915] w-4 h-4 shrink-0"
                />
                <span>
                  <strong className="text-white">Declaration:</strong> I hereby confirm that the
                  information provided above is correct and I agree to follow all{' '}
                  <span className="text-[#f5b915] font-semibold">
                    Ritesh Digital Library Rules & Regulations (नियम एवं विनियम)
                  </span>
                  .
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#f5b915] hover:bg-amber-300 text-[#07111e] font-bold py-3.5 text-sm shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <UserCheck className="w-4 h-4" />
                <span>Submit & Send Full Form on WhatsApp (9031464838)</span>
              </button>
            </form>
          ) : (
            <div className="space-y-5">
              {/* Digital Admission Slip (Student + Office Use Summary) */}
              <div className="printable-slip rounded-2xl bg-gradient-to-br from-[#0e2342] via-[#07111e] to-[#122645] border-2 border-[#f5b915] p-5 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-amber-400/25 pb-3">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[#f5b915]">
                      Student Admission & Slot Slip
                    </div>
                    <div className="font-display font-bold text-lg text-white">
                      Ritesh Digital Library
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block">Form No.</span>
                    <span className="font-mono-tech font-bold text-sm px-2.5 py-0.5 rounded-md bg-[#f5b915] text-[#07111e]">
                      {generatedSlip.formNo}
                    </span>
                  </div>
                </div>

                {/* Student Info */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block">Student Name</span>
                    <strong className="text-white text-sm">{generatedSlip.fullName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Father / Guardian</span>
                    <strong className="text-white text-sm">{generatedSlip.fatherName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Mobile / Alt Mobile</span>
                    <strong className="text-white font-mono-tech">
                      {generatedSlip.phone}
                      {generatedSlip.altPhone ? ` / ${generatedSlip.altPhone}` : ''}
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Exam / Course & DOB</span>
                    <strong className="text-amber-300">
                      {generatedSlip.examTrack}
                      {generatedSlip.dob ? ` • ${generatedSlip.dob}` : ''}
                    </strong>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-400 block">Address, ID Proof & Zone</span>
                    <strong className="text-slate-200">
                      {generatedSlip.address} • {generatedSlip.idProofType}
                      {generatedSlip.idProofNo ? ` (${generatedSlip.idProofNo})` : ''} •{' '}
                      {generatedSlip.girlsZone ? 'Girls Dedicated Zone' : 'Standard Hall'}
                    </strong>
                  </div>
                </div>

                {/* Office Use Box matching Image 2 */}
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-400/30 p-3.5 space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Office Allocation Summary (For Library Office)
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                    <div>
                      <span className="text-slate-400 block">Admission Date</span>
                      <strong className="text-white font-mono-tech">
                        {generatedSlip.admissionDate}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Selected Timing</span>
                      <strong className="text-white font-mono-tech">
                        {generatedSlip.finalTiming}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Monthly Fee</span>
                      <strong className="text-[#f5b915] font-mono-tech">
                        {/^\d+$/.test(generatedSlip.finalFee)
                          ? `₹${generatedSlip.finalFee} / month`
                          : generatedSlip.finalFee}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Seat No.</span>
                      <strong className="text-emerald-300 font-mono-tech">
                        {generatedSlip.seatId || 'Assigned at Desk'}
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Official Declaration & Signature Lines matching Physical Form Poster */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800 text-[11px] text-slate-300">
                  <div className="rounded-xl bg-[#07111e]/75 border border-slate-800 p-2.5 flex flex-col justify-between min-h-[54px]">
                    <span className="text-slate-400 text-[10px]">Student Signature & Date</span>
                    <span className="font-mono-tech text-[10px] text-slate-500">
                      Date: ____ / ____ / ________
                    </span>
                  </div>
                  <div className="rounded-xl bg-[#07111e]/75 border border-slate-800 p-2.5 flex flex-col justify-between min-h-[54px]">
                    <span className="text-slate-400 text-[10px]">Library In-charge Signature & Date</span>
                    <span className="font-mono-tech text-[10px] text-slate-500">
                      Date: ____ / ____ / ________
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center gap-2 text-[11px] text-slate-300">
                  <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                  <span>
                    Bring 1 passport photo & ID copy at: {LIBRARY_INFO.address.fullBanner}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 print:hidden">
                <a
                  href={whatsappPrimaryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#07111e] font-bold py-3.5 px-4 text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Complete Form on WhatsApp (9031464838)</span>
                </a>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold py-3.5 px-4 text-sm cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Slip</span>
                </button>
              </div>

              <div className="text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-2 print:hidden">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  Alt WhatsApp:{' '}
                  <a
                    href={whatsappSecondaryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-300 underline font-mono-tech font-bold"
                  >
                    7321890516
                  </a>{' '}
                  • Desk Helpline:{' '}
                  <a href="tel:9031464838" className="text-[#f5b915] font-mono-tech font-bold">
                    9031464838
                  </a>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
