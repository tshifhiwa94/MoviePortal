// import React, { useState } from "react";
// import { Empty, Card, Carousel, Pagination } from "antd";
// import Link from "next/link";
// import styles from "./MovieList.module.css";

// const { Meta } = Card;

// const MovieList = ({ movies }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const moviesPerPage = 5;

//   const indexOfLastMovie = currentPage * moviesPerPage;
//   const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
//   const currentMovies = movies?.slice(indexOfFirstMovie, indexOfLastMovie);

//   const renderMovies = () => {
//     if (!Array.isArray(movies) || movies.length === 0) {
//       return <Empty description="No movies found." />;
//     }

//     return (
//       <div className={styles.row}>
//         {currentMovies.map((movie) => (
//           <Link key={movie.id} href={`/Movie/${movie.id}`} passHref>
//             <div className={styles.card}>
//               <Card
//                 hoverable
//                 style={{ height: "100%" }}
//                 cover={<img src={movie.pictureUrl} alt={movie.title} style={{ height: "300px" }} />}
//               >
//                 <Meta title={movie.title} description={movie.starring} />
//               </Card>
//             </div>
//           </Link>
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




import React, { useState } from "react";
import { Empty, Card, Pagination, Rate } from "antd";
import Link from "next/link";
import styles from "./MovieList.module.css";

const { Meta } = Card;

const MovieList = ({ movies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 5;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies?.slice(indexOfFirstMovie, indexOfLastMovie);

  const renderMovies = () => {
    if (!Array.isArray(movies) || movies.length === 0) {
      return <Empty description="No movies found." />;
    }

    const handleRateMovie = (movieId, rating) => {
      console.log(`Rating for movie ${movieId}: ${rating}`);
    };

    return (
      <div className={styles.row}>
        {currentMovies.map((movie) => (
        

          <div>
              <Link key={movie.id} href={`/Movie/${movie.id}`} passHref>
            <div className={styles.card}>
              <Card
                hoverable
                style={{ height: "100%" }}
                cover={<img src={movie.pictureUrl} alt={movie.title} style={{ height: "300px" }} />}
              >
                <Meta title={movie.title} description={movie.starring} />
                
              </Card>
            </div>
          </Link>
            <Rate allowHalf defaultValue={0} onChange={(rating) => handleRateMovie(movie.id, rating)} />
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
