import React from 'react';
import * as s from '../Dialogs.styles'
import userPhoto from '../../../../assets/images/user.svg';
import {NavLink} from "react-router-dom";

const DialogsNavEl = ({selected, id, changeDialog, name, themes}) => {
    return (
        <s.DialogsNavEl themes={themes} selected={selected} id={id} onClick={() => {changeDialog(id)}}>
            <NavLink to={'/dialogs/' + id}>
                <div>
                    <img src={userPhoto} alt="userPhoto"/>
                    {name}
                </div>
            </NavLink>
        </s.DialogsNavEl>
    )
}
export default DialogsNavEl;
