import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/sidebarSlice";

const Head = () => {
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
                <input className=" w-1/2 border border-gray-400 p-2 rounded-l-full " type="text"/>
                <button className="border border-gray-600 p-2 rounded-r-full bg-gray-100">Search</button>
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