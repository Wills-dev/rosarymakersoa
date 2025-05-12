import React from "react";

const OurVideo = () => {
  return (
    <div className="padding-y padding-ctn bg-black">
      <div className="w-full aspect-video">
        <iframe
          className="w-full h-full"
          src="https://player.vimeo.com/video/877740921?dnt=1&app_id=122963"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default OurVideo;
