import Image from "next/image";
import { story } from "@/data/story";

export default function StorySection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto">

        {story.map((chapter, index) => (
          <div
            key={chapter.id}
            className={`grid md:grid-cols-2 gap-12 items-center mb-32 px-6 ${
              index % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
            }`}
          >

            <div>
              <Image
                src={chapter.image}
                alt={chapter.title}
                width={700}
                height={900}
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>

            <div>

              <p className="text-pink-500 font-semibold mb-2">
                Chapter {chapter.id}
              </p>

              <h2 className="text-5xl font-bold mb-6">
                {chapter.title}
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                {chapter.description}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}