import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "./actionType"
import request from "./api"

export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
    try {
        dispatch({
            type: HOME_VIDEOS_REQUEST,
        })
        const {data} = await request("/search",{
            params:{
                part:"snippet",
                maxResults: 20,
                pageToken: "",
                q: keyword,
                type: 'video'
            },
        })
        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken:data.nextPageToken,
                category: keyword
            },
        })


        //console.log({data});
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload: error.message,
        })
    }
}