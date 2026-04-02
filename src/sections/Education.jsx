import SectionTitle from "../components/SectionTitle";

function Education() {
  return (
    <section className="px-8 py-10">
      <SectionTitle title="Education" />
      <div>
        <h3 className="font-semibold text-lg md:text-xl">
          S1 Software Engineering
        </h3>
        <p className="text-zinc-400 text-md md:text-lg">
          Universitas Pendidikan Indonesia
        </p>
      </div>
    </section>
  );
}

export default Education;
