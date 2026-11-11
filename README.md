# Ritesh Digital Library — Official Web Application

An ultra-rich, responsive React + Vite + Tailwind CSS website crafted for **Ritesh Digital Library**, Begusarai, Bihar.

## Highlights
- **Official Brand Identity**: Crisp vector crest emblem (`Focus • Discipline • Success`), motto banners (`Study • Focus • Grow` / `Better Studies • Brighter Future`), and quote (`"A Library is not just a place, it's a way to a Better Future."`).
- **Girls Student Dedicated Study Zone (`#girls-zone`)**: Safe, reserved quiet seating cluster for girl aspirants (`छात्राओं के लिए अलग एवं सुरक्षित स्टडी ज़ोन`) with 24×7 HD CCTV monitoring, bright LED lighting, and pre-selectable preference in the seat planner and admission form.
- **Official Fees Structure & Custom Time Slot Builder**: Standard plans (`4 Hr ₹300`, `8 Hr ₹500`, `12 Hr ₹600`, `16 Hr ₹750`) plus an interactive custom time-slot builder (`8 AM–12 PM`, `12 PM–2 PM`, etc.) for local college (B.A./B.Sc.) and competitive exam students.
- **Interactive 50-Seat Reading Hall Floor Plan**: Live seat selection (`RDL-01` to `RDL-50`) across 3 study zones synced directly with the Admission Form.
- **Official Digital Admission Form & Full WhatsApp Dispatch**: Captures all student details, timing slot, seat number, Girls Zone preference, and declaration — automatically opening WhatsApp to `+91 9031464838` with the complete filled form and generating a printable Slip with Student & In-charge Signature boxes.
- **Real Campus Gallery Hub & 12 Student Testimonials**: Authentic reading hall photos with lightbox preview, category filter tabs, and 12 aspirant reviews across `Girls Zone`, `SSC & Railway`, and `BPSC & College`.
- **Bilingual Library Rules & Verified Contact Hub**: Full Hindi & English rules charter (`नियम एवं विनियम`), [Google Maps Pin](https://maps.app.goo.gl/MoygC2Gcs9otRd1Z9?g_st=aw), [Instagram (@riteshdigita_library)](https://www.instagram.com/riteshdigita_library?utm_source=qr&vrfl=MTZ0cHJra2c4dHVhOA==), and helpline (`9031464838`, `7321890516`).

## Quick Start
```bash
npm install
npm run dev
```

## Deploy Live on Vercel
This project already includes [`vercel.json`](./vercel.json) configured for Vite:
1. Push the folder (without `node_modules` or `dist`) to GitHub / upload via Vercel CLI (`npx vercel --prod`).
2. Or import the ZIP/Git repo at [vercel.com/new](https://vercel.com/new) — **Framework Preset: Vite**, **Build Command: `npm run build`**, **Output Directory: `dist`**.

## Production Build
```bash
npm run build
```

## Customizing Details
All phone numbers, fees, custom time presets, rules, seat statuses, book catalog entries, and FAQs can be updated cleanly in [`src/data/libraryData.js`](./src/data/libraryData.js).
