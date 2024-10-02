import React from 'react';
import {useMediaQuery} from "react-responsive";

function MediaQueries(){
return (
const isLessScreen = useMediaQuery({minWidth: '922px', maxWidth: '1198px'});
const isSmallScreen = useMediaQuery({minWidth: '834px', maxWidth: '922px'});
const isSmallerScreen = useMediaQuery({minWidth: '659px', maxWidth: '834px'});
const isMobileScreen = useMediaQuery({minWidth: '455px', maxWidth: '659px'});
const isMicroScreen = useMediaQuery({minWidth: '359px', maxWidth: '455px'});
)

}

export default MediaQueries;