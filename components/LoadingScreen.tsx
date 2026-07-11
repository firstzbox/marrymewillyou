"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-white"
    >
      <div className="flex h-full flex-col items-center justify-center px-6 pb-100 text-center">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-lg uppercase tracking-[0.4em] text-gray-400"
        >
          17 July 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-6 text-6xl font-light text-gray-800 md:text-7xl"
        >
          Bibi
          <span className="mx-4 text-red-300">❤</span>
          Bubu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.5 }}
          className="max-w-xl text-lg leading-8 text-gray-500 md:text-xl"
        >
          Loading our story...
        </motion.p>

      </div>
    </motion.div>
  );
}