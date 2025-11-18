import ctaHero from "@/assets/cta-hero.png";

const CTASlide = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <img 
        src={ctaHero} 
        alt="Let's Save the Rhino Together - Contact information with QR codes for rhinoguardians-web-vercel.app and GitHub"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default CTASlide;
