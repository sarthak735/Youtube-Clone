import React from 'react'


const Button = (props) => {
  
  //console.log(props);

  return (
    <div>
        <button className=' px-3 py-2 m-1 mb-2 bg-gray-200 rounded-lg min-w-max'>{props.info.snippet.title}</button>
    </div>
  )
}

export default Button