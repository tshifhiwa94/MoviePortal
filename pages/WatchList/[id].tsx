import { FC } from "react";
import { useRouter } from "next/router";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./WatchList.module.css";
import MovieSuggestions from "../../components/movieSuggestions/movieSuggestions - Copy/MovieSuggestions";
import { IMovie } from "../../interfaces";
import VideoPlayer from "../../components/Movie/AllMovie/Videoplayer";
import { Carousel } from "antd";

const MoviePage: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const savedWatchlist = localStorage.getItem("watchlist");
  const watchlist = savedWatchlist ? JSON.parse(savedWatchlist) : [];
  const selectedMovie = watchlist.find((movie: IMovie) => movie.id === id);

  var foundMovie: IMovie;
  var foundCategory: IMovie[];

  if (watchlist) {
    foundMovie = watchlist.find((movie: IMovie) => movie.id.toString() === id);
    foundCategory = watchlist.filter(
      (movie: IMovie) =>
        movie?.starring.toLowerCase() === foundMovie?.starring.toLowerCase() &&
        movie?.id.toString() !== id
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/WatchList">
          <button className={styles.goBackButton}>
            <ArrowLeftOutlined />
          </button>
        </Link>
        <h1 className={styles.title}>{selectedMovie?.title}</h1>
      </div>
      <div className={styles.videoContainer}>
        {selectedMovie && <VideoPlayer videoUrl={selectedMovie.videoUrl} />}
      </div>
      <Carousel effect="scrollx" autoplay><MovieSuggestions movies={foundCategory} /></Carousel >
      
    </div>
  );
};

export default MoviePage;
