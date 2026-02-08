import { useEffect, useState } from "react";

interface LoveConfettiProps {
  onComplete: () => void;
}

export default function LoveConfetti({ onComplete }: LoveConfettiProps) {
  const [confetti, setConfetti] = useState<Array<{id: number; left: number; delay: number}>>([]);

  useEffect(() => {
    const hearts = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
    }));
    setConfetti(hearts);

    // Auto-complete after animation
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 flex items-center justify-center overflow-hidden">
      {/* Falling hearts confetti */}
      {confetti.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-[fall_3s_ease-in_forwards]"
          style={{
            left: `${heart.left}%`,
            top: "-50px",
            animationDelay: `${heart.delay}s`,
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#ec4899"
              opacity="0.8"
            />
          </svg>
        </div>
      ))}

      {/* Center message */}
      <div className="absolute z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-pink-600 drop-shadow-lg animate-[scaleIn_1s_ease-out]">
          Get Ready My LOVE 💕
        </h1>
      </div>
    </div>
  );
}
