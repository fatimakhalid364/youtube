import React from 'react';
import Avatar from '@mui/material/Avatar';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function SigninButton(){
    function googleOAuth(){
        window.location.href = "http://localhost:3000/auth/google";
    };

    return (
        <button onClick={googleOAuth} className="nbButton">
            <Avatar sx={{bgcolor: 'white', border: '2px solid skyBlue', height: '25px', width: '25px', marginTop:'4%', marginLeft:'4%'}} ><PersonOutlineOutlinedIcon  sx={{color:'skyBlue'}} /></Avatar>
            <h2 className='signin' style={{fontSize: '16px', color: 'skyBlue', marginTop: '10%', marginLeft: '4.5%'}}>Sign in</h2>
        </button>
    )
};

export default SigninButton;