import teamHero from "@/assets/team-hero.png";

const WhyWeWinSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 animate-fade-in">
      <h2 className="text-6xl font-bold mb-6 text-center text-foreground">
        Why RhinoGuardians Wins
      </h2>
      
      <p className="text-2xl text-center text-muted-foreground mb-12 max-w-3xl">
        Combining <span className="text-primary font-semibold">passion</span>, <span className="text-primary font-semibold">technology</span>, and <span className="text-primary font-semibold">proven impact</span>
      </p>

      <div className="max-w-6xl w-full">
        <img 
          src={teamHero} 
          alt="RhinoGuardians team with technology displays showing 2,410 rhinos protected across 200+ reserves"
          className="w-full h-auto rounded-2xl border-2 border-primary/30 shadow-2xl"
        />
      </div>
    </div>
  );
};

export default WhyWeWinSlide;
