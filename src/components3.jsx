import React from 'react';
import {useState} from 'react';
import { useEffect } from 'react';
import {useMediaQuery} from "react-responsive";
import Morevertitems from './morevert-menu.jsx';
import { useRef } from 'react';
import HamburgerMenu from './hamburger-menu-options.jsx';
import HamburgerSmallScreenMenu from './hamburger-menu-smallscreen.jsx';
import Navbar from './navbar.jsx';
import SearchBar from './search-bar.jsx';
import IamYoutube from './youtube-marker.jsx';
import Playback from './video-playback.jsx';
import SideVideoList from './side-videos.jsx';
//import VideoList from './videos.jsx';




function Components3(props){

    function googleOAuth(){
        window.location.href = "http://localhost:3000/auth/google";
    };
    
    const isLessScreen = useMediaQuery({minWidth: '937px', maxWidth: '1198px'});
    const isSmallerScreen = useMediaQuery({minWidth: '659px', maxWidth: '937px'});
    const isMobileScreen = useMediaQuery({minWidth: '455px', maxWidth: '659px'});
    const isMicroScreen = useMediaQuery({minWidth: '359px', maxWidth: '455px'});
    const [isTheme, setIsTheme] = useState("");
    

    const [isSearchPressed, setIsSearchPressed] = useState(false);

    const [isMoreClicked, setIsMoreClicked] = useState(false);

    const [isHamBurgerClicked, setIsHamBurgerClicked] = useState(false);

    const optionsRef = useRef(null);


    function handleThemeClick(event){
        const theme = event.target.value;
        //console.log(theme);
        setIsTheme(theme);
        localStorage.setItem('theme', theme);
        event.preventDefault();
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setIsTheme(storedTheme);
        }
        
    }, []);

    useEffect(() => {
        if (isTheme === 'Dark' || isTheme === 'Device') {
            document.body.classList.add('dark');
            console.log('added dark theme');
            console.log(localStorage.getItem('theme'));
            
            } else {
            document.body.classList.remove('dark');
            console.log('removed dark theme');
            console.log(localStorage.getItem('theme'));
            }
    }, [isTheme]);


    useEffect(() => {
        if (isSearchPressed && (isLessScreen )) {
            setIsSearchPressed(false);
        }
    }, [isLessScreen]);

    useEffect(() => {
        if (isMoreClicked && (isMobileScreen || isMicroScreen)) {
            setIsMoreClicked(false);
        }
    }, [isMobileScreen, isMicroScreen]);

    

    function handleSearchPress(){
        setIsSearchPressed(prevState => !prevState);
    }

    function handleMoreClick(event){
        event.stopPropagation();
        setIsMoreClicked(prevState => !prevState);
    }

    useEffect(() => {
        console.log(isMoreClicked);
    }, [isMoreClicked]);

    function handleClickOutside(event) {
        if(optionsRef.current && !optionsRef.current.contains(event.target)) {
            setIsMoreClicked(false);
        }
    };

    function handleHamClick(){
        setIsHamBurgerClicked(prevState => !prevState);
    }


    useEffect(() => {
        
    
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);

            };
        }, []
    );


    

    return(
    <div>
        <div className='componentsParent' style={{zIndex: '2'}}>
            <Navbar searchQuery={handleSearchPress} moreQuery={handleMoreClick} hamQuery={handleHamClick} dynamicVisibilityOfSearchBar={`navbar ${isSearchPressed ? 'displayNone' : ''}`} />
            <SearchBar classForVisibleSearchBar={`mobileNavbar displayNone ${isSearchPressed ? 'mobileSearch' : ''}`}/>
            {isMoreClicked && (<Morevertitems accessDOM={optionsRef} updateTheme={handleThemeClick} isTheme={isTheme} />)}
            <HamburgerMenu hamburgerClass= {`hamburgerParentSetToSlide  ${isHamBurgerClicked ? "showHamburgerParent" : ""}`}  youtubeHeader={isHamBurgerClicked && (<IamYoutube decreaseLeftMargin='0' hamQuery={handleHamClick} marginByLeft='24px'  />)} marginTopForHome='30px' />
            <Playback />
        </div>
        <SideVideoList />

    </div>
    


    );
};

export default Components3;