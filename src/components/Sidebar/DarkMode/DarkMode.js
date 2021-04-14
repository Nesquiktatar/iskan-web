import React from 'react';
import * as s from './DarkMode.styles';
import moon from '../../../assets/icons/darkMode/moon.svg'
import sun from '../../../assets/icons/darkMode/sun.svg'

const DarkMode = (props) => {

    const changeTheme = () => {
        if(props.theme === 'bright'){
            props.setTheme('dark');
        } else {
            props.setTheme('bright');
        }
    }

    return(
        <s.DarkModeContainer>
            <button onClick={changeTheme}>
                <img src={props.theme === 'bright' ? moon : sun  } alt=""/>
            </button>
        </s.DarkModeContainer>
    )
}

export default DarkMode;