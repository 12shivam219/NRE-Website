import Image from "next/image";

export function BrandMark({ animated = false, size = 80 }: { animated?: boolean; size?: number }) {
  return <span className={`brand-mark${animated ? " brand-mark-animated" : ""}`}>
    <span className="brand-emblem-art"><Image src="/assets/nre-client-logo.webp" alt="" width={size} height={size} priority /></span>
    <svg className="brand-ring" viewBox="0 0 100 100" fill="none" aria-hidden="true"><circle cx="50" cy="50" r="46" pathLength="100" /></svg>
    <span className="brand-shine" aria-hidden="true" />
  </span>;
}
