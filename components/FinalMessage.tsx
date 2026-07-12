import Image from "next/image";

export default function FinalMessage() {
  return (
    <section className="bg-gradient-to-b from-rose-50 to-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:gap-16 md:grid-cols-2">
          {/* Photo */}
          <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/Us.jpeg"
                alt="Us"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Message */}
          <div className="text-center md:text-left">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-rose-400 sm:text-sm">
              One Last Thing...
            </p>

            <h2 className="mb-8 text-4xl font-light sm:text-5xl lg:text-6xl">
              Thank You ❤️
            </h2>

            <div className="space-y-6 text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
              <p>Thank you for every laughter we've shared.</p>

              <p>Thank you for every adventure we've taken together.</p>

              <p>Thank you for always being by my side and loving me for who I am.</p>

              <p>Thank you for making the past two years so beautiful, meaningful, and unforgettable.</p>

              <p>Every memory we've created reminds me how incredibly lucky I am to have you by my side.</p>

              <div className="pt-4">
                <div className="mx-auto mb-6 h-px w-24 bg-rose-200 md:mx-0" />

                <p className="text-xl font-light text-black sm:text-2xl">
                  There's just one more thing...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}