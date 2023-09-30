import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { useSelector } from 'react-redux'

const ToggleSideBar = () => {
  const miniIsMenuOpen = useSelector(store => store.app1.miniIsMenuOpen);
    if(!miniIsMenuOpen) return miniIsMenuOpen;
  return (
    <div className=' w-[10%] z-50 h-[84.264] bg-white left-0'>
                <div className=' pt-[15px] text-center text-xs tex-[#707070] hover:bg-gray-300'>
                    <HomeIcon/>
                    <p>Home</p>
                </div>
                <div className=' pt-[25px] text-center text-xs tex-[#707070] hover:bg-gray-300'>
                    <AppShortcutIcon/>
                    <p>Shorts</p>
                </div>
                <div className=' pt-[25px] text-center text-xs tex-[#707070] hover:bg-gray-300'>
                    <SubscriptionsIcon/>
                    <p>Subscriptions</p>
                </div >
                <div className=' pt-[25px] text-center text-xs tex-[#707070] hover:bg-gray-300'>
                    <VideoLibraryIcon/>
                    <p>Library</p>
                </div>
    </div>
  )
}

export default ToggleSideBar