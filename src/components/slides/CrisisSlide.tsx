import crisisVisualization from "@/assets/crisis-visualization.png";

const CrisisSlide = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-12 animate-fade-in">
      <img 
        src={crisisVisualization} 
        alt="The Silent Extinction - Rhino population decline from 1970s to 2025"
        className="w-full max-w-6xl h-auto rounded-lg shadow-2xl"
      />
    </div>
  );
};

export default CrisisSlide;
