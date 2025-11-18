import solutionCommandCenter from "@/assets/solution-command-center.png";

const SolutionSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 animate-fade-in">
      <h2 className="text-6xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        RhinoGuardians
      </h2>
      
      <p className="text-3xl text-center text-muted-foreground mb-12">
        Real-Time AI Detection System
      </p>

      <div className="max-w-6xl w-full">
        <img 
          src={solutionCommandCenter} 
          alt="RhinoGuardians command center showing real-time alerts, <0.500s detection speed, 95+ confidence accuracy, and GPS tracking displays"
          className="w-full h-auto rounded-2xl border-2 border-primary/30 shadow-2xl"
        />
      </div>
    </div>
  );
};

export default SolutionSlide;
