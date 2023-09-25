import React from 'react'

const RelatedVideoCard = ({info}) => {
    const{snippet, statistics} = info || {};
    const{channelTitle, title, thumbnails} = snippet || {};
    const{medium} = thumbnails || {};
    const{url} = medium || {};
    const{viewCount} = statistics || {};
  return (
        <div className=' mb-3 flex shadow-lg'>
            <div className='relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128] xl:min-w-[168] rounded-xl bg-slate-800 overflow-hidden'>
                <img className=' h-full, w-full object-cover'
                alt='thumbnail_image'
                src= {url}
                />
            </div>
            <div className='flex flex-col ml-3 overflow-hidden'>
                <ul>
                    <li className=' text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 '>{title}</li> 
                    <p className=' text-[12px] lg:text-[12px] xl:text[12px] font-semibold mt-2'>{channelTitle}</p>
                    <li className=' text-[12px] lg:text-[12px] xl:text[12px] font-semibold mt-1'>{viewCount} views</li>
                    {/* <li>{props.user.name} views</li> */}

                    {/* <li>{props.info.snippet.publishedAt}</li> */}
                </ul>
            </div>
        </div>
  )
}

export default RelatedVideoCard