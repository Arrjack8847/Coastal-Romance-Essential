# JN-W02 — Coastal Romance Essential

A mobile-first, cinematic yet lightweight, six-section digital wedding invitation by **JackNex Studio**.

## Golden Hour experience

1. The Endless Horizon — animated layered sunset/ocean hero.
2. A Love as Endless as the Sea — editorial invitation letter.
3. The Celebration — date and ceremony/reception details.
4. Moments by the Sea — asymmetric tap-to-expand gallery.
5. Where We'll Say I Do — venue, address and directions.
6. Forever Begins Here — closing horizon, countdown and add-to-calendar.

## Stack

Next.js App Router · React 19 · TypeScript · Tailwind CSS · GSAP ScrollTrigger · Lucide.

## Start

```bash
npm install
npm run dev
```

Open http://localhost:3000 or, on another device connected to the same Wi-Fi, http://YOUR-LAPTOP-LAN-IP:3000.

```bash
npm run typecheck
npm run build
```

## Customize

Edit **lib/wedding.ts** for names, date, times, location, directions, letter and image URLs. The included people and venue are fictional **demo content**, not a real invitation.

Replace demo photography with photos you have permission to publish, and update Open Graph metadata in **app/layout.tsx**. Stock photography currently uses Unsplash CDN URLs; see [Unsplash License](https://unsplash.com/license).

## Motion and accessibility

- ScrollTrigger reveals and very light parallax (no scroll-jacking).
- CSS wave layers use transform-only movement.
- Reduced-motion preference disables decorative movement.
- Keyboard-accessible gallery lightbox; Escape and arrow-key controls.
- Full-viewport mobile layout with safe-area padding.
- Native scroll, responsive images, focus styles and semantic sections.

## Package boundary

Essential template only: no guest database, stored RSVP form, personalized unique URLs, protected content, custom cinematic intro or premium interactive features. Countdown + add-to-calendar are included as demo standard add-ons.

Built for JackNex Studio · JN-W02.
