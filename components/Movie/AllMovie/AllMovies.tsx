import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import { useMovie } from "../../../providers/movie";
import MovieList from "../MovieList/MovieList";

const AllMovies = () => {
  const { FetchedMovies, fetchMovies } = useMovie();
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies(); // Fetch movies when the component mounts
  }, []);

  const filterMovies = (movies) => {
    if (searchText === "") {
      return movies;
    }

    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const filteredMovies = filterMovies(FetchedMovies);

  return (
    <div>
      <div style={{ position: "sticky", top: 0, zIndex: 1 }}>
      </div>
      {loading ? (
        <Spin size="large" />
      ) : (
        <MovieList movies={filteredMovies} />
      )}
    </div>
  );
};

export default AllMovies;


