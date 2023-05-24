import React, { useEffect } from 'react';
import { Carousel, Card, Empty } from 'antd';
import { useMovie } from '../../providers/movie';
import styles from './Home.module.css';

const HomePage = () => {
  const { FetchedMovies, fetchMovies } = useMovie();

  useEffect(() => {
    fetchMovies(); // Fetch movies when the component mounts
  }, []);
if(!FetchedMovies )
{
 return <>Loading.....</>
}
  return (
    <div className={styles.container}>
      {FetchedMovies.length === 0 ? (
        <Empty description="No Movies"/>
      ) : (
        <>
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
      
        </>
      )}
    </div>
  );
};

export default HomePage;


