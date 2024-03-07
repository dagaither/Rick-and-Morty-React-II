import React from 'react';
import YouTube from 'react-youtube';

const VideoComponent = () => {
  // Video options
  const opts = {
    height: '315',
    width: '560',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  // YouTube video ID
  const videoId = '3YFW5HoAeKo';

  return (
    <div className="video-container" style={{marginTop: "4rem"}}>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default VideoComponent;
