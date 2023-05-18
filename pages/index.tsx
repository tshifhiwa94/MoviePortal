
import React, { useEffect } from 'react'
import Home from '../components/Home'
import { useMovie } from '../providers/movie'
import Movie from './Movie'
import NavBar from '../components/NavBar'
import Register from './Register'
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
         
          {/* <NavBar/> */}
          <Movie/>

          {/* <Register/> */}
    </div>
  )
}

export default index;
