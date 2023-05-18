import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const MovieFooter = () => {
  return (
    <Footer className="movie-footer">
      Movie Portal &copy; {new Date().getFullYear()}
    </Footer>
  );
};

export default MovieFooter;

