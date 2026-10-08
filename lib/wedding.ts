/**
 * JN-W02 Coastal Romance Essential
 * All client-facing information is configured here.
 *
 * IMPORTANT: The people, date, venue and address below are DEMO ONLY.
 * Replace with confirmed client details and photographs before publishing.
 */

const image = (id: string, width = 1400) =>
  "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=" + width + "&q=84";

export const wedding = {
  personOne: "Aria",
  personTwo: "Noah",
  shortNames: "Aria & Noah",
  dateLabel: "24 October 2027",
  day: "24",
  month: "October",
  year: "2027",
  weekday: "Sunday",
  dateISO: "2027-10-24T16:30:00+08:00",
  timeZone: "Asia/Makassar",
  locationLine: "Bali · Indonesia",
  ceremonyTime: "4:30 PM",
  receptionTime: "6:00 PM",
  venueName: "The Oceanview Villa",
  venueArea: "Nusa Dua, Bali, Indonesia",
  venueAddress: "Nusa Dua, Bali, Indonesia",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Nusa+Dua+Bali+Indonesia",
  invitation: [
    "With hearts full of love, we invite you to celebrate the beginning of our forever.",
    "Join us where the ocean meets the sky, surrounded by the people who make our story beautiful.",
  ],
  images: {
    hero: image("photo-1580960551660-a700d2c95639", 2200),
    ceremony: image("photo-1519741497674-611481863552", 1700),
    gallery: [
      {
        src: image("photo-1597427681188-3ef80f2631ff", 1100),
        alt: "Couple walking barefoot along a quiet shoreline",
        label: "01 · The beginning",
      },
      {
        src: image("photo-1511285560929-80b456fea0bc", 1100),
        alt: "Romantic wedding celebration",
        label: "02 · A little magic",
      },
      {
        src: image("photo-1507525428034-b723cf961d3e", 1500),
        alt: "A tranquil beach and blue ocean",
        label: "03 · Our favorite place",
      },
      {
        src: image("photo-1537633552985-df8429e8048b", 1100),
        alt: "Intimate wedding portrait",
        label: "04 · Always us",
      },
    ],
    venue: image("photo-1519046904884-53103b34b206", 1800),
    closing: image("photo-1580960551660-a700d2c95639", 1800),
  },
} as const;
