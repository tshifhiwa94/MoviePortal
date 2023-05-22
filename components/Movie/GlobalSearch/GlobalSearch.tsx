
// import React, { useState } from "react";
// import { Input } from "antd";

// const { Search } = Input;

// const GlobalSearch = ({ onSearch }) => {
//   const [searchText, setSearchText] = useState("");

//   const handleSearch = (value) => {
//     setSearchText(value.trim());
//     onSearch(value.trim());
//   };

//   return (
//     <Search
//       placeholder="Search movies..."
//       allowClear
//       enterButton="Search"
//       size="large"
//       onSearch={handleSearch}
//       style={{ marginBottom: 16 }}
//     />
//   );
// };

// export default GlobalSearch;


























// import React, { FC, useState } from "react";
// import { Input, Spin, Empty } from "antd";
// import { useMovie } from "../../providers/movie";
// import MovieCard from "./MovieCard";

// const { Search } = Input;

// const AllMovies: FC = () => {
//   const { FetchedMovies } = useMovie();
//   const [searchText, setSearchText] = useState("");

//   const handleSearch = (value: string) => {
//     setSearchText(value);
//   };

//   const filterMovies = (movies) => {
//     if (searchText === "") {
//       return movies;
//     }

//     return movies.filter((movie) =>
//       movie.title.toLowerCase().includes(searchText.toLowerCase())
//     );
//   };

//   const renderMovies = () => {
//     const filteredMovies = filterMovies(FetchedMovies);

//     if (filteredMovies.length === 0) {
//       return <Empty description="No movies found." />;
//     }

//     return filteredMovies.map((movie) => (
//       <MovieCard key={movie.id} movie={movie} />
//     ));
//   };

//   return (
//     <div>
//       <Search
//         placeholder="Search movies..."
//         allowClear
//         enterButton="Search"
//         size="large"
//         onSearch={handleSearch}
//         style={{ marginBottom: 16 }}
//       />
//       {!FetchedMovies ? (
//         <Spin size="large" />
//       ) : (
//         <div>
//           {renderMovies()}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllMovies;




// import React, { useState } from "react";
// import { Input } from "antd";
// import { useMovie } from "../../providers/movie";
// import Link from "next/link";

// const { Search } = Input;

// const GlobalSearch = () => {
//   const { FetchedMovies } = useMovie();
//   const [searchText, setSearchText] = useState("");

//   const handleSearch = (value) => {
//     setSearchText(value.trim());
//   };

//   const filterMovies = (movies) => {
//     if (searchText === "") {
//       return movies;
//     }

//     return movies.filter((movie) =>
//       movie.title.toLowerCase().includes(searchText.toLowerCase())
//     );
//   };

//   const renderMovies = () => {
//     const filteredMovies = filterMovies(FetchedMovies);

//     return filteredMovies.map((movie) => (
//       <Link key={movie.id} href={`/Movie/${movie.id}`} passHref>
//         <a>{movie.title}</a>
//       </Link>
//     ));
//   };

//   return (
//     <div>
//       <Search
//         placeholder="Search movies..."
//         allowClear
//         enterButton="Search"
//         size="small"
//         onSearch={handleSearch}
//       />
//       <div>{renderMovies()}</div>
//     </div>
//   );
// };

// export default GlobalSearch;
