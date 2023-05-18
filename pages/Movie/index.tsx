import React from 'react'
import Movies from '../../components/Movie/Movies'
import VideoPlayer from '../../components/Movie/Videoplayer'
import Layout from '../../components/Layout'



const index = () => {
  return (
    <div>
      <Layout >
        {/* <VideoPlayer videoUrl={"videoUrl"} /> */}
        {/* {<br/>} */}
        <Movies />
      </Layout>

    </div>
  )
}

export default index
