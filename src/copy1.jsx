import react from 'react';
import {useState} from 'react';
import { useEffect } from 'react';
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
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import {useMediaQuery} from "react-responsive";
import Morevertitems from './morevert-menu.jsx';



function Navbar(){
    function googleOAuth(){
        window.location.href = "http://localhost:3000/auth/google";
    };

    
    const isLessScreen = useMediaQuery({minWidth: '937px', maxWidth: '1198px'});
    const isSmallScreen = useMediaQuery({minWidth: '834px', maxWidth: '937px'});
    const isSmallerScreen = useMediaQuery({minWidth: '659px', maxWidth: '937px'});
    const isMobileScreen = useMediaQuery({minWidth: '455px', maxWidth: '659px'});
    const isMicroScreen = useMediaQuery({minWidth: '359px', maxWidth: '455px'});

    const [isGlassClicked, setIsGlassClicked] = useState(false);

    const [isSearchPressed, setIsSearchPressed] = useState(false);

    const [isMoreClicked, setIsMoreClicked] = useState(false);

    useEffect(() => {
        if (isGlassClicked && (isLessScreen || isSmallScreen)) {
            setIsGlassClicked(false);
        }
    }, [isLessScreen, isSmallScreen]);

    function handleSearchClick(){
        setIsGlassClicked(prevState => !prevState);
        setDisplayStyle(!isGlassClicked);
    };

    function handleSearchPress(){
        setIsSearchPressed(prevState => !prevState);
    }

    function handleMoreClick(){
        setIsMoreClicked(prevState => !prevState);
    }

    

    function setDisplayStyle(isClicked) {
        const searchBar = document.getElementById('ytsearch');
        const searchContainer = document.getElementById('searchBarDiv');
        const micContainer = document.getElementById('micIconDiv');
        const searchIconContainer = document.getElementById('searchIconLabel');
        searchBar.style.display = isClicked ? 'inline' : 'none';
        searchContainer.style.marginLeft = isClicked ? '7px' : 'calc(100vw - 500px)';
        searchContainer.style.width = isClicked ? '100%' : '30%';
        searchBar.style.width = isClicked && '100%';
        searchIconContainer.style.marginLeft = isClicked ? '2px' : '';
        micContainer.style.marginLeft = isClicked ? '50px' : '30px';
        console.log(isClicked);
    }

    

    return(
    <div className='navbarParent'>
    <div className= {`navbar ${isSearchPressed ? 'displayNone' : ''}`}>
        <div className="navbarPart1 blurarea" style={{display: isMobileScreen || isMicroScreen ? 'none' : 'inline'}}>
        <DehazeOutlinedIcon />
        </div>
        <div className="navbarPart2 blurarea">
        <YouTubeIcon sx={{color: red[500], fontSize: "2rem"}} />
        </div>
        <div className="navbarPart3 blurarea" style={{marginTop: isMicroScreen ? '10px' : '4px'}}>
        <h1 className="yt-heading" style={{fontFamily: (isMobileScreen || isMicroScreen) && 'roboto', fontSize: isMicroScreen && '20px'}}>YouTube</h1>
        </div>
        <div className="navbarPart4" id='searchBarDiv' style={{marginLeft: isSmallScreen ? '2px' : isSmallerScreen ? 'calc(100vw - 500px)' : isMobileScreen ? 'calc(100vw - 415px)' : isMicroScreen ? 'calc(100vw - 330px)' : '15%', marginTop: isMobileScreen || isMicroScreen ? '13px' : '7px', width: isMobileScreen ? '5%' : '35%'}}>
        {isMobileScreen || isMicroScreen ? (<CastOutlinedIcon sx={{fontSize: isMicroScreen ? '20px' : '27px'}} />) : (<form>
            <input type="text" id="ytsearch" name="yt-search" placeholder="Search" style={{display: isSmallerScreen && 'none', paddingRight: isSmallScreen ? '150px' : 0}}/>
            <label id='searchIconLabel' onClick={isSmallerScreen && handleSearchClick} htmlFor="yt-search" style={{marginLeft: isSmallScreen ? '149px': 0}}><SearchIcon sx={{borderLeft: isSmallScreen || isSmallerScreen ? 'none' : '1px solid grey', padding:'7.5px', fontSize: isSmallerScreen ? '27px' : '24px'}}/></label>
        </form>)}
        </div>
        <div className="navbarPart5 blurarea" id='micIconDiv' style={{marginLeft: isSmallScreen ? 'calc(100vw - 68.5vw)' : isSmallerScreen ? '30px': isMobileScreen ? '35px' : isMicroScreen ? '15px' :'2%', marginTop: isMobileScreen ? '9px' : isMicroScreen ? '11px' : '6px'}}>
            {isMobileScreen || isMicroScreen ? (<NotificationsNoneOutlinedIcon sx={{fontSize: isMicroScreen ? '25px' : '35px'}} />) : (<Avatar><MicIcon sx={{fontSize: '2rem', height: isSmallerScreen ? '23px' : '37px', width: isSmallerScreen ? '23px' : '37px'}} /></Avatar>)}
        </div>
        <div className="navbarPart6 blurarea" style={{marginLeft: isSmallScreen ? '0.5%': isSmallerScreen ? '20px': isMobileScreen ? '35px' : isMicroScreen ? '30px' : '20%', marginTop: isSmallScreen || isSmallerScreen ? '10px' : isMobileScreen ? '9px' : isMicroScreen ? '10.8px' : '17px'}}>
            {isMobileScreen || isMicroScreen ? (<SearchIcon onClick={handleSearchPress} sx={{fontSize: isMicroScreen ? '25px' : '35px'}}/>) : 
            (<MoreVertIcon onClick={handleMoreClick} sx={{fontSize: isSmallScreen || isSmallerScreen ? '2rem' :'1.5rem'}}/>)}
        </div>
        <div className="navbarPart7 blurarea" style={{marginLeft: isSmallScreen ? '0.5%' : isSmallerScreen ? '20px' : isMobileScreen ? '35px' : isMicroScreen ? '30px' : '2%', marginRight: isSmallerScreen ? 'calc(100vw - 99vw)' : 0}} >
                {isSmallerScreen || isMobileScreen || isMicroScreen ? (
                    <Avatar onClick={googleOAuth} sx={{bgcolor: 'white', border: '2px solid skyBlue', height: isMobileScreen ? '35px': isMicroScreen ? '25px' : '37px', width: isMobileScreen ? '35px' : isMicroScreen ? '25px' : '37px', marginTop: isMicroScreen ? '10px' : '8px', marginLeft: 0}} ><PersonOutlineOutlinedIcon  sx={{color:'skyBlue'}} /></Avatar>
                ) : (
                    <button onClick={googleOAuth} className="nbButton">
                        <Avatar sx={{bgcolor: 'white', border: '2px solid skyBlue', height: '25px', width: '25px', marginTop:'4%', marginLeft:'4%'}} ><PersonOutlineOutlinedIcon  sx={{color:'skyBlue'}} /></Avatar>
                        <h2 className='signin' style={{fontSize: '16px', color: 'skyBlue', marginTop: '10%', marginLeft: '4.5%'}}>Sign in</h2>
                    </button>
                )}
        </div>
       

    </div>
    <div className = {`mobileNavbar displayNone ${isSearchPressed ? 'mobileSearch' : ''}`} id='mobileNavbarId'>
        <div className = 'backArrowDiv' id='backArrowId'>
            <ArrowBackOutlinedIcon sx={{fontSize: '30px'}} />
        </div>
        <div className = 'searchAreaDiv' id='searchAreaId' style={{width: isMicroScreen ? '70%' : '60%', marginLeft: isMicroScreen ? '2%' : '12%', marginRight: isMicroScreen ? '10%' : '15%'}}>
            <input type='text' id='searching' name='searching' placeholder='Search'/>
        </div>
        <div className = 'microPhoneDiv' id='microPhoneId'>
            <Avatar><MicIcon /></Avatar>
        </div>

    </div>
    {isMoreClicked && (<Morevertitems />)}
    </div>


    );
};

export default Navbar;



const [isGlassClicked, setIsGlassClicked] = useState(false);
function handleSearchClick(){
    setIsGlassClicked(prevState => !prevState);
    setDisplayStyle(!isGlassClicked);
};
function setDisplayStyle(isClicked) {
    const searchBar = document.getElementById('ytsearch');
    const searchContainer = document.getElementById('searchBarDiv');
    const micContainer = document.getElementById('micIconDiv');
    const searchIconContainer = document.getElementById('searchIconLabel');
    searchBar.style.display = isClicked ? 'inline' : 'none';
    searchContainer.style.marginLeft = isClicked ? '7px' : 'calc(100vw - 500px)';
    searchContainer.style.width = isClicked ? '100%' : '30%';
    searchBar.style.width = isClicked && '100%';
    searchIconContainer.style.marginLeft = isClicked ? '2px' : '';
    micContainer.style.marginLeft = isClicked ? '50px' : '30px';
    console.log(isClicked);
}
useEffect(() => {
    if (isGlassClicked && (isLessScreen )) {
        setIsGlassClicked(false);
    }
}, [isLessScreen]);