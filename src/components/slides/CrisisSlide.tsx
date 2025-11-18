import crisisVisualization from "@/assets/crisis-visualization-new.png";

const CrisisSlide = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-12 animate-fade-in">
      <img 
        src={crisisVisualization} 
        alt="The Silent Extinction - Before/after comparison showing 1970s thriving Africa versus 2025 endangered rhino populations"
        className="w-full max-w-6xl h-auto rounded-lg shadow-2xl"
      />
    </div>
  );
};

export default CrisisSlide;
