import { useEffect, useState } from "react";

interface TeddyAnimationProps {
  onComplete: () => void;
}

export default function TeddyAnimation({ onComplete }: TeddyAnimationProps) {
  const [position, setPosition] = useState(-30);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text after a short delay
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 500);

    // Animate teddy bears walking
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= 35) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 2000);
          return prev;
        }
        return prev + 0.5;
      });
    }, 30);

    return () => {
      clearInterval(interval);
      clearTimeout(textTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-200 via-rose-200 to-red-200 flex items-center justify-center overflow-hidden">
      {/* Walking teddy bears */}
      <div
        className="absolute transition-all duration-100 ease-linear"
        style={{
          left: `${position}%`,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <div className="flex items-center gap-8">
          {/* First teddy bear (leading) */}
          <div className="animate-bounce" style={{ animationDuration: "0.8s" }}>
            <svg width="140" height="180" viewBox="0 0 140 180" fill="none">
              {/* Head */}
              <circle cx="70" cy="50" r="35" fill="#8B4513" />
              {/* Ears */}
              <circle cx="45" cy="30" r="18" fill="#A0522D" />
              <circle cx="95" cy="30" r="18" fill="#A0522D" />
              {/* Snout */}
              <ellipse cx="70" cy="60" rx="20" ry="15" fill="#D2B48C" />
              <circle cx="70" cy="65" r="6" fill="#654321" />
              {/* Eyes */}
              <circle cx="60" cy="45" r="5" fill="#000" />
              <circle cx="80" cy="45" r="5" fill="#000" />
              <circle cx="62" cy="43" r="2" fill="#FFF" />
              <circle cx="82" cy="43" r="2" fill="#FFF" />
              {/* Smile */}
              <path d="M 60 68 Q 70 73 80 68" stroke="#654321" strokeWidth="2" fill="none" />
              {/* Body */}
              <ellipse cx="70" cy="110" rx="40" ry="45" fill="#8B4513" />
              <ellipse cx="70" cy="115" rx="25" ry="30" fill="#D2B48C" />
              {/* Arms */}
              <ellipse cx="35" cy="100" rx="12" ry="25" fill="#8B4513" transform="rotate(-20 35 100)" />
              <ellipse cx="105" cy="100" rx="12" ry="25" fill="#8B4513" transform="rotate(20 105 100)" />
              {/* Extended arm holding hand */}
              <ellipse cx="115" cy="95" rx="10" ry="20" fill="#8B4513" transform="rotate(45 115 95)" />
              {/* Legs */}
              <ellipse cx="55" cy="150" rx="12" ry="25" fill="#8B4513" />
              <ellipse cx="85" cy="150" rx="12" ry="25" fill="#8B4513" />
              {/* Feet */}
              <ellipse cx="55" cy="170" rx="15" ry="8" fill="#654321" />
              <ellipse cx="85" cy="170" rx="15" ry="8" fill="#654321" />
              {/* Heart on belly */}
              <path d="M 70 105 L 68 103 Q 65 100 65 97 Q 65 94 67 94 Q 70 94 70 97 Q 70 94 73 94 Q 75 94 75 97 Q 75 100 72 103 Z" fill="#FF69B4" />
            </svg>
          </div>

          {/* Holding hands connection */}
          <div className="relative" style={{ width: "40px", height: "20px", marginTop: "40px" }}>
            <svg width="40" height="20" viewBox="0 0 40 20">
              <path d="M 0 10 Q 20 5 40 10" stroke="#8B4513" strokeWidth="8" fill="none" strokeLinecap="round" />
            </svg>
          </div>

          {/* Second teddy bear (following) */}
          <div className="animate-bounce" style={{ animationDuration: "0.8s", animationDelay: "0.2s" }}>
            <svg width="130" height="170" viewBox="0 0 130 170" fill="none">
              {/* Head */}
              <circle cx="65" cy="45" r="32" fill="#CD853F" />
              {/* Ears */}
              <circle cx="42" cy="27" r="16" fill="#DEB887" />
              <circle cx="88" cy="27" r="16" fill="#DEB887" />
              {/* Snout */}
              <ellipse cx="65" cy="54" rx="18" ry="13" fill="#F4A460" />
              <circle cx="65" cy="58" r="5" fill="#654321" />
              {/* Eyes */}
              <circle cx="56" cy="42" r="4" fill="#000" />
              <circle cx="74" cy="42" r="4" fill="#000" />
              <circle cx="58" cy="40" r="1.5" fill="#FFF" />
              <circle cx="76" cy="40" r="1.5" fill="#FFF" />
              {/* Smile */}
              <path d="M 56 62 Q 65 66 74 62" stroke="#654321" strokeWidth="2" fill="none" />
              {/* Body */}
              <ellipse cx="65" cy="100" rx="37" ry="42" fill="#CD853F" />
              <ellipse cx="65" cy="105" rx="23" ry="28" fill="#F4A460" />
              {/* Arms */}
              <ellipse cx="32" cy="92" rx="11" ry="23" fill="#CD853F" transform="rotate(-15 32 92)" />
              {/* Extended arm to hold hand */}
              <ellipse cx="20" cy="88" rx="9" ry="18" fill="#CD853F" transform="rotate(-45 20 88)" />
              <ellipse cx="98" cy="92" rx="11" ry="23" fill="#CD853F" transform="rotate(15 98 92)" />
              {/* Legs */}
              <ellipse cx="52" cy="138" rx="11" ry="23" fill="#CD853F" />
              <ellipse cx="78" cy="138" rx="11" ry="23" fill="#CD853F" />
              {/* Feet */}
              <ellipse cx="52" cy="157" rx="13" ry="7" fill="#654321" />
              <ellipse cx="78" cy="157" rx="13" ry="7" fill="#654321" />
              {/* Bow */}
              <path d="M 55 25 L 65 20 L 75 25 L 65 28 Z" fill="#FF1493" />
              <circle cx="65" cy="25" r="3" fill="#FF69B4" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating hearts */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 80 + 10}%`,
            animationDelay: `${i * 0.4}s`,
            opacity: 0.4,
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#FF69B4"
            />
          </svg>
        </div>
      ))}

      {/* Text overlay */}
      {showText && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-[fadeIn_1s_ease-in]">
          <div className="bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-xl border-2 border-pink-400">
            <p className="text-2xl font-bold text-pink-600 text-center">
              Let me show you something special...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
