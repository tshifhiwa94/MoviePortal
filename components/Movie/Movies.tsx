
import React, { FC, useState } from "react";
import { Card, Image, Col, Row, Carousel, Button } from 'antd';
import { useMovie } from "../../providers/movie";
import { IMovie } from "../../providers/movie/context";
import styles from './styles.module.css';
import VideoPlayer from "./Videoplayer";

const Movies: FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
  const { FetchedMovies } = useMovie();

  const handleClick = (movie: IMovie) => {
    setSelectedMovie(movie);
  };

  const handleCancel = () => {
    setSelectedMovie(null);
  };

  const renderMovies = () => (
    FetchedMovies.map((movie) => (
      <Card
        key={movie.id}
        className="movie-card"
        cover={<Image src={movie.id} alt={movie.pictureUrl} preview={false} />}
        onClick={() => handleClick(movie)}
      >
        <h2 className="movie-title">{movie.title}</h2>
      </Card>
    ))
  );

  return (
    <>
      {selectedMovie && (
        <div className={styles.videoContainer}>
          <VideoPlayer videoUrl={'selectedMovie.video'} />
          <Button onClick={handleCancel} className={styles.cancelButton}>Cancel</Button>
        </div>
      )}

      <Carousel
        slidesToShow={5}
        dots={false}
        autoplay
        autoplaySpeed={2000}
        effect="scrollx"
        style={{ paddingLeft: 20 }}
      >
        {renderMovies()}
      </Carousel>
    </>
  );
};

export default Movies;
