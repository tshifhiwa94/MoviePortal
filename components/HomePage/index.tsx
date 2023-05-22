import React from 'react';
import { Carousel, Card } from 'antd';
import { useMovie } from '../../providers/movie';
import styles from './Home.module.css'

const HomePage = () => {
  const { FetchedMovies } = useMovie();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to ZMovie</h1>

      <Carousel effect="scrollx" autoplay>
        {FetchedMovies.map((movie) => (
          <div key={movie.id}>
            <Card hoverable className={styles.card}>
              <div className={styles.imageContainer}>
                <img
                  alt={movie.title}
                  src={movie.pictureUrl}
                  className={styles.movieImage}
                />
              </div>
              <Card.Meta title={movie.title} description={movie.starring} />
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomePage;

