import FadeIn from "./FadeIn";

export default function LoveLetter() {
  return (
    <section className="bg-gradient-to-b from-[#FFFDF9] to-[#FFF6F2] px-6 py-32">
      <FadeIn>
        <div className="max-w-3xl mx-auto rounded-[40px] bg-white border border-[#F4E7E1] shadow-2xl p-10 md:p-16">

          <p className="uppercase tracking-[0.4em] text-pink-400 text-sm mb-6">
            To My Dearest Bubu ❤️
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-12">
            A Letter To You
          </h2>

          <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-10">

            <p>
              Before today, I wanted us to take one more journey through all the
              beautiful memories we've shared together.
            </p>

            <p>
              Looking back, I realize it was never the places we visited that
              made those moments unforgettable. It was simply because I was
              experiencing them with you.
            </p>

            <p>
              Thank you for your patience, your kindness, your laughter, and
              for always believing in me. You have brought so much happiness
              into my life, more than words could ever express.
            </p>

            <p>
              You make ordinary days feel extraordinary. Even the smallest
              moments become memories I want to keep forever because they're
              spent with you.
            </p>

            <p>
              Every chapter we've shared together has made me certain of one
              thing: my favorite place has never been a city or a country—it's
              wherever you are.
            </p>

            <p>
              Thank you for loving me, supporting me, and walking beside me.
              No matter what the future holds, I promise to continue choosing
              you, every single day.
            </p>

            <div className="pt-10">
              <p className="mb-3">
                Love always,
              </p>

              <h3 className="text-4xl md:text-5xl font-bold text-pink-500">
                Bibi ❤️
              </h3>
            </div>

          </div>

        </div>
      </FadeIn>
    </section>
  );
}