import heroImg from "../assets/images/profile.jpeg";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-16 pt-30 pb-20 md:gap-32 px-8">
      <img
        src={heroImg}
        alt="hero"
        className="w-64 mt-10 md:mt-0 rounded-full"
      />
      <div className="max-w-2xl">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Hi, I'm Syahrul Ramadhan
        </h1>
        <p className="text-zinc-400 text-lg md:text-2xl">
          Game programmer specializing in systems and gameplay programming.
          Passionate about building efficient, clean, and scalable code while
          continuously exploring new challenges in game development.
        </p>
      </div>
    </section>
  );
}

export default Hero;
