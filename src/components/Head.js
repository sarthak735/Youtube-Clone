import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/sidebarSlice";
import { YT_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
    const[searchQuery, setSearchQuery] = useState("");
    const[suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);

    useEffect(() =>{

        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery]);
            }   else{
                getSearchSuggestions()
            }
            }, 200);
        return ()=>{
            clearTimeout(timer);
        }
    }, [searchQuery])


    const getSearchSuggestions = async() =>{
        //console.log("API CALL -" + searchQuery); 
        const data = await fetch(YT_SEARCH_API + searchQuery);
        const json = await data.json();
        // console.log(json[0]);
        setSuggestions(json[1]);

        dispatch(cacheResults({
            [searchQuery]: json[1], 
        }));
    }

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return(
        <div className="grid grid-flow-col p-2 m-2 shadow-lg">
            <div className=" flex col-span-1">
                <img
                onClick={() => toggleMenuHandler()} 
                className="h-10 cursor-pointer" 
                alt="menu"
                src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
                />
                <img className=" h-10"
                alt="youtube-logo"
                src="https://www.seekpng.com/png/detail/77-772362_youtube-logo-youtube-logo-png.png"/>
            </div>
            <div className=" col-span-10 pl-64">
                <div>
                <input className=" w-1/2 border border-gray-400 p-2 rounded-l-full " 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
                />
                <button className="border border-gray-600 p-2 rounded-r-full bg-gray-100">Search</button>
                </div>
                {showSuggestions && (<div className=" fixed bg-white px-5 py-2 w-auto">
                    <ul>
                        {suggestions.map((s) => <li  key = {s}className="py-2 px-3 shadow-sm hover:bg-gray-100">{s}</li>)}
                        
                        
                    </ul>
                </div>)}
            </div>
            <div className=" col-span-1 pl-10">
                <img className=" h-8"
                alt="user-logo"
                src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"/>
            </div>
        </div>
    )
}

export default Head;