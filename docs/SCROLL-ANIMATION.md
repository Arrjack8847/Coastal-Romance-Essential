# JN-W02 Golden Hour — Sticky Hero Animation

The first section is a single pinned scene driven by one GSAP ScrollTrigger timeline. The other five sections are unchanged.

## Storyboard

| Scroll progress | Visual state |
| --- | --- |
| 0–20% | Full editorial names, ocean glow, gentle independent wave motion |
| 20–50% | Names rise and fade while distant ocean approaches slowly |
| 50–70% | Midground / foreground water expands with faster depth movement |
| 70–88% | Ivory wave rises from the shoreline, hiding the sea |
| 88–100% | An invitation teaser appears on the full ivory frame |
| After pin release | Normal scrolling continues into the full invitation letter |

## Architecture

- `components/CoastalHero.tsx`: layered hero JSX, GSAP entrance and scroll timeline.
- `app/globals.css`: compositing and responsive styles.
- `lib/wedding.ts`: editable names/date/hero photo; actual couple details must replace demo content.
- Pin target: `.coast-viewport`, separate from transforms applied to the moving layers.
- Scroll distances: approximately 1.4 extra screen heights on mobile and 1.7 on desktop, responsive to viewport height.
- No scroll hijacking or forced wheel listener. Standard browser scrolling and anchors work.
- Media query `prefers-reduced-motion: reduce` skips the pinned animation entirely, showing a readable standard hero and normal page flow.
- Main animation uses transform/opacity only; ambient SVG motion animates the inner SVG rather than the pinned layer.
- The final wipe matches the letter section background `#FAF4E9`, creating a seamless color transition.

## Local preview

```powershell
git pull origin main
npm install
npm run dev
```

Open http://localhost:3000 on laptop. For mobile use http://YOUR-LAPTOP-IP:3000 with phone and laptop connected to the same Wi-Fi. Test especially Safari iOS, Chrome Android, touch scrolling and landscape orientation. A successful static build cannot verify the visual results on actual devices.

## Optional next refinement

Replace the demo ocean photograph with art-directed coastal imagery suited to the layered masks. All foreground SVG silhouettes and sky gradients are coded separately and can later be replaced with image assets without rewriting ScrollTrigger.
