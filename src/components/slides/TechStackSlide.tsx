const techStack = [
  {
    component: "Computer Vision",
    tech: "YOLOv5 (PyTorch)",
    color: "from-orange-500/20 to-orange-500/5"
  },
  {
    component: "Backend API",
    tech: "FastAPI + PostgreSQL",
    color: "from-green-500/20 to-green-500/5"
  },
  {
    component: "Frontend",
    tech: "React + Leaflet Maps",
    color: "from-blue-500/20 to-blue-500/5"
  },
  {
    component: "Deployment",
    tech: "AWS/GCP Cloud",
    color: "from-purple-500/20 to-purple-500/5"
  }
];

const TechStackSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 animate-fade-in">
      <h2 className="text-6xl font-bold mb-6 text-center text-foreground">
        Built with Leading Technology
      </h2>
      <p className="text-2xl text-muted-foreground mb-16 text-center">
        Open-source, scalable, production-ready
      </p>

      <div className="grid grid-cols-2 gap-8 max-w-5xl w-full">
        {techStack.map((item, index) => (
          <div
            key={index}
            className={`p-8 bg-gradient-to-br ${item.color} border border-border rounded-xl hover:border-primary transition-all duration-300 hover:scale-105`}
          >
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {item.component}
              </h3>
              <div className="w-full h-px bg-border mb-4" />
              <p className="text-3xl font-bold text-primary">
                {item.tech}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-4 justify-center">
        {["PyTorch", "FastAPI", "React", "PostgreSQL", "Leaflet", "AWS"].map((logo, index) => (
          <div
            key={index}
            className="px-6 py-3 bg-card border border-border rounded-lg text-lg font-semibold text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackSlide;
