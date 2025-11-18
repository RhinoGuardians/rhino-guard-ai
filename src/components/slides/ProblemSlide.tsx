import { AlertCircle, Camera, Users, Plane } from "lucide-react";
import poacherThreat from "@/assets/poacher-threat.png";

const problems = [
  {
    icon: Users,
    title: "Manual Ranger Patrols",
    description: "Coverage impossible across vast reserves"
  },
  {
    icon: Camera,
    title: "Camera Traps",
    description: "Need human review - hours or days delay"
  },
  {
    icon: Plane,
    title: "Drone Footage",
    description: "No real-time analysis capability"
  },
  {
    icon: AlertCircle,
    title: "Vast Reserves",
    description: "Thousands of km² impossible to monitor"
  }
];

const ProblemSlide = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-16 py-12 animate-fade-in overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${poacherThreat})` }}
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-background/50" />
      
      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
      <h2 className="text-6xl font-bold mb-16 text-center text-foreground">
        Current Methods Are Too Slow
      </h2>

      <div className="grid grid-cols-2 gap-8 max-w-6xl w-full">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 bg-card/40 backdrop-blur-md border-2 border-border/50 rounded-xl hover:border-primary transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-full bg-destructive/20 flex items-center justify-center mb-6">
              <problem.icon className="w-10 h-10 text-destructive" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-foreground">
              {problem.title}
            </h3>
            <p className="text-lg text-muted-foreground">
              {problem.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-2xl text-muted-foreground italic">
          Traditional methods can't match the speed and scale needed
        </p>
      </div>
      </div>
    </div>
  );
};

export default ProblemSlide;
