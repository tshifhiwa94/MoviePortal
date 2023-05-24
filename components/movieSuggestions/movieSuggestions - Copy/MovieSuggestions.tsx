import React from 'react';
import { Card } from 'antd';
import styles from './styles.module.css';
import { useRouter } from 'next/router';

const MovieSuggestions = ({ movies }) => {
  const router = useRouter();

  const handleWatchNow = (movieId) => {
    router.push(`/Movie/${movieId}`);
  };

  return (
    <div id="divRight" className={styles.movieSuggestions}>
      <h2>Movie Suggestions</h2>
      <div className={styles.movieGrid}>
        {movies?.map((movie, index) => (
          <div key={index} className={styles.movieCard} onClick={() => handleWatchNow(movie.id)}>
            <Card
              hoverable
              cover={<img className={styles.movieCardCover} alt={movie.starring} src={movie.pictureUrl} />}
              className={styles.movieCardContent}
            >
              <Card.Meta
                title={<h3 className={styles.movieCardTitle}>{movie.title}</h3>}
                description={
                  <>
                    <p>Category: {movie.categoryName}</p>
                  </>
                }
              />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSuggestions;
