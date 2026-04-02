import SectionTitle from "../components/SectionTitle";
import { experiences } from "../data/experience";

function Experience() {
  return (
    <section className="px-8 py-10">
      <SectionTitle title="Work Experience" />

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-zinc-800 p-6 rounded-2xl hover:shadow-lg hover:shadow-black/30 transition"
          >
            {/* Company & Role */}
            <h3 className="text-lg md:text-xl font-semibold">{exp.company}</h3>
            <p className="text-md text-zinc-400 mb-2">
              {exp.role} | {exp.duration}
            </p>

            {/* Tasks */}
            <ul className="list-disc list-inside text-md text-zinc-400 space-y-1">
              {exp.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
