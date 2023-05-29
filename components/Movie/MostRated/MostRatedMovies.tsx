import React from 'react';
import { Empty } from 'antd';
import styles from './MostRatedMovies.module.css';
import { useMovie } from '../../../providers/movie';
import { Rate } from 'antd';

const MostRatedMovies = () => {
  const { MostRatedMovies } = useMovie();


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Most Rated Movies</h1>
      {MostRatedMovies && MostRatedMovies.length > 0 ? (
        <ul className={styles.movieList}>
          {MostRatedMovies.map((movie) => (
            <li key={movie.id} className={styles.movieItem}>
              <img src={movie.pictureUrl} alt={movie.title} className={styles.movieImage} />
              <div className={styles.movieInfo}>
                <span className={styles.movieTitle}>{movie.title}</span>
                <span className={styles.movieRating}>
                  Rating Count: {<Rate disabled defaultValue={movie.rateCount} />}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <Empty description="No most rated movies available." />
      )}
    </div>
  );
};

export default MostRatedMovies;
















