import type { Metadata, Viewport } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aria & Noah | A Celebration by the Sea",
  description:
    "Together, where the sky meets the sea. You are warmly invited to a golden-hour wedding celebration in Bali.",
  openGraph: {
    title: "Aria & Noah — A Celebration by the Sea",
    description: "Where love meets the horizon. Join us for our wedding celebration.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1580960551660-a700d2c95639?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Golden hour ocean waves",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF4E9",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
