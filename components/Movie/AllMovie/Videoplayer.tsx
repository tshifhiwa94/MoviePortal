import React from 'react';
import ReactPlayer from 'react-player';
import styles from './styles.module.css';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className={styles.videoPlayerContainer}>
      <ReactPlayer
        url={videoUrl}
        controls={true}
        width="100%"
        height="100%"
        className={styles.reactPlayer}
      />
    </div>
  );
};

export default VideoPlayer;


