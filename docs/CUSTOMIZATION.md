# Customizing the Coastal Romance invitation

All example people and venue names are fictional.

## 1. Edit wedding details

Open `lib/wedding.ts`. Customize names, date labels, `dateISO`, ceremony and reception times, venue name, address and the Google Maps directions URL. The clock uses the ISO date with numeric timezone offset, for example `+08:00` for Bali.

## 2. Replace demo images

Replace `wedding.images.hero`, `ceremony`, `gallery`, `venue`, and `closing` with client-approved image URLs. If you use additional remote hosts, add them to `next.config.ts` `images.remotePatterns`.

Keep wedding photography diverse in framing: a quiet ocean hero, a ceremony-wide landscape, two close portraits, and one location image. Avoid excessively heavy images.

## 3. Edit wording

The invitation paragraphs are in `lib/wedding.ts`. Headings and section labels are inside `components/CoastalExperience.tsx`. Keep the design's generous spacing and avoid adding long paragraphs to the hero.

## 4. Change palette

The main colors are CSS variables at the beginning of `app/globals.css`: `--pearl`, `--paper`, `--sand`, `--peach`, `--gold`, `--teal`, and `--teal-soft`.

## 5. Update sharing information

For every real couple, change `title`, `description` and `openGraph` in `app/layout.tsx`. Use the correct preview photo and description.

## 6. Final checks

- Check mobile layout at 320, 375, 390 and 430 px, then tablet/desktop.
- Test every gallery image and close button.
- Test map directions against the correct location.
- Download the .ics and import it into a calendar.
- Verify date, time and timezone.
- Check prefers-reduced-motion, touch scrolling and keyboard interaction.
- Confirm image usage permission and accessibility alt text.
