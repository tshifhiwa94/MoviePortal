import React from 'react'
import Playlist from './Playlist'
import NavBar from './NavBar'
import Footer from './Footer'
import VideoPlayer from './VideoPlayer'
import LayoutMain from './Layout'

const index = () => {
  return (
    <div>
      <LayoutMain>
        <NavBar/>
        <VideoPlayer/>
        <Playlist/>
        <Footer/>
      </LayoutMain>
       
    </div>
  )
}

export default index
