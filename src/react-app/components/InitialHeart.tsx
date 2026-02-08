import { useState } from "react";
import { Button } from "@/react-app/components/ui/button";

interface InitialHeartProps {
  onComplete: () => void;
}

export default function InitialHeart({ onComplete }: InitialHeartProps) {
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    // Play a sound here when the customer provides it
    const audio = new Audio("/click-sound.mp3");
    audio.play().catch(() => {
      // Sound file not found yet, that's okay
    });

    if (clickCount === 0) {
      setShowMessage(true);
      setClickCount(1);
      setTimeout(() => setShowMessage(false), 1500);
    } else if (clickCount === 1) {
      setShowMessage(true);
      setClickCount(2);
      setTimeout(() => {
        onComplete();
      }, 800);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
      <div className="relative">
        <Button
          onClick={handleClick}
          className="w-64 h-64 rounded-full bg-blue-400 hover:bg-blue-300 transition-all duration-300 hover:scale-110 shadow-2xl border-4 border-white"
          style={{ padding: 0 }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="w-40 h-40"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </Button>

        {showMessage && (
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold animate-bounce whitespace-nowrap">
            {clickCount === 1 ? "Click again!" : "One more time!"}
          </div>
        )}
      </div>
    </div>
  );
}
