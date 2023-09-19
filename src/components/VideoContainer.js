import React, { useEffect, useState } from 'react'
import { YT_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import{Link} from "react-router-dom";

const VideoContainer = () => {
  

  const[videos, setVideos] = useState(null);

  useEffect(() =>{
    getVideos();
  }, []) 

  const getVideos = async () =>{
    const data = await fetch (YT_VIDEO_API);
    const json = await data.json();
    //console.log(json.items);

    setVideos(json.items);

  }

  return (
    <div className=' flex flex-wrap'>
      {(videos !== null) ? 
      (videos.map((video) => (<Link key={video.id} to={"/watch?v=" + video.id}><VideoCard  info = {video}/></Link>)))
       :

        ""
      } 
    </div>
  )
}

export default VideoContainer