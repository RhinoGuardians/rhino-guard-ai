import { AlertCircle, CheckCircle2, Cloud, Heart, Users } from "lucide-react";

const differentiators = [
  {
    icon: AlertCircle,
    title: "Real Problem",
    description: "Rhinos going extinct NOW"
  },
  {
    icon: CheckCircle2,
    title: "Working Solution",
    description: "Live demo proof of concept"
  },
  {
    icon: Cloud,
    title: "Scalable Architecture",
    description: "Cloud-ready for global deployment"
  },
  {
    icon: Heart,
    title: "Real Impact",
    description: "Saves lives, not just technology"
  },
  {
    icon: Users,
    title: "Passionate Team",
    description: "We care deeply about conservation"
  }
];

const WhyWeWinSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 animate-fade-in">
      <h2 className="text-6xl font-bold mb-16 text-center text-foreground">
        Why RhinoGuardians
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {differentiators.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-xl hover:border-primary hover:scale-105 transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <item.icon className="w-10 h-10 text-primary" />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-primary text-2xl">✓</span>
              <h3 className="text-2xl font-semibold text-foreground">
                {item.title}
              </h3>
            </div>
            <p className="text-lg text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 px-12 py-6 bg-primary/20 border-2 border-primary rounded-xl max-w-3xl">
        <p className="text-2xl text-center text-foreground">
          We combine <span className="text-primary font-bold">cutting-edge technology</span> with{" "}
          <span className="text-primary font-bold">genuine passion</span> for wildlife conservation
        </p>
      </div>
    </div>
  );
};

export default WhyWeWinSlide;
