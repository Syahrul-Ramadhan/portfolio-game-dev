import Navbar from "../../components/Navbar";
import BackButton from "../../components/backButton";
import VideoOverview from "../../components/videoOverview";
import About from "../../components/About";
import TwoVideos from "../../components/TwoVideos";
import { ExternalLink } from 'lucide-react';

function SpoiledHeist() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <Navbar />
      <div className="project-container mx-auto px-10 md:px-30 pt-30 md:pt-20">
        <BackButton />
        <VideoOverview title="Spoiled Heist" url="/videos/spoiled-heist/spoiled-heist-overview.mp4" />
        <About
          about="Spoiled Heist is a detective puzzle game where players must predict and prevent future crimes based on clues left behind. The game focuses on investigation, deduction, and decision-making that directly impact the story outcome."
          role="Game Programmer & Game Designer"
          teamSize="4"
          timeFrame="10 days"
          engine="Unity"
        />
        
        {/* Introduction */}
        <div className="mt-6">
          <h1 className="text-xl md:text-2xl font-bold mb-2">Introduction</h1>
          <p className="text-md md:text-lg">
            In Spoiled Heist, players take on the role of a detective investigating a mysterious thief who intentionally leaves clues at every crime scene. Players must explore locations, gather evidence, interview experts such as historians and restoration specialists, and record important information. By analyzing and categorizing clues, players are challenged to deduce the thief’s next target and prevent the next heist, with their final decision influencing the ending of the story.
            </p>
        </div>

        {/* Highlight System */}
        <div className="mt-6">
          <h1 className="text-xl md:text-2xl font-bold mb-2">Deduction & Clue Categorization System</h1>
          <p className="text-md md:text-lg">
            The main system in this game revolves around collecting, organizing, and interpreting clues to make a final deduction. Players not only gather items from crime scenes but also extract key information from dialogues, which must then be categorized and connected logically. I implemented systems for dialogue interaction, clue collection, note-taking, and categorization, all of which feed into a final decision-making mechanic that determines the outcome of the story. This required structuring interconnected systems that support player-driven reasoning.
            </p>
        </div>

        {/* Two Videos */}
        <div className="mt-6">
          <TwoVideos url1="/videos/spoiled-heist/spoiled-heist-clue.mp4" url2="/videos/spoiled-heist/spoiled-heist-find-clue.mp4" />
        </div>

        {/* What I Learned */}
        <div className="mt-6 pb-10">
          <h1 className="text-xl md:text-2xl font-bold mb-2">What I Learned</h1>
          <p className="text-md md:text-lg">
            In developing Spoiled Heist, I learned how to design systems that support player-driven investigation and logical reasoning. I gained experience in building dialogue systems, data structuring for clues, and implementing mechanics that connect multiple gameplay systems into a meaningful conclusion. This project also improved my ability to design branching outcomes based on player decisions.
            </p>
            <p className="text-md md:text-lg">
              Download and Play Spoiled Heist on <a href="https://genia-labs.itch.io/spoiled-heist" target="_blank" className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">itch.io <ExternalLink className="w-4 h-4 inline"/></a>
            </p>
        </div>
      </div>
    </div>
  );
}

export default SpoiledHeist;