import techStackDiagram from "@/assets/tech-stack-diagram.png";

const TechStackSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 animate-fade-in">
      <h2 className="text-6xl font-bold mb-6 text-center text-foreground">
        Built with Leading Technology
      </h2>
      <p className="text-2xl text-muted-foreground mb-12 text-center">
        Open-source, scalable, production-ready
      </p>

      <div className="flex items-center justify-center w-full max-w-6xl">
        <img 
          src={techStackDiagram} 
          alt="Tech Stack Architecture Diagram showing YOLOv5 PyTorch, FastAPI + PostgreSQL, React + Leaflet Maps, and AWS/GCP Cloud" 
          className="w-full h-auto object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default TechStackSlide;
