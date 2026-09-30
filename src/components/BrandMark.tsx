import Image from "next/image";
import { images, imageSizes } from "@/lib/images";

export function BrandMark({ size = 128, priority = false }: { animated?: boolean; size?: number; priority?: boolean }) {
  const preview = size > 128;
  return <span className="brand-mark brand-mark-original">
    <span className="brand-emblem-art"><Image src={preview ? images.logoPreview : images.logo} alt="" width={1024} height={1536} sizes={preview ? imageSizes.logoPreview : imageSizes.logo} priority={priority} loading={priority ? undefined : "lazy"} /></span>
  </span>;
}
