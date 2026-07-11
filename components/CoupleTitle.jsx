export default function CoupleTitle({ className = "" }) {
  return (
    <h1
      className={`whitespace-nowrap text-5xl font-light sm:text-6xl md:text-7xl ${className}`}
    >
      Bibi
      <span className="mx-3 text-red-300 sm:mx-4">
        ❤
      </span>
      Bubu
    </h1>
  );
}