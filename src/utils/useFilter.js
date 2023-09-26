export function useFilter (videos, id) {
    let datas = {};
    if(videos === null) {
        return null;
    }
    // eslint-disable-next-line
    videos.map(data=>{
        if(data.id === id){
            datas = data;
        }
    })

  return (datas);
}