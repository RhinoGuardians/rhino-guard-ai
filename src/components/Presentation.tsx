import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Play, Pause, Timer, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
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
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    const handleMouseMove = () => {
      setShowControls(true);
      setControlsManuallyHidden(false);
      if (mouseTimer) {
        clearTimeout(mouseTimer);
      }
      setMouseTimer(
        setTimeout(() => {
          if (!isFullscreen && !controlsManuallyHidden) {
            setShowControls(false);
          }
        }, 3000)
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (mouseTimer) {
        clearTimeout(mouseTimer);
      }
    };
  }, [isFullscreen, mouseTimer, controlsManuallyHidden]);

  useEffect(() => {
    if (isAutoPlay) {
      setAutoPlayTimer(
        setTimeout(() => {
          nextSlide();
        }, timeRemaining * 1000)
      );

      setCountdownInterval(
        setInterval(() => {
          setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 20));
        }, 1000)
      );
    } else {
      if (autoPlayTimer) {
        clearTimeout(autoPlayTimer);
      }
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
      setTimeRemaining(20);
    }

    return () => {
      if (autoPlayTimer) {
        clearTimeout(autoPlayTimer);
      }
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
    };
  }, [isAutoPlay, timeRemaining]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay((prevState) => !prevState);
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
    setShowControls(true);
  };

  const exportToPDF = async () => {
    try {
      setIsExporting(true);
      const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
      const pdfWidth = 297;
      const pdfHeight = 210;
      const originalSlide = currentSlide;
      
      setControlsManuallyHidden(true);
      await new Promise(resolve => setTimeout(resolve, 100));
      
      for (let i = 0; i < slides.length; i++) {
        setCurrentSlide(i);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const slideElement = document.querySelector('.w-full.h-full > div') as HTMLElement;
        if (slideElement) {
          const canvas = await html2canvas(slideElement, {
            scale: 2,
            backgroundColor: '#0a0a0a',
            logging: false,
            useCORS: true,
            allowTaint: true
          });
          
          const imgData = canvas.toDataURL('image/jpeg', 0.85);
          if (i > 0) pdf.addPage();
          pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
          pdf.setFontSize(10);
          pdf.setTextColor(150, 150, 150);
          pdf.text(`${i + 1} / ${slides.length}`, pdfWidth - 20, pdfHeight - 5);
        }
      }
      
      setCurrentSlide(originalSlide);
      setControlsManuallyHidden(false);
      pdf.save('RhinoGuardians-Presentation.pdf');
      setIsExporting(false);
    } catch (error) {
      console.error('PDF export failed:', error);
      setIsExporting(false);
    }
  };

  const SlideComponent = slides[currentSlide];

  return (
    <div className="relative w-full h-full bg-black text-white overflow-hidden">
      <SlideComponent />

      {showControls && !isExporting && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4 pointer-events-none">
          <div className="w-1/5 flex justify-start items-center">
            <Button variant="ghost" size="icon" onClick={prevSlide} className="pointer-events-auto">
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="w-3/5 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center space-x-2 pointer-events-auto">
              <Button variant="ghost" size="icon" onClick={toggleAutoPlay}>
                {isAutoPlay ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              {isAutoPlay && (
                <div className="flex items-center space-x-1">
                  <Timer className="h-4 w-4" />
                  <span>{timeRemaining}</span>
                </div>
              )}
              <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
                {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={exportToPDF} disabled={isExporting}>
                <Download className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-2 mt-2 pointer-events-auto">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full ${currentSlide === index ? "bg-white" : "bg-gray-500"} hover:bg-gray-400`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>

          <div className="w-1/5 flex justify-end items-center">
            <Button variant="ghost" size="icon" onClick={nextSlide} className="pointer-events-auto">
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Presentation;
