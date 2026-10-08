# JN-W02 — Coastal Romance Essential

**Love Beneath the Waves** — a mobile-first Golden Hour wedding invitation experience, crafted for JackNex Studio.

## Experience

Guests arrive at a golden sunset beach, **scroll into the ocean**, find a floating underwater invitation, then **resurface into a wedding ceremony**. Native scrolling continues into the gallery, venue, and closing message.

- **Scene 01 · Golden Hour Dive** — pinned layered ocean, moving waterline, reversible GSAP scrub.
- **Scene 02 · Underwater Invitation** — real editable HTML wedding details, natural scrolling, sunbeams and bubbles.
- **Scene 03 · Resurface to the Celebration** — second pinned wave passage, then date, ceremony, and reception details.
- **Scene 04 · Moments by the Sea** — asymmetric interactive photo gallery.
- **Scene 05 · Destination** — venue details and directions.
- **Scene 06 · Forever Begins Here** — closing golden hour, countdown, and calendar download.

Built with Next.js App Router, React 19, TypeScript, Tailwind and GSAP.

## Quick start

```powershell
git clone https://github.com/Arrjack8847/Coastal-Romance-Essential.git
cd Coastal-Romance-Essential
npm install
npm run dev
```

Laptop: http://localhost:3000

Mobile on same Wi-Fi: http://YOUR-LAPTOP-LAN-IP:3000

## Customize

All demo names, dates, venue and image URLs are in `lib/wedding.ts`. Update Open Graph metadata in `app/layout.tsx` for each client. The sample names, wedding and venue are **not real**.

Visual photographs currently use remote Unsplash URLs as temporary imagery; replace with client-approved or bespoke project assets before selling/publishing. See [Unsplash License](https://unsplash.com/license).

See `docs/CUSTOMIZATION.md` and `docs/SCROLL-ANIMATION.md`.

## Accessibility and performance

Two separate scroll-triggered pinned scenes, with a natural-scroll invitation in the middle. Independent depth layers use transforms and opacity. Bubbles use deterministic CSS keyframes, not per-frame React rendering. Respect `prefers-reduced-motion` and provide a direct anchor past the opening animation.

Do real-device testing before production launch, particularly iOS Safari and Android Chrome. The screenshot/scroll visuals are not proven by a successful build alone.

## Package

Essential template only: no personalized guest URL, password protection, stored RSVP, or additional premium interactive features.

Made with love · JackNex Studio.
