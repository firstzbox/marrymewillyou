"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CoupleTitle from "@/components/CoupleTitle";

export default function LoadingScreen() {
  const [dots, setDots] = useState(".");
  const [hideLoading, setHideLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return ".";
        return prev + ".";
      });
    }, 500);

    const timer = setTimeout(() => {
      setHideLoading(true);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-white"
    >
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-400 sm:text-sm md:text-base"
        >
          17 July 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-7"
        >
          <CoupleTitle className="text-gray-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
        </motion.div>

        <motion.div
          animate={{
            opacity: hideLoading ? 0 : 0.75,
            y: hideLoading ? -10 : 0,
          }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-sm text-gray-500 sm:text-base md:text-lg"
        >
          <motion.span
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-red-300"
          >
            ❤
          </motion.span>

          <p>Loading our story{dots}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}