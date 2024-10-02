import React from 'react';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { red } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CastOutlinedIcon from '@mui/icons-material/CastOutlined';
import {useMediaQuery} from "react-responsive";
import SigninButton from './signin-button.jsx';
import IamYoutube from './youtube-marker.jsx';



function Navbar(props){

    function googleOAuth(){
        window.location.href = "http://localhost:3000/auth/google";
    };
    
    const isLessScreen = useMediaQuery({minWidth: '937px', maxWidth: '1198px'});
    const isSmallerScreen = useMediaQuery({minWidth: '659px', maxWidth: '937px'});
    const isMobileScreen = useMediaQuery({minWidth: '455px', maxWidth: '659px'});
    const isMicroScreen = useMediaQuery({minWidth: '359px', maxWidth: '455px'});
    //const [isSearchPressed, setIsSearchPressed] = useState(false);


    return(
        <div className= {props.dynamicVisibilityOfSearchBar}>
            <IamYoutube hamQuery={props.hamQuery} marginByLeft={`${isMobileScreen || isMicroScreen ? '4px' : '24px'}`}/>
            <div className="navbarPart4" id='searchBarDiv' style={{marginLeft: isSmallerScreen ? 'calc(100vw - 500px)' : isMobileScreen ? 'calc(100vw - 415px)' : isMicroScreen ? 'calc(100vw - 330px)' : '15%', marginTop: isMobileScreen || isMicroScreen ? '13px' : '7px', width: isMobileScreen ? '5%' : '35%'}}>
            {isMobileScreen || isMicroScreen ? (<CastOutlinedIcon sx={{fontSize: isMicroScreen ? '20px' : '27px'}} />) : (<form>
                <input type="text" id="ytsearch" name="yt-search" placeholder="Search" style={{display: isSmallerScreen && 'none', paddingRight: 0}}/>
                <label id='searchIconLabel' onClick={isSmallerScreen && props.searchQuery} htmlFor="yt-search" style={{marginLeft: 0}}><SearchIcon sx={{borderLeft: isSmallerScreen ? 'none' : '1px solid grey', padding:'7.5px', fontSize: isSmallerScreen ? '27px' : '24px'}}/></label>
            </form>)}
            </div>
            <div className="navbarPart5 blurarea" id='micIconDiv' style={{marginLeft: isSmallerScreen ? '30px': isMobileScreen ? '35px' : isMicroScreen ? '15px' :'2%', marginTop: isMobileScreen ? '9px' : isMicroScreen ? '11px' : '6px'}}>
                {isMobileScreen || isMicroScreen ? (<NotificationsNoneOutlinedIcon sx={{fontSize: isMicroScreen ? '25px' : '35px'}} />) : (<Avatar><MicIcon sx={{fontSize: '2rem', height: isSmallerScreen ? '23px' : '37px', width: isSmallerScreen ? '23px' : '37px'}} /></Avatar>)}
            </div>
            <div className="navbarPart6 blurarea" style={{marginLeft: isSmallerScreen ? '20px': isMobileScreen ? '35px' : isMicroScreen ? '30px' : '20%', marginTop: isSmallerScreen ? '10px' : isMobileScreen ? '9px' : isMicroScreen ? '10.8px' : '17px'}}>
                {isMobileScreen || isMicroScreen ? (<SearchIcon onClick={props.searchQuery} sx={{fontSize: isMicroScreen ? '25px' : '35px'}}/>) : 
                (<MoreVertIcon onClick={props.moreQuery} className='moreMenu' sx={{fontSize: isSmallerScreen ? '2rem' :'1.5rem'}}/>)}
            </div>
            <div className="navbarPart7 blurarea" style={{marginLeft: isSmallerScreen ? '20px' : isMobileScreen ? '35px' : isMicroScreen ? '30px' : '2%', marginRight: '2%'}} >
                    {isMobileScreen || isMicroScreen ? (
                        <Avatar onClick={googleOAuth} sx={{bgcolor: 'white', border: '2px solid skyBlue', height: isMobileScreen ? '35px': isMicroScreen ? '25px' : '37px', width: isMobileScreen ? '35px' : isMicroScreen ? '25px' : '37px', marginTop: isMicroScreen ? '10px' : '8px', marginLeft: 0}} ><PersonOutlineOutlinedIcon  sx={{color:'skyBlue'}} /></Avatar>
                    ) : (
                        <SigninButton />
                    )}
            </div>
        </div>
    )
}

export default Navbar;