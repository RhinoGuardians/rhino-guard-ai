import dashboardUI from "@/assets/dashboard-ui.jpg";

const DashboardSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 animate-fade-in">
      <h2 className="text-6xl font-bold mb-4 text-center text-foreground">
        RhinoGuardians Dashboard
      </h2>
      <p className="text-2xl text-muted-foreground mb-8 text-center">
        Real-time detections plotted instantly
      </p>

      <div className="relative max-w-6xl w-full">
        {/* Live Indicator */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary rounded-full">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="text-primary font-semibold">LIVE DATA</span>
        </div>

        {/* Dashboard Image */}
        <div className="relative rounded-xl overflow-hidden border-2 border-primary shadow-2xl shadow-primary/20">
          <img 
            src={dashboardUI} 
            alt="Live Detection Dashboard showing map interface with filters and active alerts"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-card border border-border rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Map Coverage</p>
            <p className="text-2xl font-bold text-primary">Limpopo Park</p>
          </div>
          <div className="text-center p-4 bg-card border border-border rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Detection Types</p>
            <p className="text-2xl font-bold text-primary">
              Rhino / Threat / Alert
            </p>
          </div>
          <div className="text-center p-4 bg-card border border-border rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Update Speed</p>
            <p className="text-2xl font-bold text-primary">Instant</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSlide;
