import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/Us.jpeg"
        alt="Us Together"
        fill
        priority
        className="object-cover scale-110 transition-transform duration-[8000] hover:scale-105"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/70" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8">

        <p className="uppercase tracking-[0.45em] text-sm mb-8">
          FOR THE LOVE OF MY LIFE
        </p>

        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          Dear Bubu ❤️
        </h1>

        <p className="text-xl md:text-3xl leading-relaxed max-w-2xl">
          Before today...
          <br />
          I would like us to relive
          <br />
          our favorite memories together.
        </p>

        <div className="absolute bottom-12 flex flex-col items-center float">

          <span className="uppercase tracking-[0.3em] text-xs mb-2">
            Scroll
          </span>

          <span className="text-3xl">
            ↓
          </span>

        </div>

      </div>
    </section>
  );
}