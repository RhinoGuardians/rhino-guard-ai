import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Play, Pause, Timer } from "lucide-react";
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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [mouseTimer, setMouseTimer] = useState<NodeJS.Timeout | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(20);
  const [autoPlayTimer, setAutoPlayTimer] = useState<NodeJS.Timeout | null>(null);
  const [countdownInterval, setCountdownInterval] = useState<NodeJS.Timeout | null>(null);
  const [controlsManuallyHidden, setControlsManuallyHidden] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === "Escape" && isFullscreen) {
        e.preventDefault();
        if (document.fullscreenElement) {
          document.exitFullscreen();
        }
      } else if (e.key === "h" || e.key === "H") {
        e.preventDefault();
        setControlsManuallyHidden((prev) => !prev);
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSlide(slides.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, isFullscreen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      if (!document.fullscreenElement) {
        setShowControls(true);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (!isFullscreen) return;

    const handleMouseMove = () => {
      setShowControls(true);
      
      if (mouseTimer) {
        clearTimeout(mouseTimer);
      }
      
      const timer = setTimeout(() => {
        setShowControls(false);
      }, 3000);
      
      setMouseTimer(timer);
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (mouseTimer) {
        clearTimeout(mouseTimer);
      }
    };
  }, [isFullscreen, mouseTimer]);

  useEffect(() => {
    const cleanup = () => {
      if (autoPlayTimer) clearTimeout(autoPlayTimer);
      if (countdownInterval) clearInterval(countdownInterval);
    };

    if (!isAutoPlay) {
      cleanup();
      setTimeRemaining(20);
      return;
    }

    setTimeRemaining(20);

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          return 20;
        }
        return prev - 1;
      });
    }, 1000);
    setCountdownInterval(interval);

    const timer = setTimeout(() => {
      if (currentSlide < slides.length - 1) {
        nextSlide();
      } else {
        setIsAutoPlay(false);
      }
    }, 20000);
    setAutoPlayTimer(timer);

    return cleanup;
  }, [isAutoPlay, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    if (isAutoPlay) {
      setTimeRemaining(20);
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    if (isAutoPlay) {
      setTimeRemaining(20);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (isAutoPlay) {
      setTimeRemaining(20);
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay((prev) => !prev);
    if (!isAutoPlay) {
      setTimeRemaining(20);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
      setShowControls(true);
      setControlsManuallyHidden(false);
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className={`relative w-full h-screen overflow-hidden bg-background ${(isFullscreen && !showControls) || controlsManuallyHidden ? 'cursor-none' : ''}`}>
      {/* Slide Content */}
      <div className="w-full h-full">
        <CurrentSlideComponent />
      </div>

      {/* Auto-Play & Fullscreen Controls */}
      <div 
        className={`fixed top-8 right-8 z-50 flex items-center gap-3 transition-opacity duration-300 ${
          (isFullscreen && !showControls) || controlsManuallyHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Auto-Play Toggle */}
        <Button
          onClick={toggleAutoPlay}
          variant={isAutoPlay ? "default" : "outline"}
          size="sm"
          className={`bg-background/80 backdrop-blur-sm ${
            isAutoPlay 
              ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
              : 'hover:bg-primary hover:text-primary-foreground'
          }`}
          aria-label={isAutoPlay ? "Disable auto-play" : "Enable auto-play"}
        >
          {isAutoPlay ? (
            <>
              <Pause className="h-4 w-4 mr-2" />
              Auto-Play On
            </>
          ) : (
            <>
              <Play className="h-4 w-4 mr-2" />
              Auto-Play
            </>
          )}
        </Button>

        {/* Fullscreen Toggle */}
        <Button
          onClick={toggleFullscreen}
          variant="outline"
          size="icon"
          className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? (
            <Minimize className="h-4 w-4" />
          ) : (
            <Maximize className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation Controls */}
      <div 
        className={`fixed bottom-8 left-8 flex items-center gap-4 z-50 transition-opacity duration-300 ${
          (isFullscreen && !showControls) || controlsManuallyHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {isAutoPlay && (
          <Button
            onClick={toggleAutoPlay}
            variant="outline"
            size="icon"
            className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
            aria-label="Pause auto-play"
          >
            <Pause className="h-4 w-4" />
          </Button>
        )}
        
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

      {/* Timer Countdown */}
      {isAutoPlay && (
        <div 
          className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-300 ${
            (isFullscreen && !showControls) || controlsManuallyHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/20 flex items-center gap-2 shadow-lg">
            <Timer className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Next slide in {timeRemaining}s
            </span>
            <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden ml-2">
              <div 
                className="h-full bg-primary transition-all duration-1000 ease-linear"
                style={{ width: `${(timeRemaining / 20) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Dot Navigation */}
      <div 
        className={`fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50 transition-opacity duration-300 ${
          (isFullscreen && !showControls) || controlsManuallyHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
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
      <div 
        className={`fixed bottom-0 left-0 w-full h-1 bg-muted z-50 transition-opacity duration-300 ${
          (isFullscreen && !showControls) || controlsManuallyHidden ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Presentation;
