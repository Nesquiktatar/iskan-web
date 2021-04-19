import React, {useState} from 'react';
import DialogsNavEl from "./DialogsNavEl";
import * as s from '../Dialogs.styles'

const DialogsNavbar = ({data, themes}) => {

    const [selected, setSelected] = useState(data[0] ? data[0].id : null)

    const changeDialog = id =>  {
            setSelected(id)
    }
    let DialogsNavElDataElements = data.map(d => <DialogsNavEl themes={themes} selected={selected} changeDialog={changeDialog} name={d.name} id={d.id}/>)

    return (
        <s.DialogsNavbar >
            {DialogsNavElDataElements}
        </s.DialogsNavbar>
    )
}

export default DialogsNavbar;