import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className='videoPlayer'>
      <ReactPlayer url={videoUrl} controls width="60%" height="40%" />
    </div>
  );
};

export default VideoPlayer;
