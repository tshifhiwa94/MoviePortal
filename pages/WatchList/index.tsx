import React from 'react'
import WatchList from '../../components/Movie/WatchListPage'
import WatchListPage from '../../components/Movie/WatchListPage'
import Layout from '../../components/Layout';

const index = () => {
    const savedWatchlist = localStorage.getItem("watchlist");
  return (
    <div>
        <Layout>
            <WatchList/>
        </Layout>
      
    </div>
  )
}

export default index
