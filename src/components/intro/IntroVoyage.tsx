"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { useIntro } from "./IntroProvider";

const EASE = [0.42, 0, 0.58, 1] as const;
const COURSE_D = "M 460 590 C 600 630, 700 430, 860 460 S 1060 530, 1180 340";
const PATH_DRAW_DELAY = 0.1;
const PATH_DRAW_DURATION = 1.2;
const EXIT_AT = 1.45;

const CONTOURS = [
  "M -50 620 C 300 560, 600 700, 900 620 S 1400 500, 1650 580",
  "M -50 520 C 250 460, 650 600, 950 500 S 1450 400, 1650 470",
  "M -50 780 C 350 700, 700 840, 1050 740 S 1500 640, 1650 700",
];

const GRID_X = Array.from({ length: 17 }, (_, i) => i * 100);
const GRID_Y = Array.from({ length: 10 }, (_, i) => i * 100);

type Phase = "playing" | "exiting" | "done";

export default function IntroVoyage() {
  const { complete } = useIntro();
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("playing");

  const pathRef = useRef<SVGPathElement>(null);
  const pathLenRef = useRef(0);
  const progress = useMotionValue(0);
  const boatX = useMotionValue(460);
  const boatY = useMotionValue(590);
  const boatRotate = useMotionValue(0);

  const tangentAt = (p: number) => {
    const path = pathRef.current;
    if (!path) return;
    if (!pathLenRef.current) pathLenRef.current = path.getTotalLength();
    const len = pathLenRef.current;
    const a = path.getPointAtLength(Math.max(p - 0.01, 0) * len);
    const b = path.getPointAtLength(Math.min(p + 0.01, 1) * len);
    return (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
  };

  useMotionValueEvent(progress, "change", (p) => {
    const path = pathRef.current;
    if (!path) return;
    if (!pathLenRef.current) pathLenRef.current = path.getTotalLength();
    const len = pathLenRef.current;
    const at = path.getPointAtLength(Math.min(p, 1) * len);
    const angle = tangentAt(p);
    boatX.set(at.x);
    boatY.set(at.y);
    if (angle !== undefined) boatRotate.set(angle * 0.4);
  });

  useLayoutEffect(() => {
    const angle = tangentAt(0);
    if (angle !== undefined) boatRotate.set(angle * 0.4);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const skip = useCallback(
    () => setPhase((ph) => (ph === "done" ? ph : "exiting")),
    []
  );

  useEffect(() => {
    if (phase !== "playing") return;
    if (reduce) {
      const t = setTimeout(() => setPhase("exiting"), 150);
      return () => clearTimeout(t);
    }
    const controls = animate(progress, 1, {
      delay: PATH_DRAW_DELAY,
      duration: PATH_DRAW_DURATION,
      ease: EASE,
    });
    const t = setTimeout(() => setPhase("exiting"), EXIT_AT * 1000);
    return () => {
      controls.stop();
      clearTimeout(t);
    };
  }, [phase, reduce, progress]);

  useEffect(() => {
    if (phase === "done") {
      complete();
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        skip();
        return;
      }
      if (
        [" ", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(
          e.key
        )
      ) {
        e.preventDefault();
      }
    };
    const block = (e: Event) => e.preventDefault();
    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", block, { passive: false });
    window.addEventListener("touchmove", block, { passive: false });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", block);
      window.removeEventListener("touchmove", block);
    };
  }, [phase, complete, skip]);

  if (phase === "done") return null;

  const exiting = phase === "exiting";

  return (
    <>
      <style>{"html{scrollbar-color:transparent transparent}"}</style>
      <motion.div
        aria-hidden="true"
        onClick={skip}
      className="fixed inset-0 z-50 cursor-pointer bg-foam-50"
      initial={false}
      animate={
        exiting
          ? reduce
            ? { opacity: 0 }
            : { clipPath: "inset(0 0 100% 0)" }
          : reduce
            ? { opacity: 1 }
            : { clipPath: "inset(0 0 0% 0)" }
      }
      transition={{ duration: reduce ? 0.3 : 0.4, ease: EASE }}
      onAnimationComplete={() => {
        if (exiting) setPhase("done");
      }}
    >
      <motion.svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        initial={{ scale: 1.03 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.9, ease: EASE }}
        style={{ transformOrigin: "center" }}
      >
        {/* lat/long grid */}
        <motion.g
          stroke="#8fb8dd"
          strokeWidth={1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.18 }}
          transition={{ duration: 0.45, delay: 0, ease: "easeOut" }}
        >
          {GRID_X.map((x) => (
            <line key={`x${x}`} x1={x} y1={0} x2={x} y2={900} />
          ))}
          {GRID_Y.map((y) => (
            <line key={`y${y}`} x1={0} y1={y} x2={1600} y2={y} />
          ))}
        </motion.g>

        {/* depth contours */}
        <motion.g
          fill="none"
          stroke="#8fb8dd"
          strokeWidth={1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
        >
          {CONTOURS.map((d) => (
            <path key={d} d={d} />
          ))}
        </motion.g>

        {/* compass rose */}
        <motion.g
          transform="translate(1440 760)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
          stroke="#1e4976"
          fill="#1e4976"
        >
          <circle r={46} fill="none" strokeWidth={1.5} />
          <circle r={4} stroke="none" />
          <path d="M0 -42 L8 -8 L42 0 L8 8 L0 42 L-8 8 L-42 0 L-8 -8 Z" strokeWidth={1} />
          <path d="M0 -42 L8 -8 L0 0 L-8 -8 Z" stroke="none" />
        </motion.g>

        {!reduce && (
          <>
            {/* course path — revealed via mask so the dash pattern survives */}
            <defs>
              <mask
                id="course-mask"
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={1600}
                height={900}
              >
                <motion.path
                  d={COURSE_D}
                  fill="none"
                  stroke="white"
                  strokeWidth={8}
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: PATH_DRAW_DELAY,
                    duration: PATH_DRAW_DURATION,
                    ease: EASE,
                  }}
                />
              </mask>
            </defs>
            <motion.path
              ref={pathRef}
              d={COURSE_D}
              fill="none"
              stroke="#0f2a4a"
              strokeWidth={2}
              strokeDasharray="10 10"
              strokeLinecap="round"
              mask="url(#course-mask)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />

            {/* boat glyph */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{
                x: boatX,
                y: boatY,
                rotate: boatRotate,
                transformBox: "fill-box",
                transformOrigin: "center",
              }}
              fill="#0f2a4a"
            >
              <g transform="scale(1.6)">
                <path d="M -14 6 L 14 6 L 9 12 L -9 12 Z" />
                <path d="M -1 4 L -1 -14 L 10 4 Z" />
                <path d="M -3 4 L -3 -9 L -11 4 Z" />
              </g>
            </motion.g>

            {/* waypoint marker at path end */}
            <motion.g
              transform="translate(1180 340)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.1, duration: 0.3, ease: EASE }}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            >
              <line x1={-8} y1={0} x2={8} y2={0} stroke="#0f2a4a" strokeWidth={2} />
              <line x1={0} y1={-8} x2={0} y2={8} stroke="#0f2a4a" strokeWidth={2} />
              <circle r={12} fill="none" stroke="#0f2a4a" strokeWidth={1.5} />
            </motion.g>
          </>
        )}
        {reduce && (
          <path
            ref={pathRef}
            d={COURSE_D}
            fill="none"
            stroke="#0f2a4a"
            strokeWidth={2}
            strokeDasharray="10 10"
            strokeLinecap="round"
            opacity={0.4}
          />
        )}
      </motion.svg>
    </motion.div>
    </>
  );
}
