import React, { useEffect, useState } from 'react';
import { Empty } from 'antd';
import styles from './MostViewedMovies.module.css';

const MostViewedMovies = () => {
  const [mostViewedMovies, setMostViewedMovies] = useState([]);

  useEffect(() => {
    // Simulating fetching most viewed movies data
    const fetchMostViewedMovies = async () => {
      try {
        // Perform API request or data fetching here
        // Example:
        const response = await fetch('/api/most-viewed-movies');
        const data = await response.json();
        setMostViewedMovies(data.movies);
      } catch (error) {
        console.error('Error fetching most viewed movies:', error);
      }
    };

    fetchMostViewedMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Most Viewed Movies</h1>
      {mostViewedMovies.length > 0 ? (
        <ul className={styles.list}>
          {mostViewedMovies.map((movie) => (
            <li key={movie.id} className={styles.movie}>
              <span className={styles.movieTitle}>{movie.title}</span>
              <span className={styles.movieViews}>Views: {movie.views}</span>
            </li>
          ))}
        </ul>
      ) : (
        <Empty description="No most viewed movies available." />
      )}
    </div>
  );
};

export default MostViewedMovies;


