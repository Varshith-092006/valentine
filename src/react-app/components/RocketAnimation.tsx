import { useEffect, useState } from "react";

interface RocketAnimationProps {
  onComplete: () => void;
}

export default function RocketAnimation({ onComplete }: RocketAnimationProps) {
  const [rocketY, setRocketY] = useState(-100);
  const [stars, setStars] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Generate random stars
    const starArray = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
    }));
    setStars(starArray);

    // Animate rocket diving
    const animationInterval = setInterval(() => {
      setRocketY((prev) => {
        if (prev >= 110) {
          clearInterval(animationInterval);
          return prev;
        }
        return prev + 2;
      });
    }, 30);

    // Fade out and complete after 5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5500);

    return () => {
      clearInterval(animationInterval);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-b from-purple-900 via-pink-900 to-red-900 overflow-hidden transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Twinkling stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: "1.5s",
          }}
        />
      ))}

      {/* Floating hearts in space */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={`heart-${i}`}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: "4s",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="rgba(255, 182, 193, 0.6)"
            />
          </svg>
        </div>
      ))}

      {/* Heart Rocket */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-100"
        style={{
          top: `${rocketY}%`,
        }}
      >
        <div className="relative">
          {/* Rocket trail */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-16 h-32 bg-gradient-to-b from-pink-400 via-red-400 to-transparent opacity-70 blur-sm" />
          
          {/* Main heart rocket */}
          <svg width="100" height="100" viewBox="0 0 100 100" className="drop-shadow-2xl">
            {/* Heart shape */}
            <path
              d="M50 85 L20 55 Q10 45 10 30 Q10 15 22.5 15 Q35 15 42.5 25 Q42.5 25 50 35 Q57.5 25 57.5 25 Q65 15 77.5 15 Q90 15 90 30 Q90 45 80 55 Z"
              fill="url(#gradient-rocket)"
              stroke="#FFD700"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="gradient-rocket" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF69B4" />
                <stop offset="50%" stopColor="#FF1493" />
                <stop offset="100%" stopColor="#DC143C" />
              </linearGradient>
            </defs>
            
            {/* Window */}
            <circle cx="50" cy="40" r="10" fill="#87CEEB" opacity="0.8" />
            
            {/* Stars on rocket */}
            <circle cx="35" cy="35" r="2" fill="#FFD700" />
            <circle cx="65" cy="35" r="2" fill="#FFD700" />
            <circle cx="50" cy="25" r="2" fill="#FFD700" />
          </svg>

          {/* Sparkles around rocket */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute animate-ping"
              style={{
                left: `${Math.cos((i * Math.PI * 2) / 8) * 60 + 50}px`,
                top: `${Math.sin((i * Math.PI * 2) / 8) * 60 + 50}px`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1s",
              }}
            >
              <div className="w-2 h-2 bg-yellow-300 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Text overlay */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-white text-3xl font-bold animate-pulse drop-shadow-lg">
        </div>
      </div>
    </div>
  );
}
