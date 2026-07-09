import Image from "next/image";

export default function Proposal() {
  return (
    <section className="relative h-screen">

      <Image
        src="/images/Love.jpeg"
        alt="Our love"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">

        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          One Last Question...
        </h2>

        <p className="text-xl md:text-2xl max-w-2xl mb-10">
          Every memory we've shared has led us to this moment.
        </p>

        <h1 className="text-6xl md:text-8xl font-bold">
          Will You Marry Me? 💍
        </h1>

      </div>

    </section>
  );
}