"use client";

import { motion } from "framer-motion";
import { site } from "@/content/site";
import { images } from "@/content/resume";
import { useIntro } from "@/components/intro/IntroProvider";
import { fadeUp, staggerContainer } from "@/components/motion/variants";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function Hero() {
  const { done } = useIntro();

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <ImagePlaceholder
        src={images.hero}
        alt="Savannah on the ocean"
        label="Hero · Savannah on the ocean"
        priority
        sizes="100vw"
        className="object-[28%_center] lg:object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-l from-navy-950/90 via-navy-950/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-navy-950/80 to-transparent"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={done ? "visible" : "hidden"}
        className="relative flex min-h-[100svh] w-full items-end justify-end px-6 pb-16 pt-32 md:px-12 md:pb-20 lg:px-16 lg:pb-[10vh]"
      >
        <div className="w-full max-w-2xl text-right">
          <motion.h1
            variants={fadeUp}
            className="whitespace-nowrap font-display text-[clamp(2.5rem,9vw,6rem)] tracking-tight text-white"
          >
            {site.name}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-foam-100/85 md:text-xl"
          >
            {site.tagline}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-end gap-4">
            <Button href="/events" variant="light">
              See recent events
            </Button>
            <Button
              href="/#contact"
              variant="ghost"
              className="border-white/40 text-white hover:border-white"
            >
              Get in touch
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
