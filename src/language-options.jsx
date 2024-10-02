import React from 'react';
import languages from './languages-array.jsx';


function LanguageSelection(props){



    return (
        <div style={{marginTop: '10px', display: 'none'}}>
        {languages.map((onelanguage)=>
            <form key={onelanguage.id}>
                <input onClick = {props.updateLanguage}  type='submit' value={onelanguage.language} name='lang' id='lang' style={{border: 'none', backgroundColor:'white'}}/>
            </form>
        )  
        }
        </div>
    )
};

export default LanguageSelection;