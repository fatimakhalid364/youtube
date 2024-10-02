import React from 'react';
import themes from './theme-array.jsx';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';


function Appearance(props){
    return (
        <div className='bgThemes' id={props.id}>
            <div style={{display: 'flex', paddingLeft: '10px', borderBottom: 'solid grey'}}>
                <ArrowBackOutlinedIcon sx={{marginTop: '11px'}} />
                <p style={{marginLeft:'13px', marginTop: '13px', fontSize: '18px'}}>Appearance</p>
            </div>
            {themes.map((eachTheme)=>
                <form className='bgThemesForm' key={eachTheme.id} style={{ cursor: 'pointer'}}>
                <input type='submit' onClick={props.updateTheme}    name='theme' id='theme'  value={eachTheme.theme} style={{border: 'none', cursor: 'pointer', padding: '10px 163px 10px 55px', borderRadius: '10px'}}/>
                </form>
            )}

        </div>
    )
}

export default Appearance;