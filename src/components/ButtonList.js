import React from 'react'
import Button from "./Button"

//const list = ["All", "Gaming", "Live", "Music", "Monkey D.Luffy", "Mixes", "Chill out mixes", "Reaction videos", "BGMI", "Computer Programming", "Esports"];

const ButtonList = () => {
  return (
    <div className=' flex '>
    {/* //         list.map(name => (
    //             <Button>{name}</Button>
    //         ))
    //     } */}


        <Button name = "All"/>
        <Button name = "Gaming"/>
        <Button name = "Live"/>
        <Button name = "Music"/>
        <Button name = "Monkey D.Luffy"/>
        <Button name = "Mixes"/>
        <Button name = "Chill-out Music"/>
        <Button name = "Reaction videos"/>
        <Button name = "BGMI"/>
        <Button name = "Computer programming"/>
        <Button name = "Esports"/>
        
    </div>
  )
}

export default ButtonList