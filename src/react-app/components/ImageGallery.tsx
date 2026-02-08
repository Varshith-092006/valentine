import { useState } from "react";
import { Button } from "@/react-app/components/ui/button";
import { imageCategories } from "@/react-app/data/imageCategories";
import { ChevronRight, Mail } from "lucide-react";

interface ImageGalleryProps {
  onComplete: () => void;
}

export default function ImageGallery({ onComplete }: ImageGalleryProps) {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [showImages, setShowImages] = useState(false);

  const currentCategory = imageCategories[currentCategoryIndex];
  const isLeftSide = currentCategoryIndex % 2 === 0;
  const allCategoriesComplete = currentCategoryIndex >= imageCategories.length;

  const handleEnvelopeClick = () => {
    setEnvelopeOpen(true);
    setTimeout(() => {
      setShowImages(true);
    }, 800);
  };

  const handleNextCategory = () => {
    if (currentCategoryIndex < imageCategories.length - 1) {
      setEnvelopeOpen(false);
      setShowImages(false);
      setTimeout(() => {
        setCurrentCategoryIndex((prev) => prev + 1);
      }, 500);
    }
  };

  const handleFinishGallery = () => {
    onComplete();
  };

  if (allCategoriesComplete) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-pink-200 via-rose-200 to-red-200 flex items-center justify-center">
        <Button
          onClick={handleFinishGallery}
          className="px-12 py-8 text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 rounded-full"
        >
          Continue to Surprise ??
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 overflow-y-auto">
      {/* Envelope Button */}
      {!envelopeOpen && (
        <button
          onClick={handleEnvelopeClick}
          className={`absolute top-1/2 -translate-y-1/2 ${
            isLeftSide ? "left-8" : "right-8"
          } group cursor-pointer transition-all duration-300 hover:scale-110 z-20`}
        >
          <div className="relative">
            {/* Arrow pointing to envelope */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 ${
                isLeftSide ? "-left-16" : "-right-16"
              } animate-bounce`}
            >
              <ChevronRight
                className={`w-12 h-12 text-pink-600 ${isLeftSide ? "" : "rotate-180"}`}
              />
            </div>

            {/* Closed Envelope */}
            <div className="w-32 h-24 relative">
              <Mail className="w-32 h-32 text-pink-600 drop-shadow-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-white drop-shadow">
                  Click me!
                </span>
              </div>
            </div>
          </div>
        </button>
      )}

      {/* Opened Envelope with Images */}
      {envelopeOpen && (
        <div className="fixed inset-0 flex items-center justify-center p-8">
          <div className="w-full max-w-6xl">
            {/* Category Title */}
            <div className="text-center mb-8 animate-[fadeIn_1s_ease-in]">
              <h2 className="text-4xl font-bold text-pink-600 drop-shadow-lg">
                {currentCategory.title}
              </h2>
            </div>

            {/* Scrollable images area with max height */}
            {showImages && (
              <div className="max-h-[60vh] overflow-auto px-4 hide-scrollbar">
                <div className="flex justify-center gap-8 flex-wrap">
                  {currentCategory.images.map((imageUrl, index) => (
                    <div
                      key={index}
                      className="relative animate-[swingIn_0.8s_ease-out]"
                      style={{
                        animationDelay: `${index * 0.2}s`,
                      }}
                    >
                      {/* Thread */}
                      <div className="absolute left-1/2 -translate-x-1/2 -top-20 w-0.5 h-20 bg-pink-400" />

                      {/* Frame */}
                      <div className="relative bg-white p-3 rounded-lg shadow-2xl border-4 border-pink-300 transform hover:scale-105 transition-transform duration-300">
                        <img
                          src={imageUrl}
                          alt={`${currentCategory.title} ${index + 1}`}
                          className="w-56 h-56 md:w-64 md:h-64 object-cover rounded"
                        />

                        {/* Frame decorations */}
                        <div className="absolute -top-2 -left-2 w-4 h-4 bg-pink-400 rounded-full" />
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full" />
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full" />
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-pink-400 rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Next Category Button */}
            {showImages && currentCategoryIndex < imageCategories.length - 1 && (
              <div className="flex justify-center mt-12 animate-[fadeIn_1s_ease-in]">
                <Button
                  onClick={handleNextCategory}
                  className="px-8 py-6 text-xl font-bold bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-full"
                >
                  Next Category ?
                </Button>
              </div>
            )}

            {/* Finish Button for last category */}
            {showImages && currentCategoryIndex === imageCategories.length - 1 && (
              <div className="flex justify-center mt-12 animate-[fadeIn_1s_ease-in]">
                <Button
                  onClick={handleFinishGallery}
                  className="px-10 py-6 text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-700 hover:from-pink-700 hover:to-rose-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-full"
                >
                  Continue ??
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating hearts decoration */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${(i * 15) + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            animationDelay: `${i * 0.5}s`,
            opacity: 0.2,
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
