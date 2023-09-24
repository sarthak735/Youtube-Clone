import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = ({user}) => {
  

  return (
    <div className='flex'>
      <Sidebar/>
      <Outlet user = {user}/>
    </div>
  )
}

export default Body
