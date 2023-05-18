import React, { useState } from 'react';
import { Carousel, Card } from 'antd';
import { useMovie } from '../../providers/movie';
import { IMovie } from '../../providers/movie/context';

const Playlist = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {FetchedMovies} =useMovie()

  const handleSlideChange = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  console.log("mmmmmmmmmmmmmmmmmm",FetchedMovies);
  return (
    <Carousel
      className="playlist-carousel"
      dots={false}
      beforeChange={handleSlideChange}
    >
      {FetchedMovies.map((movie:IMovie) => (
        <div key={movie.id}>
          <Card className="playlist-card">
            <h2>{movie.title}</h2>
            <img src={movie.categoryName} alt={movie.starring} />
          </Card>
        </div>
      ))}
    </Carousel>
  );
};

export default Playlist;
