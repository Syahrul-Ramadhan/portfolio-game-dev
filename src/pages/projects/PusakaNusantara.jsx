import Navbar from "../../components/Navbar";
import BackButton from "../../components/backButton";
import VideoOverview from "../../components/videoOverview";
import About from "../../components/About";
import TwoVideos from "../../components/TwoVideos";

function PusakaNusantara() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <Navbar />
      <div className="project-container mx-auto px-10 md:px-30 pt-30 md:pt-20">
        <BackButton />
        <VideoOverview title="Pusaka Nusantara" url="/videos/pusaka-nusantara/pusaka-nusantara-overview.mp4" />
        <About
          about="Pusaka Nusantara is a cultural exploration game where players help restore a forgotten museum while rediscovering lost heritage. The game combines social interaction, minigames, and resource management to create an engaging cultural experience."
          role="Game Programmer & Game Designer"
          teamSize="3"
          timeFrame="1 month"
          engine="Unity"
        />
        
        {/* Introduction */}
        <div className="mt-6">
          <h1 className="text-xl md:text-2xl font-bold mb-2">Introduction</h1>
          <p className="text-md md:text-lg">
            In Pusaka Nusantara, players take on the role of Adnan, a young man determined to restore his grandfather’s abandoned museum. Throughout the journey, players explore the village, interact with locals, and recover lost cultural artifacts. The gameplay blends narrative exploration with various minigames inspired by Indonesian culture, while also introducing economic elements where players must earn and manage money to rebuild the museum.
            </p>
        </div>

        {/* Highlight System */}
        <div className="mt-6">
          <h1 className="text-xl md:text-2xl font-bold mb-2">Integrated Minigame System with Cultural Theme</h1>
          <p className="text-md md:text-lg">
            One of the key systems in this project is the integration of multiple culturally-themed minigames into a single cohesive progression system. Each minigame, such as drag-and-drop classification and rhythm-based traditional music gameplay, is designed to represent different aspects of Indonesian culture while contributing directly to the player’s progression. This required designing flexible systems that could handle different gameplay mechanics while maintaining consistency in user experience and reward structure.
            </p>
        </div>

        {/* Two Videos */}
        <div className="mt-6">
          <TwoVideos url1="/videos/pusaka-nusantara/pusaka-nusantara-saron-minigame.mp4" url2="/videos/pusaka-nusantara/pusaka-nusantara-rhythm-minigame.mp4" />
        </div>

        {/* What I Learned */}
        <div className="mt-6 pb-10">
          <h1 className="text-xl md:text-2xl font-bold mb-2">What I Learned</h1>
          <p className="text-md md:text-lg">
            Through this project, I learned how to design and implement multiple gameplay systems within a single project, including character movement, scene transitions, and modular minigames. I also gained experience in balancing gameplay variety and maintaining player engagement, as well as structuring systems that connect narrative, mechanics, and progression into a cohesive experience.
            </p>
        </div>
      </div>
    </div>
  );
}

export default PusakaNusantara;