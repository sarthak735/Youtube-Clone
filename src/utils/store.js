import {configureStore} from "@reduxjs/toolkit"
import sidebarSlice from "./sidebarSlice";
import searchSlice, { cacheResults } from "./searchSlice";

const store = configureStore({
    reducer: {
        app: sidebarSlice,
        search: searchSlice,
    }
}) 

export default store;