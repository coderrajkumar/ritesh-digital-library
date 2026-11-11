export const LIBRARY_INFO = {
  name: 'Ritesh Digital Library',
  shortName: 'RDL',
  taglinePrimary: 'Study • Focus • Grow',
  taglineSecondary: 'Focus • Discipline • Success',
  mottoPillars: ['Better Studies', 'Brighter Future', 'Achieve Big'],
  badgeText: 'Your Goals — Our Support',
  communityBadge: '50-Seat Quiet Self-Study Hall • Begusarai',
  quote: 'A Library is not just a place, it’s a way to a Better Future.',
  hindiQuote: 'अनुशासन ही सफलता की कुंजी है।',
  swachhSlogan: 'स्वच्छ लाइब्रेरी – सुरक्षित लाइब्रेरी – सफल भविष्य',
  totalSeats: 50,
  address: {
    landmarkHi: 'IDBI BANK के ऊपर',
    landmarkEn: 'Above IDBI Bank',
    floor: '1st Floor',
    street: 'Koli Chok, Laxmipur',
    city: 'Begusarai',
    state: 'Bihar',
    fullEnglish: 'Above IDBI Bank, 1st Floor, Koli Chok, Laxmipur, Begusarai, Bihar',
    fullBanner: 'IDBI BANK के ऊपर, 1st Floor, Koli Chok, Laxmipur, Begusarai, Bihar',
    mapsQuery: 'https://maps.app.goo.gl/MoygC2Gcs9otRd1Z9?g_st=aw',
  },
  contacts: [
    {
      label: 'Primary Desk & WhatsApp',
      number: '9031464838',
      display: '+91 90314 64838',
      isPrimary: true,
    },
    {
      label: 'Admission & Hall Coordinator',
      number: '7321890516',
      display: '+91 73218 90516',
      isPrimary: false,
    },
  ],
  hours: {
    daily: '6:00 AM – 10:00 PM',
    days: 'Open 7 Days a Week (Mon – Sun)',
    note: '4 Hr, 8 Hr, 12 Hr, 16 Hr & Custom Flexible Time Slots Available',
  },
  social: {
    instagram: {
      handle: '@riteshdigita_library',
      url: 'https://www.instagram.com/riteshdigita_library?utm_source=qr&vrfl=MTZ0cHJra2c4dHVhOA==',
    },
  },
};

export const GIRLS_ZONE_INFO = {
  badge: 'Girls Dedicated Study Zone',
  title: 'Safe, Quiet & Reserved Section for Girl Students',
  titleHi: 'छात्राओं के लिए अलग एवं सुरक्षित स्टडी ज़ोन',
  headline: 'Dedicated Quiet Study Bays Built for Comfort, Safety & Family Peace of Mind',
  description:
    'Special reserved seating row designed for female aspirants (B.A./B.Sc., SSC, Railway, BPSC, Bihar SI, Boards & NEET) from Begusarai town and nearby villages — so every student can study comfortably from 6:00 AM to 10:00 PM with complete privacy and dignity.',
  features: [
    'Reserved Girl-Only Seating Cluster with Acoustic Partitions',
    '24×7 HD CCTV Surveillance + Live Entry Display at Desk',
    'Zero-Disturbance Conduct Charter & Respectful Campus Culture',
    'Individual Laptop/Mobile Power Board & 150+ Mbps Wi-Fi',
    'Bright Glare-Free LEDs, Split AC + Ceiling Fans & Fire Safety Exit',
    'Direct Coordinator & Parent Helpline (+91 90314 64838 / 73218 90516)',
  ],
  metrics: [
    { label: 'Dedicated Bays', value: 'Reserved Quiet Row' },
    { label: 'Campus Safety', value: '24×7 Live CCTV' },
    { label: 'Starting Fee', value: '₹300 / month' },
  ],
};

export const FEE_PLANS = [
  {
    id: '4hr',
    title: '4 Hour Shift',
    durationHours: 4,
    priceRange: '₹300 / month',
    accent: 'sky',
    badge: 'Student Pocket Plan',
    idealFor: 'B.A. / B.Sc. students, coaching batches & custom 4-hr self-study',
    slots: [
      { id: '4hr-1', label: '6:00 AM – 10:00 AM', fee: 300, note: 'Morning 4 Hrs' },
      { id: '4hr-2', label: '10:00 AM – 2:00 PM', fee: 300, note: 'Mid-Day 4 Hrs' },
      { id: '4hr-3', label: '2:00 PM – 6:00 PM', fee: 300, note: 'Afternoon AC' },
      { id: '4hr-4', label: '6:00 PM – 10:00 PM', fee: 300, note: 'Calm Evening' },
    ],
  },
  {
    id: '8hr',
    title: '8 Hour Shift',
    durationHours: 8,
    priceRange: '₹500 / month',
    accent: 'emerald',
    badge: 'Most Popular',
    idealFor: 'SSC, Railway, Bihar Police / Daroga & Bank exam aspirants',
    slots: [
      { id: '8hr-1', label: '6:00 AM – 2:00 PM', fee: 500, note: 'Morning 8 Hrs' },
      { id: '8hr-2', label: '10:00 AM – 6:00 PM', fee: 500, note: 'Daytime 8 Hrs' },
      { id: '8hr-3', label: '2:00 PM – 10:00 PM', fee: 500, note: 'Afternoon–Night' },
    ],
  },
  {
    id: '12hr',
    title: '12 Hour Plan',
    durationHours: 12,
    priceRange: '₹600 / month',
    accent: 'rose',
    badge: 'Serious Prep',
    idealFor: 'Full-focus competitive & university exam warriors',
    slots: [
      { id: '12hr-1', label: '6:00 AM – 6:00 PM', fee: 600, note: 'Day Marathon' },
      { id: '12hr-2', label: '10:00 AM – 10:00 PM', fee: 600, note: 'Day to Night' },
    ],
  },
  {
    id: '16hr',
    title: '16 Hours Plan',
    durationHours: 16,
    priceRange: '₹750 / month',
    accent: 'amber',
    badge: 'Full-Day Topper',
    featured: true,
    idealFor: 'All-day unrestricted self-study from opening till closing',
    slots: [
      { id: '16hr-1', label: '6:00 AM – 10:00 PM', fee: 750, note: 'Complete 16 Hrs' },
    ],
  },
];

export const TIME_OPTIONS = [
  { value: 6, label: '6:00 AM' },
  { value: 7, label: '7:00 AM' },
  { value: 8, label: '8:00 AM' },
  { value: 9, label: '9:00 AM' },
  { value: 10, label: '10:00 AM' },
  { value: 11, label: '11:00 AM' },
  { value: 12, label: '12:00 PM' },
  { value: 13, label: '1:00 PM' },
  { value: 14, label: '2:00 PM' },
  { value: 15, label: '3:00 PM' },
  { value: 16, label: '4:00 PM' },
  { value: 17, label: '5:00 PM' },
  { value: 18, label: '6:00 PM' },
  { value: 19, label: '7:00 PM' },
  { value: 20, label: '8:00 PM' },
  { value: 21, label: '9:00 PM' },
  { value: 22, label: '10:00 PM' },
];

export const CUSTOM_SLOT_PRESETS = [
  { label: '8:00 AM – 12:00 PM (4 Hrs)', start: 8, end: 12 },
  { label: '12:00 PM – 2:00 PM (2 Hrs)', start: 12, end: 14 },
  { label: '9:00 AM – 1:00 PM (4 Hrs)', start: 9, end: 13 },
  { label: '8:00 AM – 4:00 PM (8 Hrs)', start: 8, end: 16 },
  { label: '4:00 PM – 8:00 PM (4 Hrs)', start: 16, end: 20 },
];

export function formatHour(hour) {
  if (hour === 12) return '12:00 PM';
  if (hour > 12) return `${hour - 12}:00 PM`;
  return `${hour}:00 AM`;
}

export function getCustomFeeInfo(startHour, endHour) {
  const duration = endHour - startHour;
  if (duration <= 0) {
    return { valid: false, duration: 0, feeLabel: 'Select valid end time', feeAmount: null };
  }
  const standardTariffs = {
    4: { feeAmount: 300, feeLabel: '₹300 / month', note: 'Matches 4-Hr Shift ₹300 Slab' },
    8: { feeAmount: 500, feeLabel: '₹500 / month', note: 'Matches 8-Hr Shift ₹500 Slab' },
    12: { feeAmount: 600, feeLabel: '₹600 / month', note: 'Matches 12-Hr Plan ₹600 Slab' },
    16: { feeAmount: 750, feeLabel: '₹750 / month', note: 'Matches Full-Day 16-Hr ₹750 Slab' },
  };
  if (standardTariffs[duration]) {
    return { valid: true, duration, ...standardTariffs[duration] };
  }
  return {
    valid: true,
    duration,
    feeAmount: null,
    feeLabel: `Custom ${duration}-Hr Tariff (Desk Confirmed)`,
    note: `Flexible ${duration}-hour slot fee adjusted as per library norms`,
  };
}

export const LIBRARY_RULES = [
  {
    id: 'general',
    num: '1',
    titleHi: 'सामान्य नियम',
    titleEn: 'General Rules',
    tone: 'navy',
    itemsHi: [
      'लाइब्रेरी में शांति बनाए रखें। मोबाइल को साइलेंट मोड में रखें।',
      'अपनी निर्धारित सीट/स्थान पर ही बैठें और उसका पालन करें।',
      'निर्धारित समय स्लॉट का पालन करें। समय पर आएं और समय पर जाएं।',
      'लाइब्रेरी की सभी संपत्ति (फर्नीचर, किताबें, बिजली बोर्ड आदि) का सुरक्षित उपयोग करें।',
      'किसी भी प्रकार का भोजन, तंबाकू, गुटखा, धूम्रपान या शराब लाना सख्त मना है।',
    ],
    itemsEn: [
      'Maintain pin-drop silence inside the reading hall. Keep mobile phones on silent mode.',
      'Sit only on your assigned/allotted cubicle seat and respect seating discipline.',
      'Follow your allotted shift or custom time slot strictly — arrive and leave on time.',
      'Handle all library property (desks, chairs, books, electrical switches) with care.',
      'Food items, tobacco, gutkha, smoking, or alcohol are strictly prohibited inside.',
    ],
  },
  {
    id: 'discipline',
    num: '2',
    titleHi: 'लड़ाई-झगड़ा एवं अनुशासन',
    titleEn: 'Discipline & Conduct',
    tone: 'crimson',
    itemsHi: [
      'लड़ाई-झगड़ा, मारपीट, धक्का-मुक्की पूरी तरह प्रतिबंधित है।',
      'गाली-गलौज, अभद्र भाषा, अपशब्द या किसी को धमकी देना सख्त मना है।',
      'किसी अन्य विद्यार्थी की सीट, सामान, किताब या निजी वस्तु को बिना अनुमति हाथ न लगाएं।',
      'किसी भी सदस्य को परेशान करना, डराना, धमकाना या अशांति फैलाना दंडनीय है।',
      'लाइब्रेरी में ऊँची आवाज में बात करना, शोर करना या दूसरों का ध्यान भंग करना मना है।',
    ],
    itemsEn: [
      'Fighting, physical altercations, or pushing is strictly prohibited on campus.',
      'Abusive language, misbehavior, or threatening any student/staff is strictly banned.',
      'Never touch another student’s seat, bag, books, or personal belongings without permission.',
      'Harassing, intimidating, or creating disturbance for any member is punishable.',
      'Loud talking, phone calls inside the hall, or distracting others is not allowed.',
    ],
  },
  {
    id: 'digital',
    num: '3',
    titleHi: 'डिजिटल संसाधन एवं इंटरनेट नियम',
    titleEn: 'Digital & Wi-Fi Policy',
    tone: 'emerald',
    itemsHi: [
      'Wi-Fi, इंटरनेट और अन्य डिजिटल संसाधनों का उपयोग केवल अध्ययन, शोध और शैक्षणिक कार्य के लिए करें।',
      'किसी भी प्रकार की अश्लील, आपत्तिजनक, गैरकानूनी या कॉपीराइट सामग्री देखना/डाउनलोड करना सख्त मना है।',
      'पासवर्ड, लॉगिन आईडी या किसी भी डिजिटल संसाधन का दुरुपयोग न करें।',
      'पेनड्राइव, हार्डडिस्क या अन्य डिवाइस का उपयोग करने से पहले स्टाफ की अनुमति लें।',
      'डिजिटल संसाधन के दुरुपयोग, वायरस फैलाने या सिस्टम को नुकसान पहुँचाने पर सख्त कार्रवाई होगी।',
    ],
    itemsEn: [
      'Use library Wi-Fi and digital resources strictly for study, mock tests & academic work.',
      'Viewing or downloading obscene, illegal, or unauthorized content is strictly forbidden.',
      'Do not misuse Wi-Fi credentials, login IDs, or shared digital systems.',
      'Take staff permission before connecting external storage devices to library terminals.',
      'Misusing digital networks or damaging systems will result in strict disciplinary action.',
    ],
  },
  {
    id: 'action',
    num: '4',
    titleHi: 'नियम तोड़ने पर कार्रवाई',
    titleEn: 'Violation Actions',
    tone: 'amber',
    itemsHi: [
      'पहली बार नियम तोड़ने पर चेतावनी दी जाएगी।',
      'बार-बार नियम तोड़ने पर सदस्यता निलंबित या रद्द की जा सकती है।',
      'लाइब्रेरी संपत्ति को नुकसान पहुँचाने पर उससे हुए नुकसान की भरपाई करनी होगी।',
      'गंभीर मामले में अभिभावक / गार्जियन को तुरंत सूचना दी जाएगी।',
      'आवश्यक होने पर संबंधित पुलिस स्टेशन और कानूनी प्राधिकरण को सूचना दी जाएगी।',
    ],
    itemsEn: [
      'A formal warning will be issued on the first minor violation.',
      'Repeated violations may lead to immediate suspension or cancellation of membership.',
      'Any damage caused to library desks, chairs, or equipment must be compensated.',
      'In serious cases, the student’s parents/guardians will be informed immediately.',
      'If required, local police authorities will be notified for legal action.',
    ],
  },
  {
    id: 'legal',
    num: '5',
    titleHi: 'भारतीय कानून के अनुसार',
    titleEn: 'Legal Compliance',
    tone: 'slate',
    itemsHi: [
      'लाइब्रेरी परिसर में किए गए किसी भी गैरकानूनी कार्य (जैसे मारपीट, धमकी, चोरी, तोड़फोड़, साइबर अपराध, अश्लील सामग्री का उपयोग आदि) पर भारतीय न्याय संहिता / भारतीय दंड संहिता, आईटी एक्ट और अन्य प्रासंगिक कानूनों के तहत सख्त कानूनी कार्रवाई की जाएगी।',
    ],
    itemsEn: [
      'Any unlawful act within the premises — including assault, threats, theft, vandalism, cybercrime, or obscene digital misuse — will face strict legal action under Indian Law (BNS/IPC), the IT Act, and applicable regulations.',
    ],
  },
  {
    id: 'notes',
    num: '6',
    titleHi: 'अन्य महत्वपूर्ण बातें',
    titleEn: 'Important Campus Notes',
    tone: 'indigo',
    itemsHi: [
      'पूरा लाइब्रेरी परिसर 24×7 HD CCTV कैमरों की निगरानी में है।',
      'स्टाफ और लाइब्रेरी इंचार्ज के निर्देशों का पालन करना सभी के लिए अनिवार्य है।',
      'लाइब्रेरी में प्रवेश करते ही आप सभी नियमों से सहमत माने जाएंगे।',
    ],
    itemsEn: [
      'The entire premises is monitored 24×7 by HD CCTV surveillance cameras.',
      'All members must cooperate with instructions from the Library In-charge & staff.',
      'Entering the library signifies acceptance of all rules & regulations.',
    ],
  },
];

export const REAL_GALLERY_PHOTOS = [
  {
    id: 'hall-main',
    src: '/images/gallery/real-hall-main.jpg',
    category: 'Reading Hall & AC',
    title: '50-Seat Main AC Reading Hall & Study Cubicles',
    caption:
      'Spacious cream wooden desks with individual switchboards, power sockets, Split AC cooling & ceiling fans for peaceful full-day study.',
    badge: 'AC + Individual Power',
  },
  {
    id: 'hall-entrance',
    src: '/images/gallery/real-hall-entrance.jpg',
    category: 'Reading Hall & AC',
    title: 'Numbered Study Rows & Clean Entry',
    caption:
      'Calm glass entrance door, numbered study bays (#14 & rows), cushioned chairs and proper fresh air exhaust ventilation.',
    badge: 'Numbered Cubicles',
  },
  {
    id: 'cctv-zone',
    src: '/images/gallery/real-hall-cctv-zone.jpg',
    category: 'CCTV & Safety',
    title: 'Pin-Drop Silence & Dome CCTV Zone',
    caption:
      '24×7 HD CCTV dome surveillance, "KEEP SILENCE" hall code, numbered seats (#31–#33) and bright shadow-free LED lighting.',
    badge: '24×7 CCTV Monitored',
  },
  {
    id: 'safety-chairs',
    src: '/images/gallery/real-hall-safety.jpg',
    category: 'CCTV & Safety',
    title: 'Fire Safety, Clear Exit & Ergonomic Seating',
    caption:
      'High-back cushioned chairs, fire extinguisher safety compliance, clear EXIT passage and continuous CCTV coverage.',
    badge: 'Safe Campus',
  },
  {
    id: 'cctv-books',
    src: '/images/gallery/real-cctv-bookshelf.jpg',
    category: 'Books & Desks',
    title: 'Live CCTV Monitor & Competitive Book Shelf',
    caption:
      'Live multi-camera CCTV monitoring screen above the wall-mounted reference bookshelf stocked with SSC Maths, GK & academic books.',
    badge: 'Books + Security',
  },
];

export const FACILITIES = [
  {
    id: 'wifi',
    title: 'High Speed Wi-Fi',
    subtitle: 'Fiber Optic Dual-Band Network',
    description:
      'Uninterrupted high-speed Wi-Fi for online SSC/BPSC/College classes, mock test portals, PDF downloads, and zero-lag video lectures.',
    highlight: 'Dual-Router Redundancy',
    metric: '150+ Mbps',
    iconName: 'Wifi',
    accent: 'from-sky-400/20 to-blue-500/5 border-sky-400/30 text-sky-300',
  },
  {
    id: 'books',
    title: 'Wide Range of Books',
    subtitle: 'Curated Reference Collection',
    description:
      'Reference shelf covering SSC Maths, General Knowledge, English, Engineering, B.A./B.Sc. guides, and standard NCERT publications.',
    highlight: '5 Core Subject Stacks',
    metric: '1,200+ Titles',
    iconName: 'BookOpen',
    accent: 'from-amber-400/20 to-yellow-500/5 border-amber-400/30 text-amber-300',
  },
  {
    id: 'quiet',
    title: 'Quiet & Comfortable Study Environment',
    subtitle: '50 Private Wooden Cubicles',
    description:
      'Ergonomic cushioned chairs, spacious private desks, bright glare-free lighting, and strict pin-drop silence — zero home or college distractions.',
    highlight: 'Zero-Distraction Zone',
    metric: '50 Quiet Seats',
    iconName: 'Armchair',
    accent: 'from-emerald-400/20 to-teal-500/5 border-emerald-400/30 text-emerald-300',
  },
  {
    id: 'digital',
    title: 'Digital Study Resources',
    subtitle: 'Individual Power at Every Seat',
    description:
      'Every desk includes a dedicated multi-plug switchboard for laptops, tablets & mobiles so you can study continuously without battery tension.',
    highlight: 'Plug-and-Study Ready',
    metric: '100% Powered Seats',
    iconName: 'Laptop',
    accent: 'from-indigo-400/20 to-violet-500/5 border-indigo-400/30 text-indigo-300',
  },
  {
    id: 'cctv',
    title: 'CCTV Surveillance',
    subtitle: '24×7 Live Monitored Hall',
    description:
      'Complete HD CCTV coverage with live display screen across the reading hall, entrance door, and seating rows so parents stay completely worry-free.',
    highlight: 'Safe for All Shifts',
    metric: '24/7 HD Recording',
    iconName: 'ShieldCheck',
    accent: 'from-rose-400/20 to-red-500/5 border-rose-400/30 text-rose-300',
  },
  {
    id: 'ac',
    title: 'AC Reading Hall',
    subtitle: 'Cool Climate + Ceiling Fans',
    description:
      'Split-AC cooling, ceiling fans, fresh exhaust airflow, purified RO drinking water, and clean washrooms built for 4 to 16-hour study marathons.',
    highlight: 'All-Season Comfort',
    metric: '22°C Optimal Cool',
    iconName: 'Snowflake',
    accent: 'from-cyan-400/20 to-sky-500/5 border-cyan-400/30 text-cyan-300',
  },
];

export const STUDY_PILLARS = [
  {
    id: 'competitive',
    title: 'Competitive Exams',
    hindiLabel: 'SSC, रेलवे, BPSC, पुलिस',
    description:
      'Dedicated silent atmosphere for nearby town & village aspirants targeting SSC CGL/CHSL/MTS, Railway RRB, Bihar Police, Daroga, BPSC & Banking.',
    tags: ['SSC CGL / CHSL / GD', 'Railway RRB / NTPC', 'Bihar Police / Daroga', 'BPSC & UPSC'],
    iconName: 'Award',
  },
  {
    id: 'academic',
    title: 'B.A. / B.Sc. & Academic',
    hindiLabel: 'कॉलेज एवं बोर्ड परीक्षा',
    description:
      'Not noisy like college corridors — calm reading hall for B.A., B.Sc., B.Com university exams, 10th/12th Boards, Polytechnic & JEE/NEET prep.',
    tags: ['B.A. / B.Sc. / B.Com', '10th & 12th Boards', 'Polytechnic / B.Tech', 'NEET / JEE Prep'],
    iconName: 'GraduationCap',
  },
  {
    id: 'online',
    title: 'Online Classes & Mock Tests',
    hindiLabel: 'ऑनलाइन क्लास एवं टेस्ट',
    description:
      'High-speed Wi-Fi and individual power sockets at every seat so village & city students can watch Khan GS, PW, SSC batches or take online mock tests.',
    tags: ['Live Video Batches', 'Online Mock Tests', 'Daily E-Newspapers', 'Individual Sockets'],
    iconName: 'Globe',
  },
  {
    id: 'disciplined',
    title: 'Flexible Slot & Discipline',
    hindiLabel: 'कस्टम टाइम स्लॉट एवं नियम',
    description:
      'Whether you come 6–10 AM, 8 AM–12 PM, 12–2 PM or full-day 6 AM–10 PM — pick a slot that fits your routine with pocket-friendly monthly fees.',
    tags: ['4 Hr / 8 Hr / 12 Hr / 16 Hr', 'Custom Time Slots', 'Strict Hall Rules', 'Pocket-Friendly Fee'],
    iconName: 'Sparkles',
  },
];

export const SUBJECT_STACKS = [
  {
    id: 'engineering',
    title: 'Engineering',
    spineColor: 'bg-[#163d6b] border-blue-400/40',
    badgeColor: 'text-sky-300 bg-sky-500/15 border-sky-400/30',
    examTargets: ['GATE / PSU', 'SSC JE', 'B.Tech Semesters', 'Bihar Polytechnic'],
    resources: [
      { title: 'Engineering Mathematics & Aptitude Bank', type: 'Reference Book', level: 'B.Tech / GATE' },
      { title: 'Core Electrical, Civil & Mechanical Handbooks', type: 'Formula Compendium', level: 'SSC JE / PSU' },
      { title: 'Polytechnic & Technical Competitive Guides', type: 'Digital + Print', level: 'Diploma / JE' },
    ],
  },
  {
    id: 'competitive-exams',
    title: 'Competitive Exams',
    spineColor: 'bg-[#991b1b] border-red-400/40',
    badgeColor: 'text-rose-300 bg-rose-500/15 border-rose-400/30',
    examTargets: ['SSC CGL / CHSL / GD', 'Bihar Police / SI', 'BPSC CCE', 'Railway RRB'],
    resources: [
      { title: 'Previous Years Solved Papers (SSC, Railway & BPSC)', type: 'Print Archive', level: 'Prelims + Mains' },
      { title: 'Reasoning & Quantitative Speed Practice Sets', type: 'Mock Workbook', level: 'Tier I & II' },
      { title: 'Indian Polity, Economy & Modern History Classics', type: 'Core Reference', level: 'PCS / SSC' },
    ],
  },
  {
    id: 'general-knowledge',
    title: 'General Knowledge',
    spineColor: 'bg-[#1f5c34] border-emerald-400/40',
    badgeColor: 'text-emerald-300 bg-emerald-500/15 border-emerald-400/30',
    examTargets: ['Bihar Special GK', 'Lucent / NCERT', 'Current Affairs', 'Static GK'],
    resources: [
      { title: 'Bihar Special History, Geography & Economy', type: 'State Focus', level: 'BPSC / BSSC' },
      { title: 'NCERT Summary Compendium (Class VI – XII)', type: 'Foundation Shelf', level: 'All Exams' },
      { title: 'Monthly Current Affairs Magazines & Daily E-Digest', type: 'Updated Monthly', level: 'Live Desk' },
    ],
  },
  {
    id: 'mathematics',
    title: 'Mathematics',
    spineColor: 'bg-[#4c246e] border-purple-400/40',
    badgeColor: 'text-purple-300 bg-purple-500/15 border-purple-400/30',
    examTargets: ['SSC Maths', 'Arithmetic', 'Advance Maths', 'B.Sc. / JEE'],
    resources: [
      { title: 'SSC Advance & Arithmetic Maths Concept Books', type: 'Concept + Tricks', level: 'SSC / CDS' },
      { title: 'Fast-Track Calculation & Data Interpretation', type: 'Speed Drills', level: 'Banking / RRB' },
      { title: 'Class XI–XII, B.Sc. & JEE Objective Problem Sets', type: 'Academic Shelf', level: 'College / Boards' },
    ],
  },
  {
    id: 'english',
    title: 'English',
    spineColor: 'bg-[#262b34] border-slate-400/40',
    badgeColor: 'text-amber-300 bg-amber-500/15 border-amber-400/30',
    examTargets: ['Grammar Rules', 'Vocab & Idioms', 'Comprehension', 'B.A. / Mains'],
    resources: [
      { title: 'Competitive English Grammar & Error Detection', type: 'Core Text', level: 'SSC / Banking' },
      { title: 'Editorial Vocabulary & Daily Newspaper Reader', type: 'Digital + Print', level: 'Cloze & RC' },
      { title: 'Essay, Precis & Descriptive Writing Guide', type: 'Writing Lab', level: 'UPSC / BPSC' },
    ],
  },
];

export const FLOOR_ZONES = [
  {
    id: 'ac-silent',
    name: 'Zone A — Deep Focus & Girls-Friendly Silent Row (Seats #01 – #17)',
    description:
      'Zero-talk B.A./B.Sc., BPSC & reserved Girls Dedicated Zone cubicles with quiet dividers.',
    seatsCount: 17,
  },
  {
    id: 'digital-hub',
    name: 'Zone B — Digital & Laptop Power Row (Seats #18 – #34)',
    description: 'Spacious desks with individual multi-plug switchboards and strong Wi-Fi signal.',
    seatsCount: 17,
  },
  {
    id: 'window-comfort',
    name: 'Zone C — Executive Reserved Cubicles (Seats #35 – #50)',
    description: 'Corner & long-shift private study bays ideal for 12-hour & 16-hour members.',
    seatsCount: 16,
  },
];

// Exact 50 seats (RDL-01 to RDL-50) matching the physical hall setup
export const INITIAL_SEATS = Array.from({ length: 50 }, (_, index) => {
  const num = index + 1;
  const zoneId =
    num <= 17 ? 'ac-silent' : num <= 34 ? 'digital-hub' : 'window-comfort';
  const occupiedIndices = new Set([
    2, 3, 5, 7, 9, 11, 14, 15, 19, 21, 24, 26, 28, 30, 32, 35, 38, 40, 42, 45, 47, 49,
  ]);
  const reservedIndices = new Set([4, 12, 22, 36, 44]);
  let status = 'available';
  if (occupiedIndices.has(num)) status = 'occupied';
  else if (reservedIndices.has(num)) status = 'reserved';

  return {
    id: `RDL-${String(num).padStart(2, '0')}`,
    number: num,
    zoneId,
    status,
    features: [
      'Individual Power Board',
      'AC + Ceiling Fan',
      zoneId === 'digital-hub' ? 'Gigabit Wi-Fi Boost' : 'Quiet Partition',
      zoneId === 'window-comfort' ? '12/16 Hr Ready' : 'Cushioned Chair',
    ],
  };
});

export const TESTIMONIALS = [
  {
    name: 'Priya Kumari',
    category: 'Girls Zone',
    target: 'B.Sc. Student & Bihar SI Prep • Koli Chok',
    shift: '4 Hr Morning (₹300)',
    quote:
      'College aur ghar ke shor se door yahan Girls Dedicated Zone bahut safe aur peaceful hai. 24×7 CCTV surveillance ke karan parents bhi bilkul worry-free rehte hain.',
    rating: 5,
  },
  {
    name: 'Aman Kumar',
    category: 'SSC & Railway',
    target: 'SSC CGL & Railway Aspirant • Laxmipur',
    shift: '8 Hr Plan (₹500)',
    quote:
      'Ghar aur gaon se aakar bina shor ke padhne ke liye isse acchi jagah Begusarai mein nahi hai. ₹500 mein 8 ghante AC hall, power socket aur Wi-Fi mil jata hai.',
    rating: 5,
  },
  {
    name: 'Anjali Bharti',
    category: 'Girls Zone',
    target: 'SSC CHSL & Banking • Matihani',
    shift: '8 Hr Plan (₹500)',
    quote:
      'Gaon se roz aakar padhne wali ladkiyon ke liye alag aur safe seating zone sabse badi suvidha hai. Clean lighting, RO water aur strict silence yahan roj aane ki wajah hai.',
    rating: 5,
  },
  {
    name: 'Raushan Raj',
    category: 'BPSC & College',
    target: 'B.A. + BPSC Foundation • Begusarai',
    shift: '16 Hr Topper Plan (₹750)',
    quote:
      'Sabse badi baat hai custom timing aur strict discipline rules. Koi halla nahi, har seat par charging board hai aur need ho toh timing shift bhi adjust ho jati hai.',
    rating: 5,
  },
  {
    name: 'Neha Kumari',
    category: 'Girls Zone',
    target: 'NEET & Class 12th Boards • Suhird Nagar',
    shift: '12 Hr Plan (₹600)',
    quote:
      'Biology aur Physics ki 12 ghante continuous revision ke liye AC hall aur Girls Dedicated Zone best hai. Har desk par switchboard hone se online lecture kabhi nahi rukta.',
    rating: 5,
  },
  {
    name: 'Vikash Kumar',
    category: 'SSC & Railway',
    target: 'Railway ALP & Technician • Barauni',
    shift: '12 Hr Plan (₹600)',
    quote:
      'Mock test dene ke liye 150+ Mbps Wi-Fi bahut smooth chalta hai. Summer heat mein Split AC aur ceiling fans ke saath 12 ghante kab nikal jate hain pata hi nahi chalta.',
    rating: 5,
  },
  {
    name: 'Khushboo Sinha',
    category: 'Girls Zone',
    target: 'B.A. Honours + Daroga Prep • Bishanpur',
    shift: 'Custom 8–12 AM (₹300)',
    quote:
      'College timings ke baad mujhe 8 AM se 12 PM ka custom slot chahiye tha — desk par turant mil gaya. Dedicated Girls Row mein padosi seats ka bilkul disturbance nahi hota.',
    rating: 5,
  },
  {
    name: 'Saurabh Yadav',
    category: 'SSC & Railway',
    target: 'SSC GD & Bihar Police • Singhaul',
    shift: '4 Hr Evening (₹300)',
    quote:
      'Sirf ₹300 monthly mein itna clean aur disciplined campus Begusarai mein milna mushkil hai. Yahan ke rules aur quiet atmosphere se daily revision 2x fast ho gayi.',
    rating: 5,
  },
  {
    name: 'Pooja Singh',
    category: 'Girls Zone',
    target: 'BPSC TRE Teacher Aspirant • Harakh',
    shift: '16 Hr Full-Day (₹750)',
    quote:
      'Subah 6 se raat 10 baje tak full-day padhai karti hoon. Live CCTV monitoring, polite staff aur Girls Zone ke quiet cubicles ne preparation ka confidence badha diya.',
    rating: 5,
  },
  {
    name: 'Nitish Kumar Sharma',
    category: 'SSC & Railway',
    target: 'Polytechnic & SSC JE • Harpur',
    shift: '8 Hr Plan (₹500)',
    quote:
      'Engineering aur Maths ke reference books shelf par easily mil jate hain. Cushioned high-back chair ki wajah se 8 ghante baithne mein back pain nahi hota.',
    rating: 5,
  },
  {
    name: 'Ritik Ranjan',
    category: 'BPSC & College',
    target: 'B.Com & Competitive Prep • Koli Chok',
    shift: 'Custom 12–4 PM (₹300)',
    quote:
      'IDBI Bank ke upar location hone se aana-jaana bahut easy hai. QR scan se monthly fee jama ho jati hai aur har cubicle mein alag charging socket laga hai.',
    rating: 5,
  },
  {
    name: 'Md. Arman Alam',
    category: 'BPSC & College',
    target: 'BPSC CCE Prelims • Lakhminia',
    shift: '12 Hr Plan (₹600)',
    quote:
      'Power cut mein bhi inverter-DG backup se light aur Wi-Fi chalta rehta hai. Fire extinguisher, emergency exit aur serious topper peers yahan ka sabse bada plus point hai.',
    rating: 5,
  },
];

export const FAQS = [
  {
    q: 'What are the monthly fees for 4, 8, 12, and 16 Hour shifts?',
    a: '4 Hour shifts are ₹300/month across all slots (6–10 AM, 10–2 PM, 2–6 PM, 6–10 PM). 8 Hour shift is ₹500/month, 12 Hour plan is ₹600/month, and the Full-Day 16 Hour plan (6 AM–10 PM) is ₹750/month.',
  },
  {
    q: 'Is there a dedicated and safe seating zone for girl students?',
    a: 'Yes! Ritesh Digital Library provides a dedicated, peaceful Girls Study Zone with reserved cubicles, 24×7 HD CCTV monitoring, bright LED lighting, strict entry & conduct rules, and direct parent/coordinator helpline support (+91 90314 64838 / 73218 90516).',
  },
  {
    q: 'Can I request a custom timing slot like 8 AM–12 PM or 12 PM–2 PM?',
    a: 'Yes! Alongside our standard batches, nearby village & B.A./B.Sc./SSC students can pick a Custom Time Slot using our Slot Builder — fees are fairly adjusted based on your chosen hours and seat availability.',
  },
  {
    q: 'How many total seats are there and is every seat equipped with charging?',
    a: 'Ritesh Digital Library has a spacious 50-seat quiet reading hall (RDL-01 to RDL-50). Every single cubicle has its own switchboard & power socket, cushioned chair, AC cooling, and high-speed Wi-Fi.',
  },
  {
    q: 'Where is the library located and how is safety managed?',
    a: 'We are at 1st Floor, Above IDBI Bank (IDBI Bank के ऊपर), Koli Chok, Laxmipur, Begusarai, Bihar. The entire campus is under 24×7 HD CCTV surveillance with live monitoring, fire extinguisher compliance, emergency exit, and strict discipline rules.',
  },
  {
    q: 'What documents are needed for Admission?',
    a: 'Simply submit our online Admission / Trial Form (which sends all your filled details straight to our WhatsApp 9031464838) or visit the desk with 1 recent passport-size photo and an ID proof copy (Aadhar Card or Student ID).',
  },
];
