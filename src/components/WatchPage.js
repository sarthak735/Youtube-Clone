import React, { useEffect, useContext, useState} from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/sidebarSlice';
import { useSearchParams, Link } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import VideoDeetsContext from '../utils/VideoDeetsContext';
import {useFilter} from '../utils/useFilter';
import Shimmer from './Shimmer';
import VideoCard from './VideoCard';



const WatchPage = () => {
    const videos = useContext(VideoDeetsContext);
    const [searchParams] = useSearchParams();
    //const[relatedVideos, setRelatedVidoes] = useState();
    const id = searchParams.getAll("v");
 
    const dispatch = useDispatch();
    
    //console.log(videos.value);

    useEffect(() =>{
      
      //fetchRelatedVideos();
      dispatch(closeMenu());
  })

  

  const filter = useFilter(videos.value, id[0]);

    const data = videos.value !== null ? filter : null;

    

    
  return (
    <>
    {data === null ?(
      <Shimmer/>
    ) :(
    <div className='flex flex-wrap'>   
        <div className=' flex flex-col'>
        <div className=' px-5 rounded-xl'>
          <iframe title='yt' id="ytplayer" type="text/html" width="1100" height="600" allow='autoplay encrypted-media'
      src={"https://www.youtube.com/embed/" + id}>

      </iframe>
        </div>
        <div className=' px-5 py-3 flex-wrap shadow-lg'>
          <h1 className=' font-bold'>{data?.snippet?.title}</h1>
          <div className='flex flex-wrap pt-2'>
            <img 
            alt='Channel_img'
            src='https://yt3.ggpht.com/4RM7sEvMAp5QokwqBbcQh9_XD53E2PGrfwCClaqT_IAL2FnIzWqxyBN3JuPKMas-dL0do9t-=s48-c-k-c0x00ffffff-no-rj'
            />
            <div>
              <h1 className=' font-bold'>{data?.snippet?.channelTitle}</h1>
              <h2>Subscribers Count</h2>
            </div>
            <button className=' rounded-2xl bg-gray-100 px-5 py-2 m-2'>Join</button>
            <button className='rounded-2xl bg-red-500 px-5 py-2 m-2'>Subscribe</button>
          
            <div className='flex ml-44'>
              <button className=' rounded-2xl bg-gray-100 px-5 py-2 m-2'>Like</button>
              <button className=' rounded-2xl bg-gray-100 px-5 py-2 m-2'>Dislike</button>
              <button className=' rounded-2xl bg-gray-100 px-5 py-2 m-2'>Share</button>
              <button className=' rounded-2xl bg-gray-100 px-5 py-2 m-2'>Download</button>
              <button className=' rounded-2xl bg-gray-100 px-5 py-2 m-2'>Thanks</button>
            </div>
          </div>

        </div>
        <CommentContainer/>
      </div>
    <div className=''>
      <h1 className=' font-bold pl-3'>Recommended Videos</h1>
    {(videos.value !== null) ? 
      (videos.value.map((video) => (<Link key={video.id} to={"/watch?v=" + video.id}><VideoCard  info = {video} /></Link>)))
       :

        ""
      } 
      </div>  
  </div>
    )
  }
   </> 
  )
}

export default WatchPage