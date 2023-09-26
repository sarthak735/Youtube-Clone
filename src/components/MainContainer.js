import React, {useState, useEffect} from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
//import {Provider} from "react-redux"; 
import videoByCatContext from '../utils/videoByCatContext';
import { VIDEO_BY_CATEGORY } from '../utils/constants';

const MainContainer = () => {

  const[byCategory, setByCategory] = useState([]);

  useEffect(() =>{
    getByCategory();
  },[])

  const getByCategory = async () =>{
    const data = await fetch (VIDEO_BY_CATEGORY);
    const json = await data.json();
    console.log(json.items.map(x => x.snippet.title));

    setByCategory(json.items);
  }


  return (
    <div>
      <videoByCatContext.Provider value={{value:byCategory, status:null}}>
      <ButtonList/>
      </videoByCatContext.Provider>
      <VideoContainer/>
      
    </div>
  )
}

export default MainContainer
