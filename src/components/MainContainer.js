import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = ({user}) => {
  return (
    <div>
      <ButtonList/>
      <VideoContainer user= {user}/>
    </div>
  )
}

export default MainContainer
