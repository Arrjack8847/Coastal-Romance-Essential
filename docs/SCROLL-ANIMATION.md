# JN-W02 — Love Beneath the Waves

Mobile-first cinematic sequence: **Sunset → Dive → Underwater Invitation → Resurface → Celebration**.

## Chapters

| Chapter | Scrolling | Visual treatment |
| --- | --- | --- |
| 01 Sunset dive | Pinned + GSAP scrub | Sunset and ocean approach; realistic foam line rises; underwater photograph and blue grading move above the surface; bubbles and light rays emerge |
| 02 Invitation | Natural scroll, no pin | Centered editable ivory letter, legible on a deep-teal ocean backdrop; animated ambient particles |
| 03 Resurface | Pinned + GSAP scrub | Depth recedes; golden sky / wedding ceremony image moves downward across the camera as the waterline descends; title reveals |
| 04 Celebration | Natural scroll | Date and ceremony / reception information on warm ivory |
| 05-07 Existing sections | Natural scroll | Gallery, destination, and closing remain the same |

The two cinematic chapters each use a stable *pinned viewport* and animate only its descendants. Backscroll is fully reversible. The invitation is not pinned, and guests may pause to read.

Approximate additional scroll distance: **1.55 viewports for the dive and 1.1 for resurfacing on mobile**, **1.85 and 1.3 on desktop**. Animations use transform/opacity and GSAP ScrollTrigger; there is no scroll-jacking or looping video.

## Files

- `components/CoastalHero.tsx`: sunset and descent
- `components/OceanAtmosphere.tsx`: reusable deterministic bubbles, underwater beams, and waterline SVG
- `components/UnderwaterInvitation.tsx`: content and editable HTML letter
- `components/ResurfaceScene.tsx`: underwater ascent and ceremony reveal
- `components/CoastalExperience.tsx`: remaining sections and page orchestration
- `app/globals.css`: all responsive styles
- `lib/wedding.ts`: replaceable client details and images, including `images.underwater`

## Review

```powershell
cd "D:\my project\Myanmar hesitage\Coastal-Romance-Essential"
git pull origin main
npm install
npm run dev
```

Use http://localhost:3000 on your laptop, or your laptop's actual LAN IPv4 address followed by `:3000` on a phone sharing the same Wi-Fi network.

Test 320px, 390px, 430px, desktop; scroll slowly; reverse scroll; test tap/keyboard on the gallery; check Safari on iOS and Chrome on Android. `prefers-reduced-motion: reduce` disables both pinned chapters and continuous particle motion.

## Still to refine

The underwater scene currently uses free-stock Unsplash photography combined with SVG and CSS depth layers. It is a functioning prototype, **not a physically simulated 3D ocean**. Replace demo images with art-directed transparent or layered visual assets to increase realism. Test performance and scroll-pinning on actual mobile hardware.

Photo reference: https://unsplash.com/photos/the-sun-is-shining-over-the-ocean-water-LirxfjhcU08
Sunset reference: https://unsplash.com/photos/the-sun-is-setting-over-the-ocean-on-the-beach-YpiC8yGGZKY
