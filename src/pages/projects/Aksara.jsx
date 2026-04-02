import Navbar from "../../components/Navbar";
import BackButton from "../../components/backButton";
import VideoOverview from "../../components/videoOverview";
import About from "../../components/About";
import TwoVideos from "../../components/TwoVideos";
import { ExternalLink } from 'lucide-react';

function Aksara() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <Navbar />
      <div className="project-container mx-auto px-10 md:px-30 pt-30 md:pt-20">
        <BackButton />
        <VideoOverview title="Aksara" url="/videos/aksara/aksara-overview.mp4" />
        <About
          about="Aksara is a roguelite deck-building game where players construct meaningful words using syllable-based cards. Inspired by Balatro, it introduces a unique linguistic twist to traditional card mechanics."
          role="Game Programmer & Game Designer"
          teamSize="3"
          timeFrame="1 week"
          engine="Unity"
        />
        
        {/* Introduction */}
        <div className="mt-6">
          <h1 className="text-xl md:text-2xl font-bold mb-2">Introduction</h1>
          <p className="text-md md:text-lg">
            Aksara is a deck-building roguelite game where players strategically form words by combining syllable cards. Each run challenges the player to reach target scores across stages by assembling meaningful words, managing their deck through discard mechanics, and optimizing combinations. The game features a progression system where players unlock shops between stages, allowing them to refine their deck and strategy for subsequent challenges.
            </p>
        </div>

        {/* Highlight System */}
        <div className="mt-6">
          <h1 className="text-xl md:text-2xl font-bold mb-2">Word-Based Deck Building Mechanic</h1>
          <p className="text-md md:text-lg">
            The core innovation of Aksara lies in its word-based deck-building system, where players must combine syllable cards into valid words to score points. Unlike traditional card games, this system requires both linguistic understanding and strategic planning. I implemented mechanics such as assembling, discarding, and combo scaling, where longer or more complex word combinations yield higher scores. This creates a unique gameplay loop that blends language processing with roguelite strategy.
            </p>
        </div>

        {/* Two Videos */}
        <div className="mt-6">
          <TwoVideos url1="/videos/aksara/aksara-01.mp4" url2="/videos/aksara/aksara-02.mp4" />
        </div>

        {/* What I Learned */}
        <div className="mt-6 pb-10">
          <h1 className="text-xl md:text-2xl font-bold mb-2">What I Learned</h1>
          <p className="text-md md:text-lg">
            In developing Aksara, I learned how to design complex game systems involving card logic, combination validation, and scoring mechanics. I also improved my ability to structure scalable systems, especially for handling dynamic combinations and progression balancing. Additionally, this project strengthened my problem-solving skills in translating abstract concepts, such as language-based mechanics, into functional and engaging gameplay systems.
            </p>
            <p className="text-md md:text-lg">
              Download and Play Aksara on <a href="https://ramadhann.itch.io/aksara" target="_blank" className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">itch.io <ExternalLink className="w-4 h-4 inline"/></a>
            </p>
        </div>
      </div>
    </div>
  );
}

export default Aksara;