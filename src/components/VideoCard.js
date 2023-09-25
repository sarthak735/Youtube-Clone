import React from 'react'

const VideoCard = (props) => {
    //console.log(props);

    //const{snippet, statistics} = info;
    //console.log(statistics);
    //const {channelTitle, title, publishedAt} = snippet || {}; 
    //console.log(thumbnails);
  return (
    <div className=' p-2 m-2 w-72 shadow-lg '>
            <div className='relative h-48 md:h-40 md:rounded-xl overflow-hidden'>
              <img className='h-full w-full object-cover'
              alt='thumbnail_image'
              src= {props.info.snippet.thumbnails.medium.url}
              />
            </div>
    
          <ul>
              <li className=' text-lg mt-1 lg:text-xs xl:text-sm font-bold line-clamp-2'>{props.info.snippet.title}</li> 
              <li className='text-[16px] lg:text-[16px] xl:text[16px] font-semibold mt-1'>{props.info.snippet.channelTitle}</li>
              <li className=' text-[16px] lg:text-[16px] xl:text[16px text-black'>{props.info.statistics.viewCount} views</li>
              {/* <li>{props.user.name} views</li> */}

              {/* <li>{props.info.snippet.publishedAt}</li> */}
          </ul>
    
    </div>
  )
}

export default VideoCard