import { cn } from "@/lib/utils";

export default function WaveDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("block h-16 w-full text-ocean-300/30", className)}
    >
      <path
        d="M0 48 C 180 16, 360 16, 540 40 S 900 72, 1080 48 S 1350 16, 1440 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M0 60 C 200 36, 420 32, 640 52 S 980 78, 1200 58 S 1380 40, 1440 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.6"
      />
    </svg>
  );
}
