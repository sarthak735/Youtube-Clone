import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/sidebarSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';


const WatchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(closeMenu());
    }, [])
  return (
    <div className=' flex flex-col'>
      <div className=' px-5 rounded-lg'>
        <iframe id="ytplayer" type="text/html" width="1100" height="600"
    src={"https://www.youtube.com/embed/" + searchParams.get("v")}
    frameborder="0"></iframe>
      </div>
      <CommentContainer/>
    </div>
  )
}

export default WatchPage