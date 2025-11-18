import crisisVisualization from "@/assets/crisis-visualization.png";

const ImpactSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 animate-fade-in">
      <h2 className="text-6xl font-bold mb-12 text-foreground">
        Our Potential Impact
      </h2>
      
      <div className="w-full max-w-7xl">
        <img 
          src={crisisVisualization} 
          alt="Africa map showing rhino conservation impact zones with heat map overlay, displaying 2,410 rhinos across 200+ reserves with 96% reduction potential"
          className="w-full h-auto rounded-xl border-2 border-primary shadow-2xl shadow-primary/20"
        />
      </div>
      
      <p className="text-xl text-muted-foreground mt-8 text-center max-w-3xl">
        Protecting rhinos across the African continent with AI-powered surveillance
      </p>
    </div>
  );
};

export default ImpactSlide;
