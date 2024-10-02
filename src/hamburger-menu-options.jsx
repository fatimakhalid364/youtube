import React from 'react';
import {useState} from 'react';
import { useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import SigninButton from './signin-button.jsx';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import {useMediaQuery} from "react-responsive";


function HamburgerMenu(props){
    

    function handleHomeClick(){
        window.location.href ='/';
    }

    const isLessScreen = useMediaQuery({minWidth: '937px', maxWidth: '1198px'});
    const isSmallerScreen = useMediaQuery({minWidth: '659px', maxWidth: '937px'});
    const isMobileScreen = useMediaQuery({minWidth: '455px', maxWidth: '659px'});
    const isMicroScreen = useMediaQuery({minWidth: '359px', maxWidth: '455px'});

    return (
            
            <div className={props.hamburgerClass} style={{display: (isMobileScreen || isMicroScreen || isSmallerScreen) && 'none'}}>
                {props.youtubeHeader}
                <div className='hamburgerOptionsA hamburgerBorder' style={{marginTop: props.marginTopForHome}}>
                    <div className='home flex' onClick={handleHomeClick} >
                        <HomeIcon sx={{marginTop: '10px'}} />
                        <p style={{marginLeft: '31px', marginTop: '13px'}}>Home</p>
                    </div>
                    <div className='shorts flex' >
                        <PlayCircleOutlineIcon sx={{marginTop: '10px'}} />
                        <p style={{marginLeft: '31px', marginTop: '13px'}}>Shorts</p> 
                    </div>
                    <div className='subscriptions flex'>
                        <SubscriptionsIcon sx={{marginTop: '10px'}} />
                        <p style={{marginLeft: '31px', marginTop: '13px'}}>Subscriptions</p>
                    </div>
                </div>
                <div className='hamburgerOptionsB hamburgerBorder'>
                    <div className='You flex'>
                        <SlideshowIcon sx={{marginTop: '10px'}} />
                        <p style={{marginLeft: '31px', marginTop: '13px'}}>You</p>
                    </div>
                    <div className='History flex'>
                        <SettingsBackupRestoreIcon sx={{marginTop: '10px'}} />
                        <p style={{marginLeft: '31px', marginTop: '13px'}}>History</p>
                    </div>
                </div>
                <div className='hamburgerOptionsC hamburgerBorder'>
                    <div className='SigninToLike' style={{width: '200px', paddingBottom: '10px'}}>
                        <p>Sign in to like videos, comment and subscribe</p>
                        <SigninButton />
                    </div>
                </div>
                <div className='hamburgerOptionsD hamburgerBorder'>
                    <div className='explore'>
                        <h2>Explore</h2>
                        <div className='Trending flex'>
                            <WhatshotIcon sx={{marginTop: '10px'}} />
                            <p style={{marginLeft: '31px', marginTop: '13px'}}>Trending</p>
                        </div>
                        <div className='Music flex'>
                            <MusicNoteIcon sx={{marginTop: '10px'}} />
                            <p style={{marginLeft: '31px', marginTop: '13px'}}>Music</p>
                        </div>
                        <div className='Gaming flex'>
                            <SportsEsportsIcon sx={{marginTop: '10px'}} />
                            <p style={{marginLeft: '31px', marginTop: '13px'}}>Gaming</p>
                        </div>
                        <div className='News flex'>
                            <NewspaperIcon sx={{marginTop: '10px'}} />
                            <p style={{marginLeft: '31px', marginTop: '13px'}}>News</p>
                        </div>
                        <div className='Sports flex'>
                            <EmojiEventsIcon sx={{marginTop: '10px'}} />
                            <p style={{marginLeft: '31px', marginTop: '13px'}}>Sports</p>
                        </div>
                    
                    

                    </div>
                </div>
            </div>
    )
}

export default HamburgerMenu;