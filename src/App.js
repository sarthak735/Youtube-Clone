import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import {Provider} from "react-redux"; 
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import VideoDeetsContext from "./utils/VideoDeetsContext";
import { YT_VIDEO_API } from "./utils/constants";
import { useState, useEffect } from "react";




//   const [status, setStatus] = useState(false);
//   const catchStatus = (status) => {}


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer user = {{
        name : "Sarthak",
      }}/>
    },
    {
      path: "/watch",
      element: <WatchPage/>
    },
    
  ]
}])


function App() {
  const[videos, setVideos] = useState(null);

  useEffect(() =>{
    getVideos();
  }, []) 

  const getVideos = async () =>{
    const data = await fetch (YT_VIDEO_API);
    const json = await data.json();
    //console.log(json.items);

    setVideos(json.items);

  }
  return (
    <VideoDeetsContext.Provider value={{value:videos,status: null}}>
    <Provider store = {store}>
    <div>
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
    </VideoDeetsContext.Provider>
  );
}

export default App;
