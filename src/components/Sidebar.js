import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    if(!isMenuOpen) return null;

  return (
    <div className=" p-5 shadow-lg w-48 mix-blend-overlay">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Subscriptions</li>
            
        </ul>
        
        <h1 className=' font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li>Snax Gaming</li>
            <li>iShinobi</li>
            <li>Krafton India</li>
            <li>Charlie Puth</li>
            <li>Reel Rejects</li>
            <li>Goblin</li>
            <li>Shreya Pujari</li>
        </ul>

        <h1 className='font-bold pt-5'>Expore</h1>
        <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Movies</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
            <li>Sports</li>
            <li>Learning</li>
            <li>Fashion & Beauty</li>
        </ul>
    </div>
  )
}

export default Sidebar