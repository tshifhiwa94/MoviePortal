
import React, { useEffect } from 'react'
import { useMovie } from '../providers/movie'
import AuthPage from './Auth'


function index() {
  const {fetchMovies, FetchedMovies} = useMovie()

  useEffect(() => {
    fetchMovies()
  
  }, [])

  if (!FetchedMovies) {
    return <div>Loading...</div>
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
