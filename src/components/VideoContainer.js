import React, { useContext } from 'react'
import VideoCard from './VideoCard';
import{Link} from "react-router-dom";
import VideoDeetsContext from '../utils/VideoDeetsContext';

const VideoContainer = () => {
  
  const videos = useContext(VideoDeetsContext);


  return (
    <div className=' flex flex-wrap w-screen'>
      {(videos.value !== null) ? 
      (videos.value.map((video) => (<Link key={video.id} to={"/watch?v=" + video.id}><VideoCard  info = {video}/></Link>)))
       :

        ""
      } 
    </div>
  )
}

export default VideoContainer