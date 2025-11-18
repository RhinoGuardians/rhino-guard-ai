import { Zap, MapPin, Activity, Target } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Instant Detection",
    description: "Detects threats in <500ms"
  },
  {
    icon: MapPin,
    title: "GPS Alerts",
    description: "Rangers notified in <2 seconds"
  },
  {
    icon: Activity,
    title: "Live Dashboard",
    description: "Interactive map with real-time data"
  },
  {
    icon: Target,
    title: "High Accuracy",
    description: "95%+ detection accuracy with AI"
  }
];

const SolutionSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 animate-fade-in">
      <h2 className="text-6xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        RhinoGuardians
      </h2>
      <p className="text-3xl text-center text-muted-foreground mb-16">
        Real-Time AI Detection System
      </p>

      <div className="grid grid-cols-2 gap-8 max-w-6xl w-full">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-6 p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-xl hover:border-primary transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <benefit.icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-foreground flex items-center gap-2">
                <span className="text-primary">✓</span>
                {benefit.title}
              </h3>
              <p className="text-lg text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 px-8 py-6 bg-primary/20 border border-primary rounded-xl">
        <p className="text-2xl font-semibold text-primary text-center">
          From Detection to Action in Under 2 Seconds
        </p>
      </div>
    </div>
  );
};

export default SolutionSlide;
