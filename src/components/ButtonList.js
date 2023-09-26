//import {BiSolidChevronRight, BiSolidChevronLeft} from "react-icons/bi";
import React, { useContext} from 'react'
import Button from "./Button"
import { Link } from 'react-router-dom'
import videoByCatContext from '../utils/videoByCatContext'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const ButtonList = () => {
  const categories = useContext(videoByCatContext);



  return (
    <>
    <div className=' flex text-[12px] lg:text-[12px] xl:text[12px] font-semibold'>
    <button className='text-[12px] lg:text-[12px] xl:text[12px] font-semibold px-3 py-2 m-1 mb-2 bg-black text-white rounded-lg min-w-max'>All</button>
      {(categories.value !== null) ? 
      (categories.value.map((category) => (<Link key={category.id} to={"/watch?v=" + category.id}><Button  info = {category}/></Link>)))
       :

        ""
      } 
      <NavigateNextIcon/>
        
    </div>
    </>
  )
}

export default ButtonList