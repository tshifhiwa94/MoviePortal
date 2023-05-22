import React, { useEffect, useState } from 'react';
import MostRatedMovies from '../../components/Movie/MostRated/MostRatedMovies';
import Layout from '../../components/Layout';
import { useMovie } from '../../providers/movie';

const IndexPage = () => {
  // Simulated movie data
 
  const {FetchedMovies}=useMovie()

  return (
    <Layout>
      <MostRatedMovies movies={FetchedMovies} />
    </Layout>
  );
};

export default IndexPage;

