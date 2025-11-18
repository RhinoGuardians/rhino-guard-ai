import { CheckCircle2, TrendingUp } from "lucide-react";
import savannaAerial from "@/assets/savanna-aerial.jpg";

const achievements = [
  "MVP deployed and functional",
  "<2 second detection-to-alert",
  "95% accuracy proven in testing"
];

const potential = [
  { value: "96%", label: "Reduction in poaching incidents" },
  { value: "2,410", label: "Remaining black rhinos to protect" },
  { value: "200+", label: "African reserves for deployment" }
];

const ImpactSlide = () => {
  return (
    <div className="relative w-full h-full flex items-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${savannaAerial})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl ml-16 animate-fade-in">
        <h2 className="text-6xl font-bold mb-12 text-foreground">
          The Impact We Can Make
        </h2>

        {/* Current Achievements */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-primary">
            Current Achievements
          </h3>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckCircle2 className="w-8 h-8 text-primary shrink-0" />
                <p className="text-2xl text-foreground">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Arrow */}
        <div className="flex items-center gap-4 my-8">
          <TrendingUp className="w-12 h-12 text-primary" />
          <div className="flex-1 h-1 bg-primary" />
        </div>

        {/* Potential Impact */}
        <div>
          <h3 className="text-3xl font-semibold mb-6 text-primary">
            Potential Impact
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {potential.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-primary/20 border border-primary rounded-xl text-center"
              >
                <p className="text-4xl font-bold text-primary mb-2">
                  {item.value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSlide;
