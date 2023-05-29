import React, { useEffect, useState } from 'react';
import MostRatedMovies from '../../components/Movie/MostRated/MostRatedMovies';
import Layout from '../../components/Layout';
import { useMovie } from '../../providers/movie';

const IndexPage = () => {

  return (
    <Layout>
      <MostRatedMovies />
    </Layout>
  );
};

export default IndexPage;

