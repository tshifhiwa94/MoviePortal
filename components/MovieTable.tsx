import React ,{FC,useState,useEffect} from "react";
import {  Card, Image,Col, Row } from 'antd';
import { IMovie } from "../providers/movie/context";
import { useMovie } from "../providers/movie";

const Movies:FC = () => {


    const [selectedMovie, setSelectedMovie] = useState(null);
    const {FetchedMovies} =useMovie();




  
    const handleClick = (movie:IMovie) => {
      setSelectedMovie(movie);
    };

    console.log("1245678",FetchedMovies)


  return (
    <>
      <Row gutter={[16, 16]} justify="center">
        {FetchedMovies.map((movie) => (
          <Col key={movie.id} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card
             className="movie-card"
              cover={<Image src={movie.id} alt={movie.starring} preview={false} />}
              onClick={() => handleClick(movie)}
            >
              <h2 className="movie-title">{movie.title}</h2>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedMovie && (
        <Row gutter={16} justify="center">
          <Col span={400}>
            <Card className="video-card">
              <div className="video-container">
                <video controls className="video-player">
                  <source src={selectedMovie.video} type="video/mp4" />
                </video>
              </div>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Movies;



