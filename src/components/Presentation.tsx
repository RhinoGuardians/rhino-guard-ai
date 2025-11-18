import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSlide from "@/components/slides/HeroSlide";
import CrisisSlide from "@/components/slides/CrisisSlide";
import ProblemSlide from "@/components/slides/ProblemSlide";
import SolutionSlide from "@/components/slides/SolutionSlide";
import ArchitectureSlide from "@/components/slides/ArchitectureSlide";
import TechStackSlide from "@/components/slides/TechStackSlide";
import DashboardSlide from "@/components/slides/DashboardSlide";
import AIModelSlide from "@/components/slides/AIModelSlide";
import ImpactSlide from "@/components/slides/ImpactSlide";
import WhyWeWinSlide from "@/components/slides/WhyWeWinSlide";
import TeamSlide from "@/components/slides/TeamSlide";
import CTASlide from "@/components/slides/CTASlide";

const slides = [
  HeroSlide,
  CrisisSlide,
  ProblemSlide,
  SolutionSlide,
  ArchitectureSlide,
  TechStackSlide,
  DashboardSlide,
  AIModelSlide,
  ImpactSlide,
  WhyWeWinSlide,
  TeamSlide,
  CTASlide,
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Slide Content */}
      <div className="w-full h-full">
        <CurrentSlideComponent />
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-8 flex items-center gap-4 z-50">
        <Button
          onClick={prevSlide}
          variant="outline"
          size="icon"
          className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm font-medium text-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg">
          {currentSlide + 1} / {slides.length}
        </span>
        <Button
          onClick={nextSlide}
          variant="outline"
          size="icon"
          className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Dot Navigation */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary scale-125"
                : "bg-muted hover:bg-muted-foreground"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-muted z-50">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Presentation;
