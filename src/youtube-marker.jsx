import React from 'react';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {useMediaQuery} from "react-responsive";
import { red } from '@mui/material/colors';



function IamYoutube(props){

    const isLessScreen = useMediaQuery({minWidth: '937px', maxWidth: '1198px'});
    const isSmallerScreen = useMediaQuery({minWidth: '659px', maxWidth: '937px'});
    const isMobileScreen = useMediaQuery({minWidth: '455px', maxWidth: '659px'});
    const isMicroScreen = useMediaQuery({minWidth: '359px', maxWidth: '455px'});




    return (
        <div className="ytIconHamAndName" style={{display: 'flex' }}>
            <div className="navbarPart1 blurarea" style={{display: isMobileScreen || isMicroScreen ? 'none' : 'inline', marginLeft: props.decreaseLeftMargin}}>
                <DehazeOutlinedIcon onClick={props.hamQuery}/>
            </div>
            <div className="navbarPart2 blurarea" style={{marginLeft: props.marginByLeft}}>
                <YouTubeIcon sx={{color: red[500], fontSize: "2rem"}} />
            </div>
            <div className="navbarPart3 blurarea" style={{marginTop: isMicroScreen ? '10px' : '4px'}}>
                <h1 className="yt-heading" style={{fontFamily: (isMobileScreen || isMicroScreen) && 'roboto', fontSize: isMicroScreen && '20px'}}>YouTube</h1>
            </div>
        </div>
    )
}

export default IamYoutube;