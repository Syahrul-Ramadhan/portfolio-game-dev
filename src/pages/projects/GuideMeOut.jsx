import Navbar from "../../components/Navbar";
import BackButton from "../../components/backButton";
import VideoOverview from "../../components/videoOverview";
import About from "../../components/About";
import TwoVideos from "../../components/TwoVideos";
import { ExternalLink } from 'lucide-react';

function GuideMeOut() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <Navbar />
      <div className="project-container mx-auto px-10 md:px-30 pt-30 md:pt-20">
        <BackButton />
        <VideoOverview title="Guide Me Out" url="/videos/guide-me-out/guide-me-out-overview.mp4" />
        <About
          about="Guide Me Out is a 2D platformer where players control a trapped cat using a command-based system instead of direct inputs. The game introduces a unique mechanic where actions are executed through a programmable sequence of commands."
          role="Game Programmer & Game Designer"
          teamSize="4"
          timeFrame="1 week"
          engine="Unity"
        />
        
       {/* Introduction */}
        <div className="mt-6">
          <h1 className="text-xl md:text-2xl font-bold mb-2">Introduction</h1>
          <p className="text-md md:text-lg">
            In Guide Me Out, players take on the role of a cat trapped in an underground dungeon, trying to find a way out. Unlike traditional platformers, movement is limited to basic left and right controls, while advanced actions such as jumping, dashing, punching, and interacting with objects are executed through a command system. Players must strategically arrange command boxes into a limited set of slots, creating a looping sequence of actions that the character continuously performs to overcome obstacles.
            </p>
        </div>

        {/* Highlight System */}
        <div className="mt-6">
          <h1 className="text-xl md:text-2xl font-bold mb-2">Command-Based Execution System</h1>
          <p className="text-md md:text-lg">
            The core system of this game is a command-based execution mechanic, where players drag and drop action commands into a fixed container that executes them sequentially in a loop. This transforms traditional platforming into a semi-programming experience, requiring players to think ahead and design action sequences rather than relying on reflexes. I implemented a system that connects world-space objects (command boxes) with UI-based containers, enabling real-time updates and continuous execution logic. This system also had to handle timing, order of execution, and interaction with in-game obstacles.
            </p>
        </div>

        {/* Two Videos */}
        <div className="mt-6">
          <TwoVideos url1="/videos/guide-me-out/guide-me-out-cmdbox1.mp4" url2="/videos/guide-me-out/guide-me-out-cmdbox2.mp4" />
        </div>

        {/* What I Learned */}
        <div className="mt-6 pb-10">
          <h1 className="text-xl md:text-2xl font-bold mb-2">What I Learned</h1>
          <p className="text-md md:text-lg">
            Through this project, I learned how to design and implement a non-traditional control system that blends gameplay with programming logic. I gained experience in building drag-and-drop mechanics between world space and UI, as well as managing continuous execution loops. Additionally, I improved my understanding of player interaction design and how to create challenges through system constraints rather than direct controls.
            </p>
            <p className="text-md md:text-lg">
              Download and Play Guide Me Out on <a href="https://genia-labs.itch.io/guide-me-out" target="_blank" className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">itch.io <ExternalLink className="w-4 h-4 inline"/></a>
            </p>
        </div>
      </div>
    </div>
  );
}

export default GuideMeOut;