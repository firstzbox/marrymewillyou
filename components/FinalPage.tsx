"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  "Every laugh.",
  "Every adventure.",
  "Every road we travelled.",
  "Every celebration.",
  "Every challenge we overcame.",
  "",
  "Has led me here.",
  "",
  "Thank you",
  "for loving me,",
  "for believing in me,",
  "for always standing by my side.",
  "",
  "I have one last thing",
  "I'd like to tell you.",
  "",
  "Please look up. ❤️",
];

export default function FinalPage() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= lines.length) return;

    const timer = setTimeout(() => {
      setVisible((v) => v + 1);
    }, visible < 6 ? 1200 : 900);

    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}

      <Image
        src="/images/Love.jpeg"
        alt="Our Love"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

      {/* Content */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-8">

        <div className="max-w-3xl text-center text-white">

          <AnimatePresence>

            {lines.slice(0, visible).map((line, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
              >
                {line === "" ? (
                  <div className="h-7" />
                ) : (
                  <p
                    className={`${
                      line === "Please look up. ❤️"
                        ? "text-4xl md:text-6xl font-bold mt-12"
                        : line === "❤️"
                        ? "text-6xl my-8"
                        : "text-xl md:text-3xl leading-relaxed mb-5"
                    }`}
                  >
                    {line}
                  </p>
                )}
              </motion.div>
            ))}

          </AnimatePresence>

        </div>

      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}