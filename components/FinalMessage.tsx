import Image from "next/image";

export default function FinalMessage() {
  return (
    <section className="bg-rose-50 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Photo */}
          <div>
            <Image
              src="/images/Us.jpeg"
              alt="Us"
              width={700}
              height={900}
              className="w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>

          {/* Message */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-rose-400">
              One Last Thing...
            </p>

            <h2 className="mb-10 text-5xl font-light">
              Thank You ❤️
            </h2>

            <div className="space-y-6 text-lg leading-9 text-gray-700">
              <p>
                Thank you for every laugh we've shared.
              </p>

              <p>
                Thank you for every adventure we've been on.
              </p>

              <p>
                Thank you for believing in me, supporting me, and loving me for
                who I am.
              </p>

              <p>
                Thank you for making the past two years the happiest years of my
                life.
              </p>

              <p>
                Every memory you've just seen reminds me how lucky I am to have
                you by my side.
              </p>

              <p className="pt-6 text-2xl font-light text-black">
                There's just one more thing I'd like to tell you...
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}