import React from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import MicIcon from '@mui/icons-material/Mic';
import Avatar from '@mui/material/Avatar';
import {useMediaQuery} from "react-responsive";

function SearchBar(props) {

    const isLessScreen = useMediaQuery({minWidth: '937px', maxWidth: '1198px'});
    const isSmallerScreen = useMediaQuery({minWidth: '659px', maxWidth: '937px'});
    const isMobileScreen = useMediaQuery({minWidth: '455px', maxWidth: '659px'});
    const isMicroScreen = useMediaQuery({minWidth: '359px', maxWidth: '455px'});

    return(
    <div className = {props.classForVisibleSearchBar} id='mobileNavbarId'>
        <div className = 'backArrowDiv' id='backArrowId'>
            <ArrowBackOutlinedIcon sx={{fontSize: '30px'}} />
        </div>
        <div className = 'searchAreaDiv' id='searchAreaId' style={{width: isMobileScreen ? '80%' : isMicroScreen ? '70%' : '90%', marginLeft: isSmallerScreen || isMobileScreen || isMicroScreen ? '2%' : '12%', marginRight: isSmallerScreen ? '5%' : '10%'}}>
            <input type='text' id='searching' name='searching' placeholder='Search'/>
        </div>
        <div className = 'microPhoneDiv' id='microPhoneId' style={{marginRight: '2%'}}>
            <Avatar><MicIcon /></Avatar>
        </div>

    </div>
    )
}

export default SearchBar;