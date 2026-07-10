import MemoryCard from "./MemoryCard";
import { story } from "@/data/story";

export default function StorySection() {
  return (
    <>
      {/* Intro */}

      <section className="bg-[#FFF8F5] pt-28 pb-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.45em] text-pink-400 text-sm mb-5">
            Our Journey
          </p>

          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Every Memory
            <br />
            Led Me Here
          </h2>

          <p className="text-xl text-gray-600 leading-9 max-w-2xl mx-auto">
            Every photo tells a story.
            <br />
            Every story reminds me why
            <br />
            I fell in love with you.
          </p>

        </div>

      </section>

      {/* Memories */}

      {story.map((memory, index) => (
        <MemoryCard
          key={memory.id}
          id={memory.id}
          image={memory.image}
          title={memory.title}
          description={memory.description}
          reverse={index % 2 === 1}
        />
      ))}

      {/* Ending */}

      <section className="bg-[#FFF8F5] py-28">

        <div className="text-center">

          <p className="uppercase tracking-[0.45em] text-pink-400 text-sm mb-4">
            To Be Continued...
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Our Best Memories
            <br />
            Are Still Ahead Of Us.
          </h2>

        </div>

      </section>
    </>
  );
}