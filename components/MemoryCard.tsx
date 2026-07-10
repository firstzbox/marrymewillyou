"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

interface MemoryCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
}

export default function MemoryCard({
  id,
  image,
  title,
  description,
  reverse = false,
}: MemoryCardProps) {
  return (
    <section className="min-h-screen flex items-center bg-[#FFF8F5] px-6 py-20">
      <FadeIn>
        <div
          className={`max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image */}

          <div className="relative">

            <Image
              src={image}
              alt={title}
              width={800}
              height={1000}
              className="w-full h-[500px] md:h-[720px] rounded-[36px] object-cover shadow-2xl transition-all duration-700 hover:scale-[1.02]"
            />

            <div className="absolute top-6 left-6 rounded-full bg-white/90 backdrop-blur-md px-5 py-2 shadow-lg">
              <span className="font-semibold text-gray-700">
                {id.toString().padStart(2, "0")} / 10
              </span>
            </div>

          </div>

          {/* Text */}

          <div>

            <p className="uppercase tracking-[0.35em] text-pink-400 text-sm mb-5">
              Memory {id}
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              {title}
            </h2>

            <p className="text-xl leading-9 text-gray-600">
              {description}
            </p>

          </div>

        </div>
      </FadeIn>
    </section>
  );
}