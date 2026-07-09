import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <Image
        src="/images/Us.jpeg"
        alt="Us together"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-6xl mb-6">❤️</h1>

        <h2 className="text-5xl font-bold mb-6">
          Dear Bubu
        </h2>

        <p className="text-2xl max-w-2xl">
          Every love story is beautiful,
          <br />
          but ours is my favorite.
        </p>
      </div>
    </section>
  );
}