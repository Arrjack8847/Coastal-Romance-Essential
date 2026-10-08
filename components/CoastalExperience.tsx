"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, MapPin, X } from "lucide-react";
import { wedding } from "@/lib/wedding";

function SmallFlourish({ light = false }: { light?: boolean }) {
  return (
    <svg className={light ? "flourish flourish-light" : "flourish"} viewBox="0 0 126 16" fill="none" aria-hidden="true">
      <path d="M2 8h39m44 0h39M48 8c7-1 9-6 15-6 6 0 8 5 15 6-7 1-9 6-15 6-6 0-8-5-15-6Z" stroke="currentColor" strokeWidth=".8"/>
      <circle cx="63" cy="8" r="1.8" fill="currentColor"/>
    </svg>
  );
}

function WaveEdge({ className = "" }: { className?: string }) {
  return (
    <svg className={"wave-edge " + className} viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
      <path fill="currentColor" d="M0 73c154-39 255 30 422 9 163-20 251-57 412-38 192 24 348 72 606 11v65H0V73Z"/>
    </svg>
  );
}

function SeaGrass({ className = "" }: { className?: string }) {
  return (
    <svg className={"sea-grass " + className} viewBox="0 0 145 260" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeLinecap="round" strokeWidth="1.8">
        <path d="M53 260C56 213 48 150 27 75M69 260C79 189 85 133 116 42M81 260C89 215 113 179 133 158M40 260C36 219 25 183 7 163M59 260C58 219 60 181 71 113"/>
        <path d="M31 104c-17-9-22-18-26-31m28 43C46 102 48 92 49 83M101 83c10-22 20-33 31-40m-36 56c-13-19-18-30-17-42M118 181c13-11 20-13 25-13M25 202c-12-13-19-15-24-16M70 164c12-19 17-27 28-32"/>
      </g>
      <g fill="currentColor" opacity=".75">
        <ellipse cx="22" cy="70" rx="4" ry="12" transform="rotate(-25 22 70)"/>
        <ellipse cx="117" cy="40" rx="4" ry="13" transform="rotate(27 117 40)"/>
        <ellipse cx="9" cy="160" rx="3" ry="10" transform="rotate(-30 9 160)"/>
        <ellipse cx="73" cy="110" rx="3" ry="11" transform="rotate(12 73 110)"/>
      </g>
    </svg>
  );
}

function OceanLayers() {
  return (
    <div className="ocean-layers" aria-hidden="true">
      <svg className="ocean-wave ocean-wave-back" viewBox="0 0 1440 160" preserveAspectRatio="none">
        <path d="M0 81C225 40 355 121 570 78c205-41 334-43 507-8 152 30 259 22 363-2v92H0Z" fill="currentColor"/>
      </svg>
      <svg className="ocean-wave ocean-wave-middle" viewBox="0 0 1440 160" preserveAspectRatio="none">
        <path d="M0 91c202-46 391 41 582 4 190-37 286-52 467-22 181 31 286 20 391-8v95H0Z" fill="currentColor"/>
        <path d="M0 91c202-46 391 41 582 4 190-37 286-52 467-22 181 31 286 20 391-8" stroke="#fff8eb" strokeOpacity=".64" strokeWidth="2.5" fill="none"/>
      </svg>
      <svg className="ocean-wave ocean-wave-front" viewBox="0 0 1440 170" preserveAspectRatio="none">
        <path d="M0 98c174-49 344 12 510 0 187-13 289-46 476-23 190 24 305 41 454 1v94H0Z" fill="currentColor"/>
        <path d="M0 98c174-49 344 12 510 0 187-13 289-46 476-23 190 24 305 41 454 1" stroke="#fffaf0" strokeWidth="4" strokeOpacity=".75" fill="none"/>
      </svg>
    </div>
  );
}

function getCalendarHref() {
  const start = new Date(wedding.dateISO);
  const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);
  const toICS = (date: Date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//JackNex Studio//Coastal Romance Essential//EN",
    "BEGIN:VEVENT",
    "UID:coastal-romance-demo@jacknex.studio",
    "DTSTAMP:20261008T000000Z",
    "DTSTART:" + toICS(start),
    "DTEND:" + toICS(end),
    "SUMMARY:" + wedding.shortNames + " — Wedding Celebration",
    "DESCRIPTION:A celebration by the sea.",
    "LOCATION:" + wedding.venueAddress,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return "data:text/calendar;charset=utf-8," + encodeURIComponent(lines.join("\r\n"));
}

function Countdown() {
  const [remaining, setRemaining] = useState<{ days: number; hours: number; minutes: number } | null>(null);
  const [arrived, setArrived] = useState(false);

  useEffect(() => {
    const update = () => {
      const ms = new Date(wedding.dateISO).getTime() - Date.now();
      if (ms <= 0) {
        setArrived(true);
        setRemaining({ days: 0, hours: 0, minutes: 0 });
        return;
      }
      setArrived(false);
      setRemaining({
        days: Math.floor(ms / 86400000),
        hours: Math.floor((ms % 86400000) / 3600000),
        minutes: Math.floor((ms % 3600000) / 60000),
      });
    };
    update();
    const timer = window.setInterval(update, 60000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="countdown js-reveal" aria-label={arrived ? "Our celebration day has arrived" : "Countdown until the wedding"}>
      <p className="eyebrow eyebrow-small">COUNTING THE MOMENTS</p>
      {arrived ? <p className="countdown-arrived">Our day is here</p> : (
        <div className="countdown-grid">
          {([
            ["DAYS", remaining?.days],
            ["HOURS", remaining?.hours],
            ["MINUTES", remaining?.minutes],
          ] as const).map(([label, value]) => (
            <div className="countdown-unit" key={label}>
              <span className="countdown-number">{value == null ? "–" : String(value).padStart(2, "0")}</span>
              <span className="countdown-label">{label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function GalleryLightbox({ index, onClose, onChange }: { index: number; onClose: () => void; onChange: (index: number) => void }) {
  const closeButton = useRef<HTMLButtonElement>(null);
  const photos = wedding.images.gallery;
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onChange((index + 1) % photos.length);
      if (event.key === "ArrowLeft") onChange((index - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", key);
    };
  }, [index, onClose, onChange, photos.length]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Wedding photographs" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <button className="lightbox-close" type="button" ref={closeButton} aria-label="Close photo viewer" onClick={onClose}><X size={22}/></button>
      <button className="lightbox-arrow lightbox-prev" type="button" aria-label="Previous photograph" onClick={() => onChange((index - 1 + photos.length) % photos.length)}><ArrowLeft size={23}/></button>
      <div className="lightbox-content">
        <div className="lightbox-photo" key={index}>
          <Image src={photos[index].src} fill unoptimized sizes="(max-width: 768px) 92vw, 85vw" alt={photos[index].alt} className="image-cover"/>
        </div>
        <p>{photos[index].label} <span>{index + 1} / {photos.length}</span></p>
      </div>
      <button className="lightbox-arrow lightbox-next" type="button" aria-label="Next photograph" onClick={() => onChange((index + 1) % photos.length)}><ArrowRight size={23}/></button>
    </div>
  );
}

export default function CoastalExperience() {
  const root = useRef<HTMLElement>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const closeGallery = () => setSelectedPhoto(null);
  const changeGallery = (i: number) => setSelectedPhoto(i);

  useEffect(() => {
    if (!root.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.fromTo(".hero-entrance", { autoAlpha: 0, y: 23 }, {
        autoAlpha: 1, y: 0, duration: 1.15, stagger: 0.15, ease: "power2.out", delay: 0.24,
      });

      gsap.utils.toArray<HTMLElement>(".js-reveal").forEach((element) => {
        gsap.fromTo(element, { autoAlpha: 0, y: 26 }, {
          autoAlpha: 1, y: 0, duration: 0.95, ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 91%", once: true },
        });
      });

      gsap.to(".hero-sun", {
        yPercent: 9,
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.3 },
      });
      gsap.to(".hero-sea-image", {
        yPercent: 5,
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.5 },
      });
    }, root);
    return () => context.revert();
  }, []);

  return (
    <main ref={root} id="top">
      {/* SECTION 01 — THE ENDLESS HORIZON */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-sky" aria-hidden="true"/>
        <div className="hero-sun" aria-hidden="true"/>
        <div className="hero-sea-image" aria-hidden="true">
          <Image src={wedding.images.hero} fill unoptimized priority sizes="100vw" alt="" className="image-cover hero-image"/>
        </div>
        <div className="hero-horizon-haze" aria-hidden="true"/>
        <OceanLayers />
        <SeaGrass className="hero-grass hero-grass-left"/>
        <SeaGrass className="hero-grass hero-grass-right"/>
        <div className="film-grain" aria-hidden="true"/>
        <div className="hero-copy">
          <div className="hero-entrance hero-topline">
            <p className="eyebrow">A CELEBRATION BY THE SEA</p>
            <SmallFlourish/>
          </div>
          <h1 className="hero-title hero-entrance" id="hero-title">
            <span>{wedding.personOne}</span>
            <em>&amp;</em>
            <span>{wedding.personTwo}</span>
          </h1>
          <div className="hero-details hero-entrance">
            <p className="hero-tagline">Together, where the sky meets the sea</p>
            <span className="fine-rule"/>
            <time dateTime={wedding.dateISO}>{wedding.dateLabel}</time>
            <p className="hero-location">{wedding.locationLine}</p>
          </div>
        </div>
        <a className="hero-scroll hero-entrance" href="#invitation" aria-label="Scroll down to discover our invitation">
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown size={17} strokeWidth={1.2} aria-hidden="true"/>
        </a>
      </section>

      {/* SECTION 02 — THE LETTER */}
      <section id="invitation" className="letter-section section-padding" aria-labelledby="letter-heading">
        <WaveEdge className="letter-edge"/>
        <div className="letter-wash letter-wash-left" aria-hidden="true"/>
        <div className="letter-wash letter-wash-right" aria-hidden="true"/>
        <div className="letter-content">
          <div className="section-heading js-reveal">
            <p className="eyebrow">FROM OUR HEARTS TO YOURS</p>
            <SmallFlourish/>
          </div>
          <p className="letter-prelude js-reveal">To our favorite people,</p>
          <h2 className="editorial-title letter-title js-reveal" id="letter-heading">Every tide brings<br/><em>us closer.</em></h2>
          <div className="letter-body js-reveal">
            {wedding.invitation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="signature js-reveal">
            <span>With all our love,</span>
            <strong>{wedding.shortNames}</strong>
          </div>
          <div className="letter-footnote js-reveal"><span className="letter-footnote-line"/><span>AN OCEAN OF LOVE AWAITS</span><span className="letter-footnote-line"/></div>
        </div>
      </section>

      {/* SECTION 03 — THE CELEBRATION */}
      <section id="celebration" className="celebration-section" aria-labelledby="celebration-heading">
        <div className="celebration-photo js-reveal">
          <Image src={wedding.images.ceremony} fill unoptimized sizes="(max-width: 900px) 100vw, 52vw" alt="Romantic wedding ceremony photograph" className="image-cover"/>
          <div className="photo-fade" aria-hidden="true"/>
          <span className="photo-label">AN UNFORGETTABLE DAY BY THE SEA</span>
        </div>
        <div className="celebration-info">
          <div className="js-reveal">
            <p className="eyebrow">THE DAY WE SAY I DO</p>
            <h2 className="editorial-title" id="celebration-heading">Our <em>Celebration</em></h2>
            <SmallFlourish/>
          </div>
          <div className="date-feature js-reveal">
            <strong>{wedding.day}</strong>
            <div><span>{wedding.month}</span><span>{wedding.year} · {wedding.weekday}</span></div>
          </div>
          <div className="event-schedule js-reveal">
            <div className="schedule-item">
              <span className="eyebrow eyebrow-small">THE CEREMONY</span>
              <p>{wedding.ceremonyTime}</p>
              <span>Vows by the ocean</span>
            </div>
            <div className="schedule-item">
              <span className="eyebrow eyebrow-small">THE RECEPTION</span>
              <p>{wedding.receptionTime}</p>
              <span>Dinner &amp; celebration</span>
            </div>
          </div>
          <p className="celebration-note js-reveal">A golden evening, beautiful company, and a love worth celebrating.</p>
        </div>
      </section>

      {/* SECTION 04 — THE GALLERY */}
      <section id="moments" className="moments-section section-padding" aria-labelledby="moments-heading">
        <WaveEdge className="moments-edge"/>
        <div className="moments-intro js-reveal">
          <p className="eyebrow">OUR FAVORITE MOMENTS</p>
          <h2 className="editorial-title" id="moments-heading">Written in<br/><em>the sand.</em></h2>
          <p>Some memories feel like sunshine. These are a few of ours.</p>
        </div>
        <div className="gallery-grid">
          {wedding.images.gallery.map((photo, index) => (
            <button type="button" className={"gallery-item gallery-item-" + (index + 1) + " js-reveal"} key={photo.src}
              onClick={() => setSelectedPhoto(index)} aria-label={"View photograph " + (index + 1) + ": " + photo.alt}>
              <span className="gallery-image">
                <Image src={photo.src} fill unoptimized sizes="(max-width: 680px) 72vw, 40vw" alt={photo.alt} className="image-cover"/>
              </span>
              <span className="gallery-label">{photo.label}</span>
              <span className="gallery-open" aria-hidden="true"><ArrowUpRight size={17}/></span>
            </button>
          ))}
        </div>
        <p className="gallery-caption js-reveal">A thousand little moments.<br/><em>One beautiful story.</em></p>
        <div className="moments-curve" aria-hidden="true"/>
      </section>

      {/* SECTION 05 — THE DESTINATION */}
      <section id="destination" className="destination-section" aria-labelledby="destination-heading">
        <div className="destination-photo">
          <Image src={wedding.images.venue} fill unoptimized sizes="100vw" alt="Sunlit coastal destination with inviting blue water" className="image-cover"/>
          <div className="destination-photo-overlay" aria-hidden="true"/>
          <div className="destination-photo-caption js-reveal">
            <span className="eyebrow">MEET US WHERE THE WAVES ARE</span>
            <span className="destination-photo-word">Bali</span>
          </div>
        </div>
        <div className="destination-content section-padding">
          <div className="js-reveal">
            <p className="eyebrow">THE DESTINATION</p>
            <h2 className="editorial-title" id="destination-heading">Where forever <em>begins.</em></h2>
            <SmallFlourish/>
          </div>
          <div className="venue-address js-reveal">
            <MapPin size={19} strokeWidth={1.2} aria-hidden="true"/>
            <h3>{wedding.venueName}</h3>
            <p>{wedding.venueArea}</p>
            <span>{wedding.venueAddress}</span>
          </div>
          <p className="venue-description js-reveal">A beautiful evening awaits by the sea. We cannot wait to share it with you.</p>
          <a className="primary-button js-reveal" href={wedding.directionsUrl} target="_blank" rel="noopener noreferrer">
            VIEW LOCATION <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true"/>
          </a>
          <p className="demo-note">Sample venue — replace with your confirmed location.</p>
        </div>
      </section>

      {/* SECTION 06 — CLOSING */}
      <section id="forever" className="closing-section section-padding" aria-labelledby="closing-heading">
        <div className="closing-sky" aria-hidden="true"/>
        <div className="closing-sun" aria-hidden="true"/>
        <div className="closing-sea" aria-hidden="true">
          <Image src={wedding.images.closing} fill unoptimized sizes="100vw" alt="" className="image-cover"/>
        </div>
        <div className="closing-glow" aria-hidden="true"/>
        <div className="closing-copy">
          <div className="js-reveal"><p className="eyebrow">WITH ALL OUR LOVE</p><SmallFlourish/></div>
          <h2 className="editorial-title closing-title js-reveal" id="closing-heading">Our forever<br/><em>starts here.</em></h2>
          <p className="closing-message js-reveal">We cannot imagine beginning this beautiful chapter without you by our side.</p>
          <p className="closing-names js-reveal">{wedding.shortNames}</p>
          <p className="closing-date js-reveal">{wedding.dateLabel} · {wedding.locationLine}</p>
          <Countdown/>
          <a className="calendar-link js-reveal" href={getCalendarHref()} download="aria-and-noah-wedding.ics">
            <CalendarDays size={16} strokeWidth={1.4} aria-hidden="true"/> ADD TO CALENDAR <ArrowUpRight size={14} aria-hidden="true"/>
          </a>
        </div>
        <footer className="site-footer">
          <a href="#top" aria-label="Back to top">BACK TO THE BEGINNING <ArrowUpRight size={12} aria-hidden="true"/></a>
          <span>MADE WITH LOVE · <a href="https://instagram.com/jacknex.studio" target="_blank" rel="noopener noreferrer">JACKNEX STUDIO</a></span>
        </footer>
      </section>
      {selectedPhoto !== null && <GalleryLightbox index={selectedPhoto} onClose={closeGallery} onChange={changeGallery}/>}
    </main>
  );
}
