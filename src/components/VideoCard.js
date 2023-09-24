import React from 'react'

const VideoCard = (props) => {
    //console.log(props);

    //const{snippet, statistics} = info;
    //console.log(statistics);
    //const {channelTitle, title, publishedAt} = snippet || {}; 
    //console.log(thumbnails);
  return (
    <div className=' p-2 m-2 w-72 shadow-lg'>
            <img className=' rounded-lg'
            alt='thumbnail_image'
            src= {props.info.snippet.thumbnails.medium.url}
            />
        
        <ul>
            <li className=' font-bold py-2'>{props.info.snippet.title}</li> 
            <li>{props.info.snippet.channelTitle}</li>
            <li>{props.info.statistics.viewCount} views</li>
            {/* <li>{props.user.name} views</li> */}

            {/* <li>{props.info.snippet.publishedAt}</li> */}
        </ul>
    </div>
  )
}

export default VideoCard