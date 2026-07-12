import Image from "next/image";
import CoupleTitle from "./CoupleTitle";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/images/cover.jpeg"
        alt="Bibi and Bubu"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16 text-center text-white">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-white/90 sm:text-sm md:text-base">
          17 July 2026
        </p>

        <CoupleTitle className="mb-6 text-white" />

        <p className="max-w-xs text-base leading-7 text-white/90 sm:max-w-md sm:text-lg sm:leading-8 md:max-w-2xl md:text-xl">
          Every love story is beautiful,
          <br />
          but ours is my favourite.
        </p>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center animate-bounce">
          <span className="mb-2 text-[11px] tracking-[0.35em] text-white/80">
            SCROLL
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}