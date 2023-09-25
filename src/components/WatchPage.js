import React, { useEffect, useContext, useState} from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/sidebarSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import VideoDeetsContext from '../utils/VideoDeetsContext';
import {useFilter} from '../utils/useFilter';
import Shimmer from './Shimmer';
import ContainerRelatedVideos from './ContainerRelatedVideos';



const WatchPage = () => {
    const videos = useContext(VideoDeetsContext);
    const [searchParams] = useSearchParams();
    //const[relatedVideos, setRelatedVidoes] = useState();
    const id = searchParams.getAll("v");
 
    const dispatch = useDispatch();
    
    console.log(videos.value);

    useEffect(() =>{
      
      //fetchRelatedVideos();
      dispatch(closeMenu());
  })

  

  const filter = useFilter(videos.value, id[0]);

    const data = videos.value !== null ? filter : null;

  const[like, setLike] = useState(0),
  [isLike, setIsLike] = useState(false);
    const onLikeButton = () =>{
      setLike(like + (isLike ? -1 : 1));
      setIsLike(!isLike);
      
  }
    

    
  return (
    <>
    {data === null ?(
      <Shimmer/>
    ) :(
    <div className='flex'>   
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
            className='pb-1 pt-1'
            alt='Channel_img'
            src='https://yt3.ggpht.com/4RM7sEvMAp5QokwqBbcQh9_XD53E2PGrfwCClaqT_IAL2FnIzWqxyBN3JuPKMas-dL0do9t-=s48-c-k-c0x00ffffff-no-rj'
            />
            <div className='pt-2'>
              <h1 className=' font-bold'>{data?.snippet?.channelTitle}</h1>
              <h2>Subscribers Count</h2>
            </div>
            <button className=' rounded-2xl bg-gray-200 px-5 py-2 m-2'>Join</button>
            <button className='rounded-2xl bg-red-500 px-5 py-2 m-2'>Subscribe</button>
          
            <div className='flex ml-56'>
              <div className='col-span-10 pt-2 pr-2'>
              {/* <input className='checked:grayscale-0' type="radio" name="radio" id="likeInput"/>
  <label for="likeInput" className=" grayscale">
    <img draggable="false" alt="likes" src="https://i.hizliresim.com/seigsy3.png" className=" checked:grayscale-0"/>
  </label>  */}


                <button onClick={onLikeButton} className=' rounded-2xl bg-gray-200 p-3 pb-2 rounded-l-full hover:bg-gray-100 '><img className=' w-7 ' alt='like' src='https://i.hizliresim.com/seigsy3.png'/></button>
                <button className=' rounded-2xl bg-gray-200  pb-2 text-center p-3 rounded-r-full hover:bg-gray-100'><img className=' w-7 grayscale' alt='like' src='https://i.hizliresim.com/l3xxttm.png'/></button>
              </div>
              <button className=' rounded-full bg-gray-200 p-3 m-2'>Share</button>
              <button className=' rounded-full bg-gray-200 p-3 m-2'>Download</button>
              <button className=' rounded-full bg-gray-200 p-3 m-2'>Thanks</button>
              <button className=' rounded-full bg-gray-200 p-3 m-2'>...</button>
            </div>
          </div>

        </div>
        <CommentContainer/>
      </div>
    <div className=''>
      <h1 className=' font-bold pl-3'>Recommended Videos</h1>
      <ContainerRelatedVideos/>
     
      </div>  
  </div>
    )
  }
   </> 
  )
}

export default WatchPage