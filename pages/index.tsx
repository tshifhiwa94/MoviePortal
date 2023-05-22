
import React, { useEffect } from 'react'
import { useMovie } from '../providers/movie'
import Movie from './MoviePage.module.css'
import Layout from '../components/Layout'
import HomePage from '../components/HomePage'
import AuthPage from './Auth'


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
      <AuthPage/>

        {/* <Layout>
              <HomePage/>
        </Layout> */}
         
    </div>
  )
}

export default index;
