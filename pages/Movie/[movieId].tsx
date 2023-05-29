import { FC } from "react";
import { useRouter } from "next/router";
import { useMovie } from "../../providers/movie";
import VideoPlayer from "../../components/Movie/AllMovie/Videoplayer";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./MoviePage.module.css"
import MovieSuggestions from "../../components/movieSuggestions/movieSuggestions - Copy/MovieSuggestions";
import { IMovie } from "../../interfaces";

const MoviePage: FC = () => {
  const { FetchedMovies } = useMovie();
  const router = useRouter();
  const { movieId } = router.query;
  const selectedMovie = FetchedMovies.find((movie) => movie.id === movieId);


  var foundMovie: IMovie;
  var foundMovies: IMovie[];

  if (FetchedMovies) {
    foundMovie = FetchedMovies.find((movie: IMovie) => movie.id.toString() === movieId);
    foundMovies= FetchedMovies.filter(
      (movie: IMovie) =>
        movie?.categoryName.toLowerCase() === foundMovie?.categoryName.toLowerCase() &&
        movie?.id.toString() !== movieId
    );
  }else{
    foundMovies= FetchedMovies.filter(
      (movie: IMovie) =>
        movie?.rateCount >= foundMovie?.rateCount &&
        movie?.id.toString() !==movieId
    );
  }
  // if (FetchedMovies) {
  //   foundMovie = FetchedMovies.find((movie) => movie.id.toString() === movieId);
  //   foundCategory = FetchedMovies.filter(
  //     (movie) =>
  //       movie?.categoryName.toLowerCase() === foundMovie?.categoryName.toLowerCase() &&
  //       movie?.id.toString() !== movieId
  //   );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/Movie">
          <button className={styles.goBackButton}>
            <ArrowLeftOutlined />
          </button>
        </Link>
        <h1 className={styles.title}>{selectedMovie.title}</h1>
      </div>
      <div className={styles.videoContainer}>
        {selectedMovie && <VideoPlayer videoUrl={selectedMovie.videoUrl} />}
      </div>
      <div className={styles.suggestionsContainer}>
        <MovieSuggestions movies={foundMovies} />
      </div>
    </div>

  );
};
export default MoviePage;