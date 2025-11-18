import { Globe, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import rhinoHero from "@/assets/rhino-hero.jpg";

const CTASlide = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${rhinoHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-8 animate-fade-in">
        <h2 className="text-7xl font-bold mb-8 text-foreground">
          Let's Save the Rhino Together
        </h2>
        
        <p className="text-3xl text-muted-foreground mb-16 italic">
          "Protecting the Future, One Detection at a Time"
        </p>

        {/* Links */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <Button
            size="lg"
            className="w-full max-w-md text-xl py-8 bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <a href="https://rhinoguardians-web.vercel.app" target="_blank" rel="noopener noreferrer">
              <Globe className="w-6 h-6 mr-3" />
              Visit Our Website
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full max-w-md text-xl py-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="https://github.com/RhinoGuardians" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 mr-3" />
              View on GitHub
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full max-w-md text-xl py-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="mailto:contact@rhinoguardians.org">
              <Mail className="w-6 h-6 mr-3" />
              Get in Touch
            </a>
          </Button>
        </div>

        {/* QR Codes Placeholder */}
        <div className="flex justify-center gap-12 mt-12">
          <div className="text-center">
            <div className="w-32 h-32 bg-card border-2 border-primary rounded-lg mb-3 flex items-center justify-center">
              <Globe className="w-16 h-16 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Website</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-card border-2 border-primary rounded-lg mb-3 flex items-center justify-center">
              <Github className="w-16 h-16 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASlide;
