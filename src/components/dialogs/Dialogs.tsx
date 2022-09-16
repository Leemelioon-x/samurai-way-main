import React from 'react';
import classes from "./Dialogs.module.css";
import {Dialog} from "./dialog/Dialog";

type DialogsPropsType = {
    dialogsPage: dialogsType
}

type dialogsType = {
    message: Array<messageType>
    dialogs: Array<dialogType>
}
type dialogType={}

type messageType = {
    id: string
    name: string
    message: string
}
export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>
                {props.dialogsPage.message.map((el,index)=>
                    <Dialog name={props.dialogsPage.message[index].name} id={props.dialogsPage.message[index].id}/>
                )}

            </div>

            <div className={classes.massages}>
                {props.dialogsPage.message.map((el,index)=>
                    <div className={classes.message}>{props.dialogsPage.message[index].message}</div>)}
            </div>
{/*
            <input type="text"/>
            <button onClick={()=>{}}>addMessage</button>*/}
        </div>
    );
};

