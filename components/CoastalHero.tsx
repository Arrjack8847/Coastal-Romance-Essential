"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import { wedding } from "@/lib/wedding";

/**
 * JN-W02 scroll chapter.
 *
 * Keep the pin on the viewport element, not the layers GSAP transforms.
 * This preserves a stable scroll spacer while individual planes move.
 * The ivory reveal matches Section 02's background to avoid a hard cut.
 */
export default function CoastalHero() {
  const chapter = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chapter.current || !viewport.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        // Set transition elements before building the timeline.
        gsap.set(".coast-ivory-wipe", { yPercent: 110 });
        gsap.set(".coast-wipe-message", { autoAlpha: 0, y: 22 });
        gsap.set(".coast-progress-fill", { scaleY: 0, transformOrigin: "top center" });

        const entrance = gsap.timeline({ delay: 0.12, defaults: { ease: "power2.out" } });
        entrance
          .from(".coast-eyebrow", { autoAlpha: 0, y: 16, duration: 0.7 })
          .from(".coast-heading > span", { autoAlpha: 0, y: 36, duration: 1.1, stagger: 0.13 }, "-=0.32")
          .from(".coast-vow-line", { autoAlpha: 0, y: 20, duration: 0.72 }, "-=0.52")
          .from(".coast-event-line", { autoAlpha: 0, y: 16, duration: 0.72 }, "-=0.42")
          .from(".coast-scroll-hint", { autoAlpha: 0, y: 12, duration: 0.65 }, "-=0.15");

        // One timeline = one scroll position. No independent competing scroll triggers.
        const motion = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: chapter.current,
            pin: viewport.current,
            start: "top top",
            end: () => "+=" + Math.round(window.innerHeight * (window.innerWidth < 768 ? 1.4 : 1.7)),
            scrub: 0.7,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            refreshPriority: 2,
          },
        });

        motion
          .to(".coast-cloud-one", { xPercent: -9, yPercent: -8, duration: 0.75 }, 0)
          .to(".coast-cloud-two", { xPercent: 12, yPercent: -4, duration: 0.86 }, 0)
          .to(".coast-sun", { yPercent: 12, xPercent: 8, scale: 1.28, duration: 0.88 }, 0)
          .to(".coast-ocean-far", { yPercent: -5, scale: 1.12, duration: 0.95 }, 0)
          .to(".coast-ocean-middle", { yPercent: -20, scale: 1.14, duration: 0.95 }, 0)
          .to(".coast-ocean-near", { yPercent: -45, scale: 1.22, duration: 0.95 }, 0)
          .to(".coast-water-shimmer", { yPercent: -30, opacity: 0.9, scale: 1.1, duration: 0.85 }, 0)
          .to(".coast-grass-left", { yPercent: 31, rotation: -4, autoAlpha: 0, duration: 0.7 }, 0.17)
          .to(".coast-grass-right", { yPercent: 28, rotation: 5, autoAlpha: 0, duration: 0.7 }, 0.17)
          .to(".coast-copy", { yPercent: -35, scale: 0.91, autoAlpha: 0, duration: 0.34 }, 0.17)
          .to(".coast-scroll-hint", { y: 18, autoAlpha: 0, duration: 0.16 }, 0.04)
          .to(".coast-ivory-wipe", { yPercent: 0, duration: 0.34 }, 0.64)
          .to(".coast-wipe-message", { y: 0, autoAlpha: 1, duration: 0.16 }, 0.82)
          .to(".coast-progress-fill", { scaleY: 1, duration: 1 }, 0);
      }, chapter);
      return () => context.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={chapter} className="coast-chapter" aria-labelledby="hero-title">
      <div ref={viewport} className="coast-viewport">
        <div className="coast-sky" aria-hidden="true">
          <div className="coast-cloud coast-cloud-one" />
          <div className="coast-cloud coast-cloud-two" />
        </div>
        <div className="coast-sun" aria-hidden="true" />
        <div className="coast-ocean-far" aria-hidden="true">
          <Image
            src={wedding.images.hero}
            alt=""
            fill
            sizes="100vw"
            priority
            unoptimized
            className="coast-ocean-photo"
          />
        </div>
        <div className="coast-horizon-light" aria-hidden="true" />
        <div className="coast-ocean-middle" aria-hidden="true">
          <svg viewBox="0 0 1440 380" preserveAspectRatio="none">
            <defs>
              <linearGradient id="middleSea" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#80a7a6" stopOpacity=".20" />
                <stop offset=".68" stopColor="#6f9d9f" stopOpacity=".61" />
                <stop offset="1" stopColor="#86ada7" stopOpacity=".70" />
              </linearGradient>
            </defs>
            <path d="M0 125C157 88 282 140 445 125s313-47 485-13c187 36 353 21 510-5V380H0Z" fill="url(#middleSea)" />
            <path d="M0 139c165-34 284 24 447 0 185-27 337-35 480-7 171 33 367 16 513-12" fill="none" stroke="#fff6df" strokeWidth="3" strokeOpacity=".43" />
            <path d="M0 214c192-21 298 17 478-5s321-17 458 0c183 23 336 8 504-7" fill="none" stroke="#fcebd5" strokeWidth="2" strokeOpacity=".22" />
          </svg>
        </div>
        <div className="coast-water-shimmer" aria-hidden="true" />
        <div className="coast-ocean-near" aria-hidden="true">
          <svg viewBox="0 0 1440 360" preserveAspectRatio="none">
            <defs>
              <linearGradient id="nearSea" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#aec5ba" stopOpacity=".15" />
                <stop offset=".52" stopColor="#afc6b9" stopOpacity=".72" />
                <stop offset="1" stopColor="#e8d6c0" />
              </linearGradient>
            </defs>
            <path d="M0 146c166-46 326-4 491-13 168-10 328-50 478-18 181 37 307 19 471-9V360H0Z" fill="url(#nearSea)" />
            <path d="M0 148c166-46 326-4 491-13 168-10 328-50 478-18 181 37 307 19 471-9" stroke="#fff8ea" strokeWidth="7" strokeOpacity=".66" fill="none" />
            <path d="M0 235c194-24 301 34 492 9 210-25 327-15 487 9 164 25 287 13 461-18" stroke="#fff9ec" strokeWidth="4" strokeOpacity=".54" fill="none" />
            <path d="M0 305c181-30 344 7 495-8 173-17 298-35 455-8 164 28 327 37 490-5" stroke="#fffaf1" strokeWidth="3" strokeOpacity=".40" fill="none" />
          </svg>
        </div>
        <div className="coast-sand" aria-hidden="true" />
        <CoastalGrasses side="left" />
        <CoastalGrasses side="right" />
        <div className="coast-vignette" aria-hidden="true" />

        <div className="coast-copy">
          <div className="coast-eyebrow">
            <span>A CELEBRATION BY THE SEA</span>
            <svg width="96" height="14" viewBox="0 0 96 14" aria-hidden="true">
              <path d="M0 7h31M65 7h31M37 7c5-1 7-5 11-5s6 4 11 5c-5 1-7 5-11 5s-6-4-11-5Z" fill="none" stroke="currentColor" strokeWidth=".8" />
            </svg>
          </div>
          <h1 className="coast-heading" id="hero-title">
            <span className="coast-name">{wedding.personOne}</span>
            <span className="coast-ampersand">&amp;</span>
            <span className="coast-name">{wedding.personTwo}</span>
          </h1>
          <p className="coast-vow-line">Together, where the sky meets the sea</p>
          <div className="coast-event-line">
            <span className="coast-divider" aria-hidden="true" />
            <time dateTime={wedding.dateISO}>{wedding.dateLabel}</time>
            <span>{wedding.locationLine}</span>
          </div>
        </div>

        <a className="coast-scroll-hint" href="#invitation" aria-label="Scroll or tap to discover the invitation">
          <span>SCROLL TO BEGIN</span>
          <ArrowDown size={20} strokeWidth={1.1} aria-hidden="true" />
        </a>
        <div className="coast-scroll-track" aria-hidden="true">
          <span className="coast-progress-fill" />
        </div>

        {/* A full ivory wipe has a curved top: the last frame is exactly
            the same color as the letter section underneath. */}
        <div className="coast-ivory-wipe" aria-hidden="true">
          <svg className="coast-wipe-crest" viewBox="0 0 1440 130" preserveAspectRatio="none">
            <path d="M0 89c154-49 280 14 432-3 165-18 254-75 438-55 220 23 335 72 570 17V130H0Z" fill="#faf4e9" />
            <path d="M0 89c154-49 280 14 432-3 165-18 254-75 438-55 220 23 335 72 570 17" stroke="#fffdf5" strokeWidth="7" strokeOpacity=".85" fill="none" />
          </svg>
          <div className="coast-wipe-message">
            <span>OUR INVITATION</span>
            <p>Every tide brings us closer.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoastalGrasses({ side }: { side: "left" | "right" }) {
  return (
    <svg className={"coast-grass coast-grass-" + side} viewBox="0 0 170 300" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M50 300C58 226 40 137 21 62M73 300C77 214 105 121 128 32M86 300C96 240 119 203 153 157M40 300C34 233 20 200 5 182M68 300C61 205 72 142 87 107" />
        <path d="M30 102C12 89 7 76 4 67M35 130C54 116 55 101 55 91M108 96c14-25 26-37 39-41m-47 63c-13-17-19-31-20-47M137 181c11-8 21-11 29-13M30 224c-12-12-21-17-28-16M71 158c12-17 20-25 32-28" />
      </g>
      <g fill="currentColor" opacity=".7">
        <ellipse cx="19" cy="62" rx="4.4" ry="16" transform="rotate(-20 19 62)" />
        <ellipse cx="128" cy="30" rx="4.4" ry="17" transform="rotate(18 128 30)" />
        <ellipse cx="87" cy="105" rx="3.5" ry="14" transform="rotate(9 87 105)" />
        <ellipse cx="154" cy="155" rx="3" ry="12" transform="rotate(35 154 155)" />
      </g>
    </svg>
  );
}
