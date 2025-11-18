import systemArchitecture from "@/assets/system-architecture.png";

const ArchitectureSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 animate-fade-in">
      <h2 className="text-6xl font-bold mb-12 text-center text-foreground">
        The System Pipeline
      </h2>

      <div className="flex items-center justify-center w-full max-w-6xl">
        <img 
          src={systemArchitecture} 
          alt="RhinoGuardians System Architecture - from drone capture to ranger alerts"
          className="w-full h-auto rounded-lg shadow-2xl border border-border/20"
        />
      </div>

      <div className="mt-12 px-12 py-6 bg-primary/20 border-2 border-primary rounded-xl">
        <p className="text-3xl font-bold text-primary text-center">
          End-to-End: Under 2 Seconds
        </p>
      </div>
    </div>
  );
};

export default ArchitectureSlide;
