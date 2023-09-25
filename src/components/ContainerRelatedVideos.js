import React, {useContext} from 'react'
import RelatedVideoCard from './RelatedVideoCard';
import { Link } from 'react-router-dom';
import VideoDeetsContext from '../utils/VideoDeetsContext';

const ContainerRelatedVideos = () => {
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
      (videos.value.map((video) => (<Link key={video.id} to={"/watch?v=" + video.id}><RelatedVideoCard  info = {video} /></Link>)))
       :

        ""
      } 
    </div>
  )
}

export default ContainerRelatedVideos