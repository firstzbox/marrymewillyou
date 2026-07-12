interface CoupleTitleProps {
  className?: string;
}

export default function CoupleTitle({
  className = "",
}: CoupleTitleProps) {
  return (
    <h1
      className={`flex flex-wrap items-center justify-center gap-2 text-center font-light leading-tight sm:gap-3 md:gap-4 ${className}`}
    >
      <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Bibi
      </span>

      <span
        aria-hidden="true"
        className="text-red-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      >
        ❤
      </span>

      <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Bubu
      </span>
    </h1>
  );
}