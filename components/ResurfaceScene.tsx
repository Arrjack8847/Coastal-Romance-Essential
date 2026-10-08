"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { wedding } from "@/lib/wedding";
import { BubbleField, LightBeams, OceanWaterline } from "@/components/OceanAtmosphere";

/**
 * Scroll chapter C. The waterline descends over the viewer from above:
 * blue depths -> sunlit surface -> real ceremony photograph.
 */
export default function ResurfaceScene() {
  const chapter = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chapter.current || !viewport.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.set(".resurface-air", { yPercent: -112 });
        gsap.set(".resurface-greeting", { autoAlpha: 0, y: 35 });
        gsap.set(".resurface-light", { opacity: .16 });
        gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: chapter.current,
            start: "top top",
            end: () => "+=" + Math.round(window.innerHeight * (window.innerWidth < 768 ? 1.1 : 1.3)),
            pin: viewport.current,
            pinSpacing: true,
            scrub: .7,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            refreshPriority: 2
          }
        })
          .to(".resurface-blue-photo", { scale: 1.22, yPercent: 18, duration: .6 }, 0)
          .to(".resurface-bubbles", { yPercent: 30, autoAlpha: 0, duration: .47 }, 0)
          .to(".resurface-light", { opacity: 1, scale: 1.25, duration: .5 }, .07)
          .to(".resurface-air", { yPercent: 0, duration: .47 }, .37)
          .to(".resurface-air-photo", { scale: 1.04, duration: .57 }, .39)
          .to(".resurface-greeting", { autoAlpha: 1, y: 0, duration: .16 }, .84);
      }, chapter);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="resurface-chapter" ref={chapter} aria-label="Rising out of the ocean to the wedding celebration">
      <div className="resurface-viewport" ref={viewport}>
        <div className="resurface-blue-photo" aria-hidden="true">
          <Image src={wedding.images.underwater} alt="" fill unoptimized sizes="100vw" className="resurface-background-image"/>
        </div>
        <div className="resurface-blue-tint" aria-hidden="true"/>
        <LightBeams/>
        <BubbleField className="resurface-bubbles"/>
        <div className="resurface-light" aria-hidden="true"/>

        <div className="resurface-air">
          <div className="resurface-air-photo">
            <Image src={wedding.images.ceremony} alt="" fill unoptimized sizes="100vw" className="resurface-background-image"/>
          </div>
          <div className="resurface-sunset-tint" aria-hidden="true"/>
          <div className="resurface-greeting">
            <span className="resurface-kicker">BACK TO THE GOLDEN HOUR</span>
            <h2>Our <em>Celebration</em></h2>
            <p>Where the ocean leads us to forever.</p>
            <span className="resurface-scroll">KEEP SCROLLING ↓</span>
          </div>
          <OceanWaterline className="resurface-surface-edge"/>
        </div>
      </div>
    </section>
  );
}
