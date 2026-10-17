"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import MobileNav from "./MobileNav";

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const light = pathname === "/" && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-navy-900/10 bg-white/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className={cn(
            "font-display text-lg tracking-tight",
            light ? "text-white" : "text-navy-950"
          )}
        >
          {site.name}
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={cn(
                "text-sm font-medium transition-colors",
                light
                  ? "text-white/80 hover:text-white aria-[current=page]:text-white"
                  : "text-navy-900/80 hover:text-navy-900 aria-[current=page]:text-ocean-500"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <MobileNav links={links} light={light} />
      </div>
    </header>
  );
}
