export default function SectionDivider() {
  return (
    <section className="bg-[#FFF8F5] py-20">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-6 px-6">
        <div className="flex-1 h-px bg-pink-200" />

        <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-xl">
          ❤️
        </div>

        <div className="flex-1 h-px bg-pink-200" />
      </div>
    </section>
  );
}