const teamMembers = [
  { name: "Linford", role: "Project Coordinator", emoji: "🎯" },
  { name: "Rania", role: "Deep Learning Engineer", emoji: "🧠" },
  { name: "Shrusti", role: "ML Engineer", emoji: "📊" },
  { name: "William", role: "Frontend Developer", emoji: "🎨" },
  { name: "Azuka", role: "Backend Engineer", emoji: "⚙️" }
];

const TeamSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 animate-fade-in">
      <h2 className="text-6xl font-bold mb-16 text-center text-foreground">
        Meet RhinoGuardians
      </h2>

      <div className="grid grid-cols-5 gap-8 max-w-7xl w-full mb-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-4 border-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-6xl">{member.emoji}</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {member.name}
            </h3>
            <p className="text-lg text-muted-foreground">
              {member.role}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 px-12 py-8 bg-card border border-border rounded-xl max-w-4xl">
        <p className="text-2xl text-center text-muted-foreground">
          A diverse team united by one mission:{" "}
          <span className="text-primary font-bold">
            Protecting wildlife through innovative technology
          </span>
        </p>
      </div>

      <div className="mt-8 flex gap-4">
        <div className="px-6 py-3 bg-primary/20 border border-primary rounded-lg">
          <p className="text-sm text-muted-foreground">AI Genesis Hackathon 2025</p>
        </div>
      </div>
    </div>
  );
};

export default TeamSlide;
