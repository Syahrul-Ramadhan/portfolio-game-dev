import { useNavigate } from "react-router-dom";
import { ChevronRight, Users, Clock, Wrench } from "lucide-react";

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        window.scrollTo(0, 0);
        navigate(`/${project.slug}`);
      }}
      className="
        bg-zinc-800 rounded-2xl overflow-hidden cursor-pointer
        text-indigo-300 transition-all duration-200
        hover:scale-[1.02] hover:text-indigo-100
        active:scale-[0.98]
        active:ring-2 active:ring-zinc-500
      "
    >
      {/* 🎥 VIDEO SECTION */}
      <div className="relative">
        <video
          src={project.video}
          autoPlay
          loop
          muted
          className="w-full aspect-video object-cover"
        />

        {/* Overlay Info */}
        <div className="absolute w-full bg-black/30 bottom-0 px-6 py-2 flex gap-2 text-sm">
          <span className="flex items-center gap-2  px-2 py-1 rounded">
            <Users className="text-zinc-300 w-4.5 h-4.5" /> {project.team}
          </span>
          <span className="flex items-center gap-2  px-2 py-1 rounded">
            <Clock className="text-zinc-300 w-4.5 h-4.5" />
            {project.duration}
          </span>
          <span className="flex items-center gap-2  px-2 py-1 rounded">
            <Wrench className="text-zinc-300 w-4.5 h-4.5" />
            {project.engine}
          </span>
        </div>
      </div>

      {/* 📦 CONTENT */}
      <div className="bg-zinc-800 p-6 flex justify-between items-start">
        <div className="max-w-[90%]">
          <h3 className="font-bold text-lg md:text-xl">{project.title}</h3>
          <p className="text-md md:text-lg text-zinc-300">{project.role}</p>
          <p className="text-md md:text-lg text-zinc-300 mt-2">
            {project.description}
          </p>
        </div>

        <ChevronRight className="text-zinc-300 w-8 h-8" />
      </div>
    </div>
  );
}

export default ProjectCard;
