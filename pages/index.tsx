
import React, { useEffect } from 'react'
import Home from '../components/Home'
import { useMovie } from '../providers/movie'
import Layout from './Movie/Layout'
import Movie from './../pages/Movie'
import Login from './Login'

function index() {
  const {fetchMovies, FetchedMovies} = useMovie()

  useEffect(() => {
    fetchMovies()
  
  }, [])

  if (!FetchedMovies) {
    return <div>Loading.............</div>
  }

  
  return (
    <div>
        {/* <Login/> */}
          <Home/>
        {/* <Movie/> */}
     
    </div>
  )
}

export default index;
