import React, { useContext } from 'react'
import VideoCard from './VideoCard';
import{Link} from "react-router-dom";
import VideoDeetsContext from '../utils/VideoDeetsContext';

const VideoContainer = ({user}) => {
  
  const videos = useContext(VideoDeetsContext);
  // console.log(videoData.value, "abc");

  // const[videos, setVideos] = useState(null);

  // useEffect(() =>{
  //   getVideos();
  // }, []) 

  // const getVideos = async () =>{
  //   const data = await fetch (YT_VIDEO_API);
  //   const json = await data.json();
  //   //console.log(json.items);

  //   setVideos(json.items);

  // }
  //const videoDetails = useVideoDeets();


  return (
    <div className=' flex flex-wrap'>
      {(videos.value !== null) ? 
      (videos.value.map((video) => (<Link key={video.id} to={"/watch?v=" + video.id}><VideoCard  info = {video} user ={user} /></Link>)))
       :

        ""
      } 
    </div>
  )
}

export default VideoContainer