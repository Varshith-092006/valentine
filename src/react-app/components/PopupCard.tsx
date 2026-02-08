import { useState } from "react";
import { Button } from "@/react-app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/react-app/components/ui/card";

interface PopupCardProps {
  onComplete: () => void;
}

export default function PopupCard({ onComplete }: PopupCardProps) {
  const [showCard, setShowCard] = useState(true);
  const [showHaMessage, setShowHaMessage] = useState(false);
  const [showTrainText, setShowTrainText] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);

  const handleHaClick = () => {
    setShowCard(false);
    setShowHaMessage(true);
    
    setTimeout(() => {
      setShowHaMessage(false);
      setShowCard(true);
    }, 2500);
  };

  const handleYesHimaClick = () => {
    setShowCard(false);
    setShowTrainText(true);

    setTimeout(() => {
      setShowSurprise(true);
    }, 2000);

    setTimeout(() => {
      onComplete();
    }, 4500);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-300 via-rose-300 to-red-300 flex items-center justify-center overflow-hidden">
      {/* Popup Card */}
      {showCard && (
        <Card className="w-96 shadow-2xl border-4 border-pink-400 animate-[bounce_1s_ease-in-out_3] bg-gradient-to-br from-pink-50 to-rose-100">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-5xl font-bold text-pink-600 animate-pulse">
              bangaram!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-4">
            <div className="flex flex-col gap-4">
              <Button
                onClick={handleHaClick}
                className="w-full h-14 text-xl font-bold bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                ha😒
              </Button>
              <Button
                onClick={handleYesHimaClick}
                className="w-full h-14 text-xl font-bold bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                yes hima
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Ha Message */}
      {showHaMessage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm px-12 py-8 rounded-3xl shadow-2xl border-4 border-pink-400 animate-[bounce_0.5s_ease-in-out]">
            <p className="text-3xl font-bold text-pink-600 text-center">
              endhuku antha kopam cool kannamma
            </p>
          </div>
        </div>
      )}

      {/* Train Text Animation */}
      {showTrainText && (
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <div className="animate-train-move whitespace-nowrap">
            <span className="text-8xl font-bold text-pink-600 drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]">
              heeeee
            </span>
          </div>
        </div>
      )}

      {/* Surprise Message */}
      {showSurprise && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gradient-to-r from-pink-100 to-rose-100 px-12 py-8 rounded-3xl shadow-2xl border-4 border-pink-400 animate-[fadeIn_1s_ease-in]">
            <p className="text-4xl font-bold text-pink-600 text-center">
              come on there is a surprise for you
            </p>
          </div>
        </div>
      )}

      {/* Decorative hearts */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${(i * 12) + 5}%`,
            top: `${Math.random() * 80 + 10}%`,
            animationDelay: `${i * 0.3}s`,
            opacity: 0.3,
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#ec4899"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
