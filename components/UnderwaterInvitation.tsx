import Image from "next/image";
import { wedding } from "@/lib/wedding";
import { BubbleField, LightBeams } from "@/components/OceanAtmosphere";

/**
 * A natural-scroll invitation chapter. Unlike the two pinned cinematic scenes,
 * guests can stop here and read for as long as they want.
 */
export default function UnderwaterInvitation() {
  return (
    <section id="invitation" className="uw-section" aria-labelledby="letter-heading">
      <div className="uw-background" aria-hidden="true">
        <Image src={wedding.images.underwater} alt="" fill sizes="100vw" unoptimized className="uw-photo"/>
      </div>
      <div className="uw-color" aria-hidden="true"/>
      <LightBeams/>
      <BubbleField className="uw-bubbles"/>
      <div className="uw-inner">
        <div className="uw-intro js-reveal">
          <span className="subsea-kicker">A LOVE BENEATH THE WAVES</span>
          <h2 id="letter-heading">Deep as the ocean.<br/><em>Endless as the sky.</em></h2>
          <p>A little piece of forever, waiting beneath the surface.</p>
        </div>
        <div className="uw-letter js-reveal">
          <div className="uw-letter-inner">
            <p className="uw-card-eyebrow">TOGETHER WITH THEIR FAMILIES</p>
            <svg className="uw-ornament" viewBox="0 0 122 25" aria-hidden="true" fill="none">
              <path d="M1 12h36M85 12h36M44 12c6-7 12-8 17-10 5 2 11 3 17 10-6 7-12 8-17 10-5-2-11-3-17-10Z" stroke="currentColor" strokeWidth=".8"/>
              <circle cx="61" cy="12" r="2" fill="currentColor"/>
            </svg>
            <h3>{wedding.personOne}<span>&amp;</span>{wedding.personTwo}</h3>
            <p className="uw-card-declaration">Joyfully invite you to celebrate the beginning of their forever.</p>
            <div className="uw-card-rule" aria-hidden="true"/>
            <time dateTime={wedding.dateISO} className="uw-card-date">{wedding.dateLabel}</time>
            <p className="uw-card-place">{wedding.locationLine}</p>
            <div className="uw-card-rule" aria-hidden="true"/>
            <div className="uw-card-letter">
              {wedding.invitation.map(line=><p key={line}>{line}</p>)}
            </div>
            <p className="uw-card-signoff">With love, <em>{wedding.shortNames}</em></p>
          </div>
        </div>
        <div className="uw-outro js-reveal">
          <p>Two hearts. One endless ocean.</p>
          <span>KEEP SCROLLING · RETURN TO THE SUNLIGHT</span>
          <svg viewBox="0 0 22 30" fill="none" aria-hidden="true"><path d="M11 29V1M3 9l8-8 8 8" stroke="currentColor" strokeWidth="1.3"/></svg>
        </div>
      </div>
    </section>
  );
}
