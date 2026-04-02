import { ChevronLeft } from 'lucide-react';

function BackButton() {
  return (
    <button className="flex items-center gap-2 px-2 py-4 text-indigo-400 hover:text-indigo-200 transition-colors text-md md:text-lg font-semibold cursor-pointer"
      onClick={() => window.history.back()}>
      <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      Go Back
    </button>
  );
}

export default BackButton;