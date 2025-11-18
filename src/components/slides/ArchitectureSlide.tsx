import { Camera, Brain, Zap, Map, Smartphone } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Image Capture",
    description: "Drones/Cameras capture images"
  },
  {
    icon: Brain,
    title: "AI Detection",
    description: "Model detects threats (<500ms)"
  },
  {
    icon: Zap,
    title: "Processing",
    description: "Backend processes & stores"
  },
  {
    icon: Map,
    title: "Dashboard",
    description: "Display on live map"
  },
  {
    icon: Smartphone,
    title: "Alerts",
    description: "Rangers get instant notifications"
  }
];

const ArchitectureSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 animate-fade-in">
      <h2 className="text-6xl font-bold mb-16 text-center text-foreground">
        The System Pipeline
      </h2>

      <div className="flex items-center justify-center gap-6 max-w-7xl w-full">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                <step.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground max-w-[180px]">
                {step.description}
              </p>
            </div>
            
            {index < steps.length - 1 && (
              <div className="text-4xl text-primary mt-[-60px]">→</div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 px-12 py-6 bg-primary/20 border-2 border-primary rounded-xl">
        <p className="text-3xl font-bold text-primary text-center">
          End-to-End: Under 2 Seconds
        </p>
      </div>
    </div>
  );
};

export default ArchitectureSlide;
