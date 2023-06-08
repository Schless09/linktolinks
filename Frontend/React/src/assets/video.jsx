// export default VideoPlayer;
import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer() {
  return (
    <box>
      <ReactPlayer
        url="https://player.vimeo.com/video/423279311?h=8f9a26c8f6"
        position="absolute"
        width="100"
        height="100"
        startAt={20}
        playing={true}
        loop
      />
    </box>
  );
}

export default VideoPlayer;
