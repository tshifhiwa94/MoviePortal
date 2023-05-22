import React, { useState } from "react";
import { Spin } from "antd";
import { useMovie } from "../../../providers/movie";
// import GlobalSearch from "../GlobalSearch/GlobalSearch";
import MovieList from "../MovieList/MovieList";

const AllMovies = () => {
  const { FetchedMovies } = useMovie();
  const [searchText, setSearchText] = useState("");


  const filterMovies = (movies) => {
    if (searchText === "") 
    {
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
        {/* <GlobalSearch onSearch={handleSearch} /> */}
      </div>
      { !FetchedMovies? (
        <Spin size="large" />
      ) : (
        <MovieList movies={filteredMovies} />
      )}
    </div>
  );
};

export default AllMovies;


