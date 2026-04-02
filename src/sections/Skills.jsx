import SectionTitle from "../components/SectionTitle";
import { skills } from "../data/skills";

function Skills() {
  return (
    <section className="px-8 py-16">
      <SectionTitle title="Skills" />

      <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 hover:scale-110 cursor-pointer transition group"
          >
            <img src={skill.icon} alt={skill.name} className="w-10 h-10" />

            {/* Tooltip */}
            <span className="text-xs text-zinc-400 mt-2 opacity-0 group-hover:opacity-100 transition">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
