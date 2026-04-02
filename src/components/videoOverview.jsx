function VideoOverview({ title, url }) {
  return (
    <div className="relative">
        {/* 🎥 VIDEO SECTION */}
        <video
        src={url}
        autoPlay
        loop
        muted
        className="w-full aspect-video object-cover"
        />

        {/* Overlay Info */}
        <div className="absolute w-full bg-zinc-900/75 bottom-0 px-6 py-4 flex gap-2 text-lg md:text-2xl font-bold text-emerald-500">
          <span className="flex "> {title}
          </span>
        </div>
    </div>
  );
}

export default VideoOverview;