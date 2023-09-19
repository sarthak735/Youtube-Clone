import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/sidebarSlice';
import { useSearchParams } from 'react-router-dom';


const WatchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams)
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(closeMenu());
    }, [])
  return (
    <div>WatchPage</div>
  )
}

export default WatchPage