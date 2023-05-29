import React, { useState, useEffect } from "react";
import { Empty, Card, Pagination, Button, notification } from "antd";
import Link from "next/link";
import styles from "./WatchListMovies.module.css";

const { Meta } = Card;

const WatchList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [watchlist, setWatchlist] = useState([]);

  const moviesPerPage = 8;
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = watchlist.slice(indexOfFirstMovie, indexOfLastMovie);

  const handleRemoveFromWatchlist = (movieId:string) => {
    setWatchlist((prevWatchlist) => {
      const newWatchlist = prevWatchlist.filter((movie) => movie.id !== movieId);
      localStorage.setItem("watchlist", JSON.stringify(newWatchlist)); // Save updated watchlist to local storage
      return newWatchlist;
    });
    notification.success({
        message: "Success",
        description: "Removed movie from watchlist.",
        
      });
      
  };
  

  useEffect(() => {
    const savedWatchlist = localStorage.getItem("watchlist");
    if (savedWatchlist) {
      setWatchlist(JSON.parse(savedWatchlist)); // Load watchlist from local storage
    }
  }, []);

  const renderMovies = () => {
    if (!Array.isArray(currentMovies) || currentMovies.length === 0) {
      return <Empty description="No movies found." />;
    }

    return (
      <div className={styles.row}>
        {currentMovies.map((movie) => (
          <div key={movie.id}>
            <div className={styles.card}>
              <Link href={`/WatchList/${movie.id}`} passHref>
                <Card
                  hoverable
                  style={{ height: "100%" }}
                  cover={<img src={movie.pictureUrl} alt={movie.title} style={{ height: "300px" }} />}
                >
                  <Meta title={movie.title} description={movie.starring} />

                </Card>
              </Link>
              <Button type="primary" onClick={() => handleRemoveFromWatchlist(movie.id)}>
                    Remove from WatchList
                  </Button>
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
        total={watchlist.length || 0}
        pageSize={moviesPerPage}
        onChange={handlePaginationChange}
        className={styles.pagination}
      />
    </div>
  );
};

export default WatchList;

