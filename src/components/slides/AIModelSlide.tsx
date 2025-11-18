import { Brain, Zap, Database, Tag } from "lucide-react";

const metrics = [
  {
    icon: Brain,
    value: "95%+",
    label: "mAP Detection Accuracy"
  },
  {
    icon: Zap,
    value: "<500ms",
    label: "Inference Speed per Image"
  },
  {
    icon: Database,
    value: "2,000+",
    label: "Training Images"
  },
  {
    icon: Tag,
    value: "3 Classes",
    label: "Rhino • Poacher • Vehicle"
  }
];

const AIModelSlide = () => {
  return (
    <div className="w-full h-full flex items-center px-16 py-12 animate-fade-in">
      <div className="flex-1">
        <h2 className="text-6xl font-bold mb-6 text-foreground">
          The Brains: Our AI Model
        </h2>
        <p className="text-2xl text-muted-foreground mb-12">
          Trained on real wildlife data, deployed for speed
        </p>

        <div className="space-y-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex items-center gap-6 p-6 bg-card border border-border rounded-xl hover:border-primary transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <metric.icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-1">
                  {metric.value}
                </p>
                <p className="text-lg text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-md">
          {/* Confusion Matrix Visualization */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">
              Performance Metrics
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {["Rhino", "Poacher", "Vehicle"].map((label, i) => (
                <div key={i} className="text-center">
                  <div className="h-20 bg-primary/20 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-3xl font-bold text-primary">
                      {i === 0 ? "96" : i === 1 ? "94" : "95"}%
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-lg text-muted-foreground">
                Average Accuracy: <span className="text-primary font-bold">95%+</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIModelSlide;
