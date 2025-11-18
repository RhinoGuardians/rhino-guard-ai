import { Button } from "@/components/ui/button";
import rhinoHero from "@/assets/rhino-hero.jpg";

const HeroSlide = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${rhinoHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-5xl animate-fade-in">
        <h1 className="text-7xl md:text-8xl font-bold mb-6 text-foreground tracking-tight">
          RhinoGuardians
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
          AI-Powered Real-Time Detection for Rhino Conservation
        </p>
        
        <div className="flex flex-col items-center gap-6 mt-12">
          <div className="flex flex-wrap justify-center gap-4 text-lg text-muted-foreground">
            <span>Linford</span>
            <span>•</span>
            <span>Rania</span>
            <span>•</span>
            <span>Shrusti</span>
            <span>•</span>
            <span>William</span>
            <span>•</span>
            <span>Azuka</span>
          </div>
          
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 border border-primary rounded-full">
            <span className="text-primary font-semibold text-lg">AI Genesis Hackathon 2025</span>
          </div>

          <Button 
            size="lg" 
            className="mt-4 text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Explore →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
