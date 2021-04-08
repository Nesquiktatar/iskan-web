import React from 'react';
import s from './Button.module.css'

const Button = (props) => {
    return(
        <>
            <button {...props} className={s.bigButton} >{props.btnText}</button>

        </>
    )
}

export default Button;