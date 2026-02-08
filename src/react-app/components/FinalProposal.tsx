import { useState, useEffect } from "react";
import RocketAnimation from "@/react-app/components/RocketAnimation";
import { backgroundImage } from "@/react-app/data/imageCategories";

export default function FinalProposal() {
  const [showRocket, setShowRocket] = useState(true);
  const [showProposal, setShowProposal] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showLoveMessage, setShowLoveMessage] = useState(false);

  useEffect(() => {
    if (!showRocket && !showProposal) {
      const timer = setTimeout(() => {
        setShowProposal(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [showRocket, showProposal]);

  const handleNoHover = () => {
    const buttonWidth = 120;
    const buttonHeight = 60;
    const maxX = Math.max(0, window.innerWidth - buttonWidth);
    const maxY = Math.max(0, window.innerHeight - buttonHeight);
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleYesClick = () => {
    setShowLoveMessage(true);
  };

  if (showRocket) {
    return <RocketAnimation onComplete={() => setShowRocket(false)} />;
  }

  if (!showProposal) {
    return null;
  }

  if (showLoveMessage) {
    return (
      <div className="fixed inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            filter: "brightness(0.7)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/60 via-rose-900/50 to-red-900/60 backdrop-blur-sm" />

        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-[floatHeart_3s_ease-in-out_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              opacity: 0.5,
            }}
          >
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="#fff"
              />
            </svg>
          </div>
        ))}

        <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
          <div className="text-center">
            <h1
              className="text-6xl md:text-8xl font-bold animate-[scaleIn_1s_ease-out]"
              style={{
                background: "linear-gradient(45deg, #fff, #93c5fd, #fff, #93c5fd)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 80px rgba(255,255,255,0.8)",
                animation: "scaleIn 1s ease-out, glow 2s ease-in-out infinite",
              }}
            >
              Love you bangaram 💙
            </h1>

            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={`firework-${i}`}
                className="absolute left-1/2 top-1/2 animate-[firework_2s_ease-out]"
                style={{
                  transform: `rotate(${i * 30}deg)`,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" className="text-pink-400">
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 overflow-auto">
      <div
        className="fixed inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(0.5)",
        }}
      />

      <div className="fixed inset-0 bg-gradient-to-br from-pink-900/40 via-rose-900/30 to-red-900/40 backdrop-blur-sm -z-10" />

      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="fixed animate-[floatHeart_4s_ease-in-out_infinite]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.3}s`,
            opacity: 0.3,
            zIndex: 0,
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#fff"
            />
          </svg>
        </div>
      ))}

      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="fixed animate-[twinkle_2s_ease-in-out_infinite]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            zIndex: 0,
          }}
        >
          <div className="w-1 h-1 bg-white rounded-full" />
        </div>
      ))}

      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 py-12">
        <div className="text-center max-w-2xl">
          <div className="animate-[scaleIn_1.5s_ease-out]">
            <h1
              className="text-5xl md:text-6xl font-bold mb-4 animate-[glow_2s_ease-in-out_infinite]"
              style={{
                background: "linear-gradient(45deg, #fff, #fce7f3, #fff, #fce7f3)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 40px rgba(255,255,255,0.5)",
              }}
            >
              Will You Be
            </h1>
            <h1
              className="text-5xl md:text-6xl font-bold mb-8 animate-[glow_2s_ease-in-out_infinite]"
              style={{
                background: "linear-gradient(45deg, #ec4899, #f43f5e, #ec4899, #f43f5e)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 60px rgba(236,72,153,0.8)",
              }}
            >
              My Valentine?
            </h1>
          </div>

          <div className="flex justify-center gap-6 mb-10 animate-[fadeIn_2s_ease-in]">
            <svg width="50" height="50" viewBox="0 0 24 24" className="animate-[heartbeat_1s_ease-in-out_infinite]">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="#fff"
                className="drop-shadow-2xl"
              />
            </svg>
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              className="animate-[heartbeat_1s_ease-in-out_infinite]"
              style={{ animationDelay: "0.2s" }}
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="#ec4899"
                className="drop-shadow-2xl"
              />
            </svg>
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              className="animate-[heartbeat_1s_ease-in-out_infinite]"
              style={{ animationDelay: "0.4s" }}
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="#fff"
                className="drop-shadow-2xl"
              />
            </svg>
          </div>

          <div className="flex flex-col items-center gap-6 mb-10 animate-[fadeIn_3s_ease-in] relative h-20">
            <button
              onClick={handleYesClick}
              className="px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-2xl font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300 border-4 border-white/30 relative z-30"
            >
              Yes ❤️
            </button>

            <button
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              className="px-10 py-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white text-2xl font-bold rounded-full shadow-2xl hover:shadow-gray-500/50 transition-all duration-200 border-4 border-white/30 relative z-30"
              style={{
                position: noButtonPosition.x ? "fixed" : "relative",
                left: noButtonPosition.x ? `${noButtonPosition.x}px` : "auto",
                top: noButtonPosition.y ? `${noButtonPosition.y}px` : "auto",
              }}
            >
              No
            </button>
          </div>

          <div className="animate-[fadeIn_2.5s_ease-in]">
            <p className="text-xl md:text-2xl text-white font-light tracking-wide drop-shadow-lg">
              I promise to make every day special with you ❤️
            </p>
          </div>

          <div className="mt-8 flex justify-center animate-[fadeIn_3s_ease-in]">
            <div className="h-1 w-48 bg-gradient-to-r from-transparent via-pink-300 to-transparent rounded-full" />
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 animate-[fadeIn_3.5s_ease-in] z-10">
        <div className="flex gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-pink-300 animate-[pulse_2s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
