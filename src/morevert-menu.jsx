import React from 'react';
import { NavLink } from 'react-router-dom';
import {useState} from 'react';
import {useEffect} from 'react';
import themes from './theme-array.jsx';
import LanguageSelection from './language-options.jsx';
import languages from './languages-array.jsx';
import Appearance from './appearance-color.jsx';
import {useMediaQuery} from "react-responsive";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';


function Morevertitems(props){
    function handleDataClick(){
        window.location.href = "http://localhost:3000/auth/google1";
    }

    const isLessScreen = useMediaQuery({minWidth: '922px', maxWidth: '1198px'});
    const isSmallScreen = useMediaQuery({minWidth: '834px', maxWidth: '922px'});
    const isSmallerScreen = useMediaQuery({minWidth: '659px', maxWidth: '834px'});
    const isMobileScreen = useMediaQuery({minWidth: '455px', maxWidth: '659px'});
    const isMicroScreen = useMediaQuery({minWidth: '359px', maxWidth: '455px'});

    const [isLanguage, setIsLanguage] = useState("");

    const [isAppearanceClicked, setIsAppearanceClicked] = useState(false);

    

   

    

    function handleLanguagesClick(event){
        const language = event.target.value;
        console.log(language);
        setIsLanguage(language);
        localStorage.setItem('language', language);
        event.preventDefault();
    }

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            setIsLanguage(storedLanguage);
        }
    }, []);

    function handleAppearanceClick(){
        setIsAppearanceClicked(true);
    }

    

    return(
        <div className='moreMenuOptions' >
            <div className='options' ref={props.accessDOM} style={{display: isAppearanceClicked && 'none'}}>   
                <div className = 'optionsitem' id='optioonsitem1'>
                    <AdminPanelSettingsOutlinedIcon sx={{marginTop: '9px'}} />
                    <p style={{marginLeft: '15px', marginTop: '13px'}}  onClick={handleDataClick}>Your data in YouTube</p>
                    
                </div>
                <div className = 'optionsitem' onClick={handleAppearanceClick}  >
                    <Brightness2OutlinedIcon sx={{marginTop: '8px'}} />
                    <p style={{marginLeft: '15px', marginTop: '11px'}}  >Appearance: {props.isTheme} </p>
                    <ArrowForwardIosOutlinedIcon sx={{marginLeft: '230px', marginTop: '14px', fontSize: '17px', position: 'absolute'}} />
                </div>
                <div  className = 'optionsitem'>
                    <TranslateOutlinedIcon sx={{marginTop: '9px'}} />
                    <p style={{marginLeft: '15px', marginTop: '11px'}}>Language: {isLanguage}</p>
                    <ArrowForwardIosOutlinedIcon sx={{marginLeft: '228px', marginTop: '14px', fontSize: '17px', position: 'absolute'}} />
                </div>
            </div>
            {isAppearanceClicked && <Appearance updateTheme={props.updateTheme} id='bgThemesId' />}
            {/*<LanguageSelection updateLanguage = {handleLanguagesClick} />*/}
        </div>
    );
}

export default Morevertitems;