import { useState } from "react";
import CursorTrail from "@/react-app/components/CursorTrail";
import HeartBackground from "@/react-app/components/HeartBackground";
import InitialHeart from "@/react-app/components/InitialHeart";
import LoveConfetti from "@/react-app/components/LoveConfetti";
import RocketAnimation from "@/react-app/components/RocketAnimation";
import PopupCard from "@/react-app/components/PopupCard";
import ImageGallery from "@/react-app/components/ImageGallery";
import LoadingHeart from "@/react-app/components/LoadingHeart";
import FinalProposal from "@/react-app/components/FinalProposal";

type Step = "initial-heart" | "love-confetti" | "rocket" | "popup" | "gallery" | "loading" | "final";

export default function HomePage() {
  const [currentStep, setCurrentStep] = useState<Step>("initial-heart");

  return (
    <div className="min-h-screen relative">
      <CursorTrail />
      <HeartBackground />

      {currentStep === "initial-heart" && (
        <InitialHeart onComplete={() => setCurrentStep("love-confetti")} />
      )}

      {currentStep === "love-confetti" && (
        <LoveConfetti onComplete={() => setCurrentStep("rocket")} />
      )}

      {currentStep === "rocket" && (
        <RocketAnimation onComplete={() => setCurrentStep("popup")} />
      )}

      {currentStep === "popup" && (
        <PopupCard onComplete={() => setCurrentStep("gallery")} />
      )}

      {currentStep === "gallery" && (
        <ImageGallery onComplete={() => setCurrentStep("loading")} />
      )}

      {currentStep === "loading" && (
        <LoadingHeart onComplete={() => setCurrentStep("final")} />
      )}

      {currentStep === "final" && (
        <FinalProposal />
      )}
    </div>
  );
}
