import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import {useMediaQuery} from "react-responsive";

function HamburgerSmallScreenMenu(){

    const isLessScreen = useMediaQuery({minWidth: '937px', maxWidth: '1198px'});
    const isSmallerScreen = useMediaQuery({minWidth: '659px', maxWidth: '937px'});
    const isMobileScreen = useMediaQuery({minWidth: '455px', maxWidth: '659px'});
    const isMicroScreen = useMediaQuery({minWidth: '359px', maxWidth: '455px'});

    return (
        <div className='hamSmallScreenParent' style={{display: (isMobileScreen || isMicroScreen) && 'none'}}>
            <div className='smallHamHome smallHamMarginBottom'>
                <HomeIcon className='iconToCenter'/>
                <p className='hamMenuParaSmallScreen' style={{marginLeft: '11px'}}>Home</p>
            </div>
            <div className='smallHamShorts smallHamMarginBottom'>
                <PlayCircleOutlineIcon className='iconToCenter' />
                <p className='hamMenuParaSmallScreen' style={{marginLeft: '10px'}}>Shorts</p>
            </div>
            <div className='smallHamSubscriptions smallHamMarginBottom'>
                <SubscriptionsIcon className='iconToCenter' />
                <p className='hamMenuParaSmallScreen' style={{marginLeft: 0, fontSize: '10px'}}>Subscriptions</p>
            </div>
            <div className='smallHamYou smallHamMarginBottom'>
                <SlideshowIcon className='iconToCenter' />
                <p className='hamMenuParaSmallScreen' style={{marginLeft: '16px'}}>You</p>
            </div>
            <div className='smallHamHistory smallHamMarginBottom'>
                <SettingsBackupRestoreIcon className='iconToCenter' />
                <p className='hamMenuParaSmallScreen' style={{marginLeft: '10px'}}>History</p>
            </div>

        </div>
    )
}
export default HamburgerSmallScreenMenu;
