import Image from "next/image";
import FadeInSection from "./FadeInSection";

const moments = [
  {
    image: "/images/HK.jpeg",
    title: "Where It All Began",
    subtitle: "Hong Kong",
    text: "The trip where we opened our hearts to each other and started something truly special.",
  },
  {
    image: "/images/First Date.jpeg",
    title: "Our First Date",
    subtitle: "A New Beginning",
    text: "I still remember how nervous and excited I was, not knowing this would become the start of our story.",
  },
  {
    image: "/images/First Trip.jpeg",
    title: "Our First Adventure Together",
    subtitle: "Our First Adventure",
    text: "Every journey became more meaningful because I got to experience it with you by my side.",
  },
  {
    image: "/images/Bali.jpeg",
    title: "Beach Days",
    subtitle: "Bali",
    text: "The sunsets were beautiful, especially when you're watching them with me.",
  },
  {
    image: "/images/Birthday.jpeg",
    title: "Celebrating You",
    subtitle: "Your Birthday",
    text: "Seeing your smile will always be one of my favourite moments.",
  },
  {
    image: "/images/Valentines.jpeg",
    title: "Valentine's Day",
    subtitle: "A Day of Love",
    text: "Every day with you gives me another reason to fall in love with you all over again.",
  },
  {
    image: "/images/Anniversary0.5.jpeg",
    title: "A Beautiful Surprise",
    subtitle: "Half-Year Anniversary",
    text: "My first flower, a simple gesture that became a memory I will always treasure.",
  },
  {
    image: "/images/Anniversary.jpeg",
    title: "One Year Together",
    subtitle: "Our First Anniversary",
    text: "One year filled with laughter, adventures, and countless memories.",
  },
  {
    image: "/images/Christmas.jpeg",
    title: "Christmas Together",
    subtitle: "The Holidays",
    text: "The holidays became warmer, brighter, and so much more meaningful.",
  },
  {
    image: "/images/Ringmaking.jpeg",
    title: "A Special Memory",
    subtitle: "Making Rings Together",
    text: "A reminder that every little moment we've shared has been bringing us closer to this day.",
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