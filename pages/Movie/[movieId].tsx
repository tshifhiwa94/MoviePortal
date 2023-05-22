import { FC } from "react";
import { useRouter } from "next/router";
import { useMovie } from "../../providers/movie";
import VideoPlayer from "../../components/Movie/AllMovie/Videoplayer";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./MoviePage.module.css";

const MoviePage: FC = () => {
  const { FetchedMovies } = useMovie();
  const router = useRouter();
  const { movieId } = router.query;
  const selectedMovie = FetchedMovies.find((movie) => movie.id === movieId);

  const handleGoBack = () => {
    router.back();
  };

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
    </div>
  );
};

export default MoviePage;




















