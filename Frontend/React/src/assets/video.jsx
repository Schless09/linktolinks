import React from "react";
import "../assets/styles/video.css";

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <iframe
        src="https://player.vimeo.com/video/423279311?autoplay=1&loop=1&title=0&portrait=0&start=10&controls=0?background=1"
        className="video-frame"
        frameBorder="0"
        allow="autoplay"
        byline="false"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
