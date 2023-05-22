import React, { useEffect, useState } from 'react';
import { Empty } from 'antd';
import styles from './MostRatedMovies.module.css';

const MostRatedMovies = ({ movies }) => {
  const [mostRatedMovies, setMostRatedMovies] = useState([]);

  useEffect(() => {
    // Function to calculate most rated movies
    const calculateMostRatedMovies = () => {
     
      const sortedMovies = movies.sort((a, b) => b.rating - a.rating);

      // Get the top 10 most rated movies
      const topRatedMovies = sortedMovies.slice(0, 10);
 
      const moviesWithRatingSum = topRatedMovies.map((movie) => ({
        ...movie,
        ratingSum: movie.ratings.reduce((acc, cur) => acc + cur.ratingValue, 0),
      }));

      setMostRatedMovies(moviesWithRatingSum);
    };

    calculateMostRatedMovies();
  }, [movies]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Most Rated Movies</h1>
      {mostRatedMovies.length > 0 ? (
        <ul className={styles.list}>
          {mostRatedMovies.map((movie) => (
            <li key={movie.id} className={styles.movie}>
              <span className={styles.movieTitle}>{<img src={movie.pictureUrl} />}</span>
              <span className={styles.movieRating}>
                Rating: {movie.starring} | Rating Sum: {movie.ratingSum}
              </span>
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
