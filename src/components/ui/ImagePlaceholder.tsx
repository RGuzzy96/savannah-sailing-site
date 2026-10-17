import Image from "next/image";
import { cn } from "@/lib/utils";

const WAVE_PATTERN = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='48' height='24' viewBox='0 0 48 24'><path d='M0 12 q6 -8 12 0 t12 0 t12 0 t12 0' fill='none' stroke='rgba(255,255,255,0.10)' stroke-width='1.2'/></svg>`
)}")`;

interface ImagePlaceholderProps {
  src?: string;
  alt?: string;
  label?: string;
  showLabel?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export default function ImagePlaceholder({
  src,
  alt = "",
  label,
  showLabel = true,
  priority = false,
  sizes = "100vw",
  className,
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", className)}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={alt || label || "Image placeholder"}
      className={cn("absolute inset-0", className)}
      style={{
        backgroundImage: `${WAVE_PATTERN}, linear-gradient(135deg, var(--color-navy-900), var(--color-navy-700), var(--color-ocean-500))`,
      }}
    >
      {showLabel && label ? (
        <span className="absolute inset-x-0 bottom-3 px-3 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-white/60">
          {label}
        </span>
      ) : null}
    </div>
  );
}
