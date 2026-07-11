import Image from "next/image";


export default function Hero() {
  return (
    <section className="relative h-screen">
      {/* Background */}
      <Image
        src="/images/cover.jpeg"
        alt="Bibi and Bubu"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-100 text-center text-white">

        <p className="mb-4 text-lg uppercase tracking-[0.4em]">
          17 July 2026
        </p>

        <h1 className="mb-6 text-6xl font-light md:text-7xl">
          Bibi
          <span className="mx-4 text-red-300">❤</span>
          Bubu
        </h1>

        <p className="max-w-xl text-lg leading-8 md:text-xl">
          Every love story is beautiful,
          but ours is my favourite.
        </p>

        <div className="absolute bottom-12 animate-bounce text-sm tracking-widest">
          SCROLL
        </div>
      </div>
    </section>
  );
}