import linfordPhoto from "@/assets/team/linford.jpg";
import raniaPhoto from "@/assets/team/rania.jpg";
import shrustiPhoto from "@/assets/team/shrusti.jpg";
import williamPhoto from "@/assets/team/william.jpg";
import azukaPhoto from "@/assets/team/azuka.jpg";

const teamMembers = [
  { name: "Linford", role: "Project Coordinator", emoji: "🎯", photo: linfordPhoto },
  { name: "Rania", role: "Deep Learning Engineer", emoji: "🧠", photo: raniaPhoto },
  { name: "Shrusti", role: "ML Engineer", emoji: "📊", photo: shrustiPhoto },
  { name: "William", role: "Frontend Developer", emoji: "🎨", photo: williamPhoto },
  { name: "Azuka", role: "Backend Engineer", emoji: "⚙️", photo: azukaPhoto }
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
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary mb-6 group-hover:scale-110 group-hover:border-primary/80 transition-all duration-300 shadow-xl">
              <img 
                src={member.photo} 
                alt={`${member.name} - ${member.role}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {member.name}
            </h3>
            <p className="text-lg text-muted-foreground">
              {member.role}
            </p>
            <span className="text-2xl mt-2">{member.emoji}</span>
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
