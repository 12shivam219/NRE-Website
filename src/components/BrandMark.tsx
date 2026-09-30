import Image from "next/image";
import { images, imageSizes } from "@/lib/images";

export function BrandMark({ animated = false, size = 128, priority = false }: { animated?: boolean; size?: number; priority?: boolean }) {
  const preview = size > 128;
  return <span className={`brand-mark${animated ? " brand-mark-animated" : ""}`}>
    <span className="brand-emblem-art"><Image src={preview ? images.logoPreview : images.logo} alt="" width={size} height={size} sizes={preview ? imageSizes.logoPreview : imageSizes.logo} priority={priority} loading={priority ? undefined : "lazy"} /></span>
    <svg className="brand-ring" viewBox="0 0 100 100" fill="none" aria-hidden="true"><circle cx="50" cy="50" r="46" pathLength="100" /></svg>
    <span className="brand-shine" aria-hidden="true" />
  </span>;
}
