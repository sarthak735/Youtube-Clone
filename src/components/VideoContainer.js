import React, { useEffect, useState } from 'react'
import { YT_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';

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
      (videos.map((video) => (<VideoCard key={video.id} info = {video}/>)))
       :

        ""
      } 
    </div>
  )
}

export default VideoContainer