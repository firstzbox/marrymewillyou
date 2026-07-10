"use client";

const hearts = [
  { left: "5%", delay: "0s", duration: "18s", size: "text-lg" },
  { left: "15%", delay: "4s", duration: "20s", size: "text-xl" },
  { left: "28%", delay: "2s", duration: "17s", size: "text-base" },
  { left: "40%", delay: "7s", duration: "22s", size: "text-2xl" },
  { left: "52%", delay: "3s", duration: "19s", size: "text-lg" },
  { left: "65%", delay: "5s", duration: "21s", size: "text-xl" },
  { left: "78%", delay: "1s", duration: "16s", size: "text-base" },
  { left: "90%", delay: "6s", duration: "23s", size: "text-xl" },
];

export default function FloatingHearts() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {hearts.map((heart, index) => (
        <span
          key={index}
          className={`${heart.size} absolute text-pink-200/40 animate-heart select-none`}
          style={{
            left: heart.left,
            bottom: "-60px",
            animationDelay: heart.delay,
            animationDuration: heart.duration,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}