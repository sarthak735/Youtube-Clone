import {combineReducers, configureStore} from "@reduxjs/toolkit"
import sidebarSlice from "./sidebarSlice";
import searchSlice from "./searchSlice";
import miniSideBarSlice from "./miniSideBarSlice";
import { homeVideosReducer } from "./videos.reducer";

const rootReducer = combineReducers({
    homeVideos: homeVideosReducer,
})


const store = configureStore({
    reducer: {
        rootReducer,
        app: sidebarSlice,
        app1: miniSideBarSlice,
        search: searchSlice,
    }
}) 

export default store;