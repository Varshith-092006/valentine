import { useEffect, useState } from "react";

interface PuppyWalkingProps {
  onComplete: () => void;
}

export default function PuppyWalking({ onComplete }: PuppyWalkingProps) {
  const [position, setPosition] = useState(-20);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= 120) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return prev;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center overflow-hidden">
      <div className="absolute bottom-20 transition-all duration-100 ease-linear" style={{ left: `${position}%` }}>
        <div className="animate-bounce">
          <svg width="120" height="120" viewBox="0 0 200 200" fill="none">
            {/* Golden Retriever Puppy */}
            <ellipse cx="100" cy="140" rx="50" ry="35" fill="#DAA520" />
            <circle cx="100" cy="100" r="45" fill="#DAA520" />
            <circle cx="85" cy="95" r="8" fill="#2C1810" />
            <circle cx="115" cy="95" r="8" fill="#2C1810" />
            <ellipse cx="100" cy="110" rx="15" ry="10" fill="#8B6914" />
            <circle cx="100" cy="115" r="5" fill="#2C1810" />
            <ellipse cx="60" cy="90" rx="20" ry="25" fill="#DAA520" />
            <ellipse cx="140" cy="90" rx="20" ry="25" fill="#DAA520" />
            <rect x="70" y="155" width="15" height="30" rx="5" fill="#DAA520" />
            <rect x="115" y="155" width="15" height="30" rx="5" fill="#DAA520" />
            <path d="M 140 140 Q 160 130 170 145" stroke="#DAA520" strokeWidth="8" fill="none" />
          </svg>
        </div>
        <div className="text-center mt-2 text-sm text-gray-600 font-medium">Loading...</div>
      </div>
    </div>
  );
}
