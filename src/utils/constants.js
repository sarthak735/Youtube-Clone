// import React from "react";

// import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
// import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
// import { CgMusicNote } from "react-icons/cg";
// import { FiFilm } from "react-icons/fi";
// import { IoGameControllerSharp } from "react-icons/io5";
// import { ImNewspaper } from "react-icons/im";
// import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
// import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
// import { FiSettings, FiHelpCircle } from "react-icons/fi";

// export const categories = [
//     { name: "New", icon: <AiFillHome />, type: "home" },
//     { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
//     { name: "Music", icon: <CgMusicNote />, type: "category" },
//     { name: "Films", icon: <FiFilm />, type: "category" },
//     { name: "Live", icon: <MdLiveTv />, type: "category" },
//     { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
//     { name: "News", icon: <ImNewspaper />, type: "category" },
//     { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
//     { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
//     {
//         name: "Fashion & beauty",
//         icon: <GiEclipse />,
//         type: "category",
//         divider: true,
//     },
//     { name: "Settings", icon: <FiSettings />, type: "menu" },
//     { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
//     { name: "Help", icon: <FiHelpCircle />, type: "menu" },
//     { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
// ];




export const YOUR_API_KEY = "AIzaSyDZtlncV4kkJjGY39lPmRtqIBeDL4y31fQ";

export const YT_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + YOUR_API_KEY;

export const YT_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const COMMENT_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=" + YOUR_API_KEY;

export const VIDEO_BY_CATEGORY = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" +YOUR_API_KEY;






