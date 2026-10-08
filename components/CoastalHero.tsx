"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import { wedding } from "@/lib/wedding";
import { BubbleField, LightBeams } from "@/components/OceanAtmosphere";

/**
 * Scroll chapter A. The guest approaches the shoreline and passes
 * physically through a moving waterline into the underwater world.
 * The pinned viewport is never itself animated.
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
        gsap.set(".dive-underwater", { yPercent: 110 });
        gsap.set(".dive-depth", { opacity: 0 });
        gsap.set(".dive-next", { autoAlpha: 0, y: 22 });
        gsap.set(".dive-bubbles", { opacity: 0 });

        const entrance = gsap.timeline({ delay: .12, defaults: { ease: "power2.out" } });
        entrance
          .from(".dive-kicker", { autoAlpha: 0, y: 15, duration: .7 })
          .from(".dive-names > span", { autoAlpha: 0, y: 36, duration: 1, stagger: .15 }, "-=.3")
          .from(".dive-tagline", { autoAlpha: 0, y: 18, duration: .7 }, "-=.5")
          .from(".dive-event", { autoAlpha: 0, y: 12, duration: .6 }, "-=.35");

        gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: chapter.current,
            start: "top top",
            end: () => "+=" + Math.round(window.innerHeight * (window.innerWidth < 768 ? 1.55 : 1.85)),
            pin: viewport.current,
            pinSpacing: true,
            scrub: .75,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            refreshPriority: 3
          }
        })
          .to(".dive-sky", { scale: 1.07, yPercent: -5, duration: .53 }, 0)
          .to(".dive-glow", { scale: 1.35, yPercent: 12, duration: .54 }, 0)
          .to(".dive-ocean-photo", { scale: 1.24, yPercent: -13, duration: .64 }, 0)
          .to(".dive-water-front", { scale: 1.34, yPercent: -45, duration: .57 }, .02)
          .to(".dive-names", { yPercent: -23, scale: .91, autoAlpha: 0, duration: .26 }, .12)
          .to(".dive-kicker, .dive-tagline, .dive-event, .dive-scroll", { y: -15, autoAlpha: 0, duration: .20 }, .14)
          .to(".dive-underwater", { yPercent: 0, duration: .42 }, .28)
          .to(".dive-bubbles", { opacity: 1, duration: .16 }, .48)
          .to(".dive-depth", { opacity: .55, duration: .31 }, .56)
          .to(".dive-underwater-photo", { scale: 1.13, yPercent: -6, duration: .43 }, .52)
          .to(".dive-next", { autoAlpha: 1, y: 0, duration: .14 }, .85);
      }, chapter);
      return () => context.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="dive-chapter" ref={chapter} aria-labelledby="hero-title">
      <div className="dive-viewport" ref={viewport}>
        <div className="dive-sky" aria-hidden="true"/>
        <div className="dive-glow" aria-hidden="true"/>
        <div className="dive-ocean-photo" aria-hidden="true">
          <Image src={wedding.images.hero} alt="" fill priority unoptimized sizes="100vw" className="dive-background-image"/>
        </div>
        <div className="dive-horizon-light" aria-hidden="true"/>
        <div className="dive-water-front" aria-hidden="true">
          <svg viewBox="0 0 1440 240" preserveAspectRatio="none">
            <defs>
              <linearGradient id="entrySea" x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#9ba8a3" stopOpacity=".03"/>
                <stop offset=".55" stopColor="#7ca5a5" stopOpacity=".42"/>
                <stop offset="1" stopColor="#739e9c" stopOpacity=".82"/>
              </linearGradient>
            </defs>
            <path fill="url(#entrySea)" d="M0 84c192-28 285 39 485 9 185-29 318-37 479-3 180 39 324 18 476-12v162H0Z"/>
            <path fill="none" stroke="#fff4df" strokeOpacity=".72" strokeWidth="4" d="M0 84c192-28 285 39 485 9 185-29 318-37 479-3 180 39 324 18 476-12"/>
          </svg>
        </div>
        <div className="dive-film" aria-hidden="true"/>
        <div className="dive-copy">
          <p className="dive-kicker">A CELEBRATION BY THE SEA</p>
          <h1 id="hero-title" className="dive-names">
            <span>{wedding.personOne}</span><span className="dive-and">&amp;</span><span>{wedding.personTwo}</span>
          </h1>
          <p className="dive-tagline">Together, where the sky meets the sea</p>
          <div className="dive-event">
            <span className="dive-hairline" aria-hidden="true"/>
            <time dateTime={wedding.dateISO}>{wedding.dateLabel}</time>
            <span>{wedding.locationLine}</span>
          </div>
        </div>
        <a className="dive-scroll" href="#invitation">
          <span>SCROLL TO DIVE</span><ArrowDown size={17} strokeWidth={1.3} aria-hidden="true"/>
        </a>

        {/* A single moving waterline carries the entire underwater world upward. */}
        <div className="dive-underwater">
          <div className="dive-underwater-photo">
            <Image src={wedding.images.underwater} alt="" fill priority unoptimized sizes="100vw" className="dive-background-image"/>
          </div>
          <div className="dive-underwater-filter" aria-hidden="true"/>
          <LightBeams/>
          <BubbleField className="dive-bubbles"/>
          <div className="dive-depth" aria-hidden="true"/>
          <div className="dive-next">
            <span className="subsea-kicker">BENEATH THE HORIZON</span>
            <p>Some love is deeper than the sea.</p>
            <span className="dive-next-arrow">↓</span>
          </div>
          <svg className="dive-waterline" viewBox="0 0 1440 150" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 92C170 13 300 109 484 68c188-42 301-23 452 0 160 25 319-32 504-41V150H0Z" fill="#85bbc1"/>
            <path d="M0 92C170 13 300 109 484 68c188-42 301-23 452 0 160 25 319-32 504-41" fill="none" stroke="#fffae8" strokeWidth="10" strokeOpacity=".91"/>
            <path d="M0 116c179-64 318 25 485-12 182-42 299-16 450 2 167 20 315-28 505-33" fill="none" stroke="#e4ffff" strokeWidth="3" strokeOpacity=".53"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
