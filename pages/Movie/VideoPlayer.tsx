import React from 'react';
import { useMovie } from '../../providers/movie';

const VideoPlayer = ({}) => {
    const {FetchedMovies}= useMovie()
  return (
    <div>
      <video>
        <source src={'FetchedMovies.map((movie)=>{})'} type="video/mp4"/>
      </video>
    </div>
  );
};

export default VideoPlayer;

