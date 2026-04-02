import { User, Users, Clock, Wrench } from "lucide-react";

function About({ about, role, teamSize, timeFrame, engine }) {
  return (
    <div className="flex flex-col md:flex-row py-6 gap-4">
        <div className="bg-zinc-800 rounded-sm p-6 w-full">
            <h1 className="text-xl md:text-2xl font-bold mb-2">About</h1>
            <p className="text-md md:text-lg">{about}</p>
        </div>
        <div className="bg-zinc-800 rounded-sm p-6 w-full">
            <h1 className="text-xl md:text-2xl font-bold mb-2">Project Info</h1>
            <p className="text-md md:text-lg pb-1"><User className="inline mr-2" /> Role: {role}</p>
            <p className="text-md md:text-lg pb-1"><Users className="inline mr-2" /> Team Size: {teamSize}</p>
            <p className="text-md md:text-lg pb-1"><Clock className="inline mr-2" /> Time Frame: {timeFrame}</p>
            <p className="text-md md:text-lg pb-1"><Wrench className="inline mr-2" /> Engine: {engine}</p>
        </div>
    </div>
  );
}

export default About;