import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./Dialog.module.css";

type DialogItemTypeProps={
    name:string
    id:string
}

export const Dialog = (props:DialogItemTypeProps) => {

    let path="/dialogs/" + props.id

    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name} </NavLink>

        </div>
    );
};

