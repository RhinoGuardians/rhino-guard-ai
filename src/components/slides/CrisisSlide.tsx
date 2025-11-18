import rhinoCrisis from "@/assets/rhino-crisis.jpg";

const CrisisSlide = () => {
  return (
    <div className="relative w-full h-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${rhinoCrisis})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl ml-16 animate-fade-in">
        <h2 className="text-6xl font-bold mb-8 text-destructive">
          Every 15 Hours, a Rhino Dies
        </h2>
        
        <div className="space-y-6 text-foreground">
          <div className="flex items-baseline gap-4">
            <span className="text-5xl font-bold text-destructive">70,000</span>
            <span className="text-2xl text-muted-foreground">rhinos in 1970</span>
          </div>
          
          <div className="text-6xl font-bold text-destructive">→</div>
          
          <div className="flex items-baseline gap-4">
            <span className="text-5xl font-bold text-destructive">2,410</span>
            <span className="text-2xl text-muted-foreground">rhinos today</span>
          </div>

          <div className="mt-8 space-y-4 text-xl">
            <p className="flex items-center gap-3">
              <span className="text-destructive font-bold">1 rhino</span>
              <span className="text-muted-foreground">killed every day</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-destructive font-bold">8,000+</span>
              <span className="text-muted-foreground">lost in the last decade</span>
            </p>
          </div>

          <blockquote className="mt-12 pl-6 border-l-4 border-destructive italic text-xl text-muted-foreground">
            "By the time rangers find evidence, it's too late"
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default CrisisSlide;
