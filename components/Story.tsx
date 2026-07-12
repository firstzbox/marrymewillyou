import Image from "next/image";
import FadeInSection from "./FadeInSection";

const moments = [
  {
    image: "/images/HK.jpeg",
    title: "Where It All Began",
    subtitle: "Hong Kong",
    text: "The trip where we truly opened our hearts to each other. We shared our dreams, our fears, and everything in between. Looking back, I believe this was where our story really began.",
  },
  {
    image: "/images/First Date.jpeg",
    title: "Our First Date",
    subtitle: "A New Beginning",
    text: "I still remember how nervous and excited I was. Somehow, being with you just felt easy. From that day on, I knew I wanted to spend more time with you.",
  },
  {
    image: "/images/First Trip.jpeg",
    title: "Our First Adventure Together",
    subtitle: "Our First Adventure",
    text: "Our first adventure together became a memory I'll always treasure. It wasn't about where we went, but the fact that we experienced it together. Every place is better with you beside me.",
  },
  {
    image: "/images/Bali.jpeg",
    title: "Beach Days",
    subtitle: "Bali",
    text: "Watching the sunset with you reminded me that every beautiful view is even better when we're together. Bali gave us memories I'll cherish forever.",
  },
  {
    image: "/images/Birthday.jpeg",
    title: "Celebrating You",
    subtitle: "Your Birthday",
    text: "Seeing you smile is my favourite gift. Celebrating your birthday with you filled my heart with happiness and reminded me how lucky I am to have you.",
  },
  {
    image: "/images/Valentines.jpeg",
    title: "Valentine's Day",
    subtitle: "A Day of Love",
    text: "I fall in love with you a little more every single day. Thank you for making not just Valentine's Day, but every day, feel so special.",
  },
  {
    image: "/images/Anniversary0.5.jpeg",
    title: "A Beautiful Surprise",
    subtitle: "Half-Year Anniversary",
    text: "You surprised me with a sunflower. It wasn't just the flower I remembered, but the love, thoughtfulness, and happiness behind such a simple yet meaningful gesture.",
  },
  {
    image: "/images/Anniversary.jpeg",
    title: "One Year Together",
    subtitle: "Our First Anniversary",
    text: "One year filled with laughter, adventures, and countless memories. Thank you for choosing me every single day. I can't wait to create many more memories with you.",
  },
  {
    image: "/images/Christmas.jpeg",
    title: "Christmas Together",
    subtitle: "The Holidays",
    text: "The holidays became warmer, brighter, and so much more meaningful because I got to spend them with you. Every Christmas wish came true the moment I had you by my side.",
  },
  {
    image: "/images/Ringmaking.jpeg",
    title: "A Special Memory",
    subtitle: "Making Rings Together",
    text: "Making rings together became one of my favourite memories. It was our first couple activity, and looking back now, it reminds me how every little moment with you has been leading us to today.",
  },
];

export default function Story() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <h2 className="mb-5 text-center text-4xl font-light sm:text-5xl lg:text-6xl">
          Our Story
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-base leading-8 text-gray-500 sm:mb-20 sm:text-lg">
          Every memory we've shared has brought us one step closer to this
          moment. Thank you for making the past two years the happiest chapter
          of my life.
        </p>

        <div className="space-y-16 sm:space-y-24 lg:space-y-28">
          {moments.map((moment, index) => (
            <FadeInSection key={moment.title}>
              <div
                className={`grid items-center gap-10 lg:gap-16 md:grid-cols-2 ${
                  index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
                  <div className="relative aspect-[4/5] sm:aspect-[16/10] md:aspect-[4/5]">
                    <Image
                      src={moment.image}
                      alt={moment.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="text-center md:text-left">
                  <p className="mb-3 text-xs uppercase tracking-[0.35em] text-rose-400 sm:text-sm">
                    {moment.subtitle}
                  </p>

                  <h3 className="mb-5 text-3xl font-light sm:text-4xl lg:text-5xl">
                    {moment.title}
                  </h3>

                  <p className="text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
                    {moment.text}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}