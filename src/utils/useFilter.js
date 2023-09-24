import React from 'react'

export function useFilter (videos, id) {
    let datas = {};
    if(videos === null) {
        return null;
    }
    videos.map(data=>{
        if(data.id === id){
            datas = data;
        }
    })

  return (datas);
}