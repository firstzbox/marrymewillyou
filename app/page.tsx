"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Hero from "@/components/Hero";
import Story from "@/components/Story";
import FinalMessage from "@/components/FinalMessage";
import LookUp from "@/components/TurnAround";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <Hero />
          <Story />
          <FinalMessage />
          <LookUp />
        </motion.main>
      )}
    </>
  );
}