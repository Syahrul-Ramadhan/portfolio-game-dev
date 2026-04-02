function TwoVideos({ url1, url2 }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 ">
        {/* 🎥 VIDEO SECTION */}
        <video
        src={url1}
        autoPlay
        loop
        muted
        className="w-full md:w-1/2 aspect-video object-cover"
        />

        <video
        src={url2}
        autoPlay
        loop
        muted
        className="w-full md:w-1/2 aspect-video object-cover"
        />
    </div>
  );
}

export default TwoVideos;