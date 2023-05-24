// import React, { useState, useEffect } from "react";
// import { Empty, Card, Pagination, Rate, Button, notification } from "antd";
// import Link from "next/link";
// import styles from "./MovieList.module.css";
// import { IMovie } from "../../../interfaces";

// const { Meta } = Card;

// const MovieList = ({ movies }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [watchlist, setWatchlist] = useState([]);

//   const moviesPerPage = 5;
//   const indexOfLastMovie = currentPage * moviesPerPage;
//   const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
//   const currentMovies = movies?.slice(indexOfFirstMovie, indexOfLastMovie);

//   const handleRateMovie = (movieId, rating) => {
//     console.log(`Rating for movie ${movieId}: ${rating}`);
//   };

//   const handleAddToWatchlist = (movie) => {
//     if (!watchlist.includes(movie)) {
//       setWatchlist((prevWatchlist) => {
//         const newWatchlist = [...prevWatchlist, movie];
//         localStorage.setItem("watchlist", JSON.stringify(newWatchlist)); // Save updated watchlist to local storage
//         return newWatchlist;
//       });

//       notification.success({
//         message: "Success",
//         description: `Added movie ${movie.title} to watchlist.`,
//       });
//     }
//   };

//   const handleRemoveFromWatchlist = (movie) => {
//     setWatchlist((prevWatchlist) => {
//       const newWatchlist = prevWatchlist.filter((item) => item !== movie);
//       localStorage.setItem("watchlist", JSON.stringify(newWatchlist)); // Save updated watchlist to local storage
//       return newWatchlist;
//     });

//     notification.success({
//       message: "Success",
//       description: `Removed movie ${movie.title} from watchlist.`,
//     });
//   };

//   const isAddedToWatchlist = (movie) => {
//     return watchlist.includes(movie);
//   };

//   useEffect(() => {
//     const savedWatchlist = localStorage.getItem("watchlist");
//     if (savedWatchlist) {
//       setWatchlist(JSON.parse(savedWatchlist)); // Load watchlist from local storage
//     }
//   }, []);

//   const renderMovies = () => {
//     if (!Array.isArray(movies) || movies.length === 0) {
//       return <Empty description="No movies found." />;
//     }

//     return (
//       <div className={styles.row}>
//         {currentMovies.map((movie) => (
//           <div key={movie.id}>
//             <div className={styles.card}>
//               <Link href={`/Movie/${movie.id}`} passHref>
//                 <Card
//                   hoverable
//                   style={{ height: "100%" }}
//                   cover={<img src={movie.pictureUrl} alt={movie.title} style={{ height: "220px" }} />}
//                 >
//                   <Meta title={movie.title} description={movie.starring} />
//                 </Card>
//               </Link>
//               <Rate allowHalf defaultValue={0} onChange={(rating) => handleRateMovie(movie, rating)} />
//               {isAddedToWatchlist(movie) ? (
//                 <Button type="primary" onClick={() => handleRemoveFromWatchlist(movie)}>
//                   Added to WatchList
//                 </Button>
//               ) : (
//                 <Button
//                   type="primary"
//                   onClick={() => handleAddToWatchlist(movie)}
//                   disabled={isAddedToWatchlist(movie)}
//                 >
//                   Add to WatchList
//                 </Button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const handlePaginationChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       {renderMovies()}
//       <Pagination
//         current={currentPage}
//         total={movies?.length || 0}
//         pageSize={moviesPerPage}
//         onChange={handlePaginationChange}
//         className={styles.pagination}
//       />
//     </div>
//   );
// };

// export default MovieList;


import React, { useState, useEffect } from "react";
import { Empty, Card, Pagination, Rate, Button, notification } from "antd";
import Link from "next/link";
import styles from "./MovieList.module.css";
import { IMovie } from "../../../interfaces";

const { Meta } = Card;

const MovieList = ({ movies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [watchlist, setWatchlist] = useState([]);

  const moviesPerPage = 5;
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies?.slice(indexOfFirstMovie, indexOfLastMovie);

  const handleRateMovie = (movieId, rating) => {
    console.log(`Rating for movie ${movieId}: ${rating}`);
  };

  const handleAddToWatchlist = (movie) => {
    if (!watchlist.includes(movie)) {
      setWatchlist((prevWatchlist) => {
        const newWatchlist = [...prevWatchlist, movie];
        localStorage.setItem("watchlist", JSON.stringify(newWatchlist)); // Save updated watchlist to local storage
        return newWatchlist;
      });

      notification.success({
        message: "Success",
        description: `Added movie ${movie.title} to watchlist.`,
      });
    }
  };

  const handleRemoveFromWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => {
      const newWatchlist = prevWatchlist.filter((item) => item !== movie);
      localStorage.setItem("watchlist", JSON.stringify(newWatchlist)); // Save updated watchlist to local storage
      return newWatchlist;
    });

    notification.success({
      message: "Success",
      description: `Removed movie ${movie.title} from watchlist.`,
    });
  };

  const isAddedToWatchlist = (movie) => {
    return watchlist.some((item) => item.id === movie.id);
  };

  useEffect(() => {
    const savedWatchlist = localStorage.getItem("watchlist");
    if (savedWatchlist) {
      setWatchlist(JSON.parse(savedWatchlist)); // Load watchlist from local storage
    }
  }, []);

  const renderMovies = () => {
    if (!Array.isArray(movies) || movies.length === 0) {
      return <Empty description="No movies found." />;
    }

    return (
      <div className={styles.row}>
        {currentMovies.map((movie) => (
          <div key={movie.id}>
            <div className={styles.card}>
              <Link href={`/Movie/${movie.id}`} passHref>
                <Card
                  hoverable
                  style={{ height: "100%" }}
                  cover={<img src={movie.pictureUrl} alt={movie.title} style={{ height: "220px" }} />}
                >
                  <Meta title={movie.title} description={movie.starring} />
                </Card>
              </Link>
              <Rate allowHalf defaultValue={0} onChange={(rating) => handleRateMovie(movie, rating)} />
              {isAddedToWatchlist(movie) ? (
                <Button type="text" className={styles.watchlistButton} onClick={() => handleRemoveFromWatchlist(movie)}>
                  Added to WatchList
                </Button>
              ) : (
                <Button
                  type="primary"
                  className={styles.watchlistButton}
                  onClick={() => handleAddToWatchlist(movie)}
                  disabled={isAddedToWatchlist(movie)}
                >
                  Add to WatchList
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handlePaginationChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {renderMovies()}
      <Pagination
        current={currentPage}
        total={movies?.length || 0}
        pageSize={moviesPerPage}
        onChange={handlePaginationChange}
        className={styles.pagination}
      />
    </div>
  );
};

export default MovieList;
