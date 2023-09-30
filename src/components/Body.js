import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import ToggleSideBar from './ToggleSideBar'
import { useDispatch } from 'react-redux'
import { getVideosByCategory } from '../utils/videos.action'


const Body = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVideosByCategory())
  }, [dispatch])

  return (
    <div className='flex'>
      <Sidebar/>
      <ToggleSideBar/>
      <Outlet/>
    </div>
  )
}

export default Body
