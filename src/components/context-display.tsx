"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

type ContextDisplayProps = {
  initial: string;
  transition: string;
};

export default function ContextDisplay({
  initial,
  transition,
}: ContextDisplayProps) {
  const [showTransition, setShowTransition] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  const hasLeftTopRef = useRef(false);
  const transitionTimerRef = useRef<number | null>(null);
  const resetTimerRef = useRef<number | null>(null);

  const clearTimers = () => {
    if (transitionTimerRef.current !== null) {
      window.clearTimeout(transitionTimerRef.current);
      transitionTimerRef.current = null;
    }

    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  };

  const scheduleTransition = () => {
    clearTimers();

    transitionTimerRef.current = window.setTimeout(() => {
      setShowTransition(true);
      transitionTimerRef.current = null;
    }, 2500);

    resetTimerRef.current = window.setTimeout(() => {
      setShowTransition(false);
      resetTimerRef.current = null;
    }, 6500);
  };

  useEffect(() => {
    scheduleTransition();

    return clearTimers;
  }, [initial, transition]);

  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY <= 8;

      if (!isAtTop) {
        hasLeftTopRef.current = true;
        return;
      }

      if (hasLeftTopRef.current) {
        hasLeftTopRef.current = false;
        scheduleTransition();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-6 overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={showTransition ? "transition" : "initial"}
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 4,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : -4,
          }}
          transition={{
            duration: shouldReduceMotion ? 0.15 : 0.3,
            ease: "easeOut",
          }}
          className="text-sm tracking-[-0.01em] text-muted"
        >
          {showTransition ? transition : initial}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}