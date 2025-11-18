import aiDetectionDemo from "@/assets/ai-detection-demo.png";

const AIModelSlide = () => {
  return (
    <div className="w-full h-full flex items-center px-16 py-12 animate-fade-in">
      <div className="flex-1 pr-12">
        <h2 className="text-6xl font-bold mb-6 text-foreground">
          The Brains: Our AI Model
        </h2>
        <p className="text-2xl text-muted-foreground mb-16">
          Trained on real wildlife data, deployed for speed
        </p>

        <div className="space-y-8">
          <div>
            <p className="text-lg text-muted-foreground mb-2">Mean Average Precision</p>
            <p className="text-7xl font-bold text-primary">95%</p>
          </div>
          
          <div>
            <p className="text-lg text-muted-foreground mb-2">Inference Speed</p>
            <p className="text-6xl font-bold text-primary">&lt;500ms</p>
          </div>
          
          <div>
            <p className="text-lg text-muted-foreground mb-2">Detection Accuracy</p>
            <p className="text-7xl font-bold text-primary">95%+</p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-4xl">
          <img 
            src={aiDetectionDemo} 
            alt="AI detection visualization showing rhinos, poachers, and vehicles with bounding boxes and confidence scores"
            className="w-full h-auto rounded-xl border-2 border-primary shadow-2xl shadow-primary/20"
          />
        </div>
      </div>
    </div>
  );
};

export default AIModelSlide;
