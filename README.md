# ⚡️ IRON & FLOW GYM · SHOREDITCH, LONDON

> London's most results-driven industrial CrossFit box. Where raw athletic strength meets high-performance flow. Engineered for elite performance, pure human progression, and zero shortcuts.

---

## 🎨 Premium Visual Redesign & Core Philosophy

This platform has been meticulously overhauled to mirror a **streetwear-inspired, high-contrast, premium dark mode aesthetic**. Obsidian glass elements, sharp angles, smooth micro-animations, and striking HSL crimson gradients create a state-of-the-art cinematic web experience.

---

## ✨ Features Checklist

- **Cinematic Homepage Hero Banner:**
  - Dynamic slideshow with high-fidelity, custom-tailored local athlete portrait assets.
  - Smooth Ken Burns zooming slide transitions.
  - Interactive, responsive floating widgets (Spotlight live-class indicators, real-time tribe floor counters).
  - Contextual secondary CTA buttons (e.g. *View Schedule* uses a `Calendar` icon, *Meet Coaches* uses a `Users` icon).
- **Premium Coaches & AI-Generated Portraits:**
  - Dedicated `/coaches` path with legacy fallback routing.
  - Responsive layout stacking for touch/mobile devices: hover bio sheet details gracefully move under specialties on mobile devices (`md:hidden`) to guarantee full touch-screen accessibility.
  - Six custom-generated photorealistic coach avatars mapped directly inside the gym's database structure.
- **Touch-Friendly Gallery Slider:**
  - Fully responsive, hardware-accelerated, touch-enabled Before/After comparison drag sliders (`handleTouchMove`, `touchend`) to visual progress monitoring.
- **Elite Interactive Class Schedules:**
  - Modern day-filter panels.
  - SVG intensity output circular dials showing metric levels per class.
- **Interactive Pricing & Estimators:**
  - High-contrast membership cards mapping features and priorities across Starter, Warrior, and Elite tiers.
  - Frictional slider calculators (BMI, etc.) for client diagnostics.
- **Global Route Transitions:**
  - Full route transition fades via Framer Motion.
  - Unified scroll-to-top routing resets on all transitions.
- **Custom Brand Assets:**
  - Unique vector favicon and brand monogram featuring HSL gradient backplates.
- **Advanced Ad-Block Network Clearance:**
  - Avoids strict extension filter blocks (`net::ERR_BLOCKED_BY_CLIENT`) by renaming legal pages securely (`SecurityNotice`, `TrackerGuide`) while maintaining elegant, readable browser URLs (`/privacy`, `/cookies`).

---

## 🛠 Tech Stack & Core Dependencies

*   **Framework Core:** React 19 + Vite (Next-generation compilation)
*   **Routing & Transitions:** React Router DOM v7 + Framer Motion (Hardware accelerated motion)
*   **Styling & Design System:** Tailwind CSS (Strict obsidian color palettes, custom responsive grid boundaries)
*   **Iconography:** Lucide Icons + Hand-crafted custom inline SVGs (Ensures 100% build compatibility and zero dependency version issues)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v18.0 or later) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Robin239105/Iron-and-Flow.git
   cd "Iron and Flow Gym"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch local development server:
   ```bash
   npm run dev
   ```

4. Build production bundle locally:
   ```bash
   npm run build
   ```

5. Verify lint compliance:
   ```bash
   npm run lint
   ```

---

## ☁️ Vercel Deployment Guide

This project is 100% aligned with Vercel's zero-config requirements for Vite React environments:

1. **Import Project:** Connect your Vercel account to GitHub and import `Robin239105/Iron-and-Flow`.
2. **Build Settings:** Vercel will automatically detect the Vite template:
   * **Framework Preset:** Vite
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
3. **Deploy:** Click **Deploy**. Your site will compile and launch globally in under 30 seconds!

---

## 🛡 License & Legal

© 2026 Iron & Flow Gym Ltd. All rights reserved. Registered in England & Wales.
For full details, see the active legal directories:
*   [Privacy Notice](https://ironandflow.co.uk/privacy)
*   [Terms of Service](https://ironandflow.co.uk/terms)
*   [Cookie Guidelines](https://ironandflow.co.uk/cookies)
