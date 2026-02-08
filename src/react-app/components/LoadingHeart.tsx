import { useEffect } from "react";

interface LoadingHeartProps {
  onComplete: () => void;
}

export default function LoadingHeart({ onComplete }: LoadingHeartProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-300 via-rose-300 to-red-300 flex items-center justify-center overflow-hidden">
      {/* Animated particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.2}s`,
            opacity: 0.3,
          }}
        >
          <div className="w-2 h-2 bg-pink-500 rounded-full" />
        </div>
      ))}

      {/* Main loading heart */}
      <div className="relative">
        <svg
          width="200"
          height="200"
          viewBox="0 0 100 100"
          className="animate-[heartbeat_1s_ease-in-out_infinite]"
        >
          <defs>
            <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <animate
                attributeName="x1"
                values="0%;100%;0%"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y1"
                values="0%;100%;0%"
                dur="3s"
                repeatCount="indefinite"
              />
              <stop offset="0%" stopColor="#ec4899">
                <animate
                  attributeName="stop-color"
                  values="#ec4899;#f43f5e;#ec4899"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#f43f5e">
                <animate
                  attributeName="stop-color"
                  values="#f43f5e;#ec4899;#f43f5e"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M50 85 L20 55 Q15 50 15 42 Q15 30 25 25 Q35 20 45 30 L50 35 L55 30 Q65 20 75 25 Q85 30 85 42 Q85 50 80 55 Z"
            fill="url(#heartGradient)"
            filter="url(#glow)"
          />
        </svg>

        {/* Ripple effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-40 h-40 border-4 border-pink-400 rounded-full animate-[ripple_2s_ease-out_infinite] opacity-0" />
          <div className="absolute w-40 h-40 border-4 border-pink-400 rounded-full animate-[ripple_2s_ease-out_infinite] opacity-0" style={{ animationDelay: "0.5s" }} />
          <div className="absolute w-40 h-40 border-4 border-pink-400 rounded-full animate-[ripple_2s_ease-out_infinite] opacity-0" style={{ animationDelay: "1s" }} />
        </div>
      </div>

      {/* Loading text */}
      <div className="absolute bottom-32">
        <p className="text-3xl font-bold text-white drop-shadow-lg animate-pulse">
          Preparing something special...
        </p>
      </div>

      {/* Floating hearts around */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`heart-${i}`}
          className="absolute animate-[floatHeart_3s_ease-in-out_infinite]"
          style={{
            left: `${(i * 12) + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            animationDelay: `${i * 0.4}s`,
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="opacity-40">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#fff"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
