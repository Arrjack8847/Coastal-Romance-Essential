"use client";

/* Deterministic particles, no canvas loop or React re-renders. */
const bubbles = Array.from({ length: 16 }, (_, i) => ({
  left: 5 + ((i * 29 + 17) % 89),
  size: 3 + ((i * 7) % 13),
  delay: -((i * 13) % 21) / 3,
  duration: 8 + ((i * 11) % 10),
  opacity: .2 + ((i * 3) % 6) / 15,
}));

export function BubbleField({ className = "" }: { className?: string }) {
  return (
    <div className={"ocean-particles " + className} aria-hidden="true">
      {bubbles.map((bubble, i) => (
        <span key={i} className="ocean-bubble" style={{
          left: bubble.left + "%",
          width: bubble.size + "px",
          height: bubble.size + "px",
          animationDelay: bubble.delay + "s",
          animationDuration: bubble.duration + "s",
          opacity: bubble.opacity,
        }}/>
      ))}
    </div>
  );
}

export function LightBeams() {
  return <div className="ocean-light-beams" aria-hidden="true"><span/><span/><span/><span/></div>;
}

export function OceanWaterline({ className = "" }: { className?: string }) {
  return (
    <svg className={"ocean-waterline " + className} viewBox="0 0 1440 150" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 42c184 24 316-29 491 1 195 35 300 4 462-16 186-23 306 34 487 2v121H0Z" fill="#83b9bd"/>
      <path d="M0 42c184 24 316-29 491 1 195 35 300 4 462-16 186-23 306 34 487 2" fill="none" stroke="#fffaee" strokeWidth="8" strokeOpacity=".87"/>
      <path d="M0 56c184 24 316-29 491 1 195 35 300 4 462-16 186-23 306 34 487 2" fill="none" stroke="#d6f3f0" strokeWidth="3" strokeOpacity=".49"/>
    </svg>
  );
}
