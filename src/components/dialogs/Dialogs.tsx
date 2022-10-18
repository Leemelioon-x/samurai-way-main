import React, {ChangeEvent} from 'react';
import classes from "./Dialogs.module.css";
import {Dialog} from "./dialog/Dialog";
import {dialogsType,} from "../../redux/dialogsPage-reducer";

type DialogsPropsType = {
    dialogsPage: dialogsType
    newMessageBody: string
    updateNewMessage:(text:string)=>void,
    addMessage:(text:string)=>void
}


export const Dialogs = (props: DialogsPropsType) => {

    const onButtonClickHandler = () => {
        props.addMessage(props.newMessageBody)
        props.updateNewMessage("")
    }

    const onTextAreaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessage(e.currentTarget.value)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>
                {props?.dialogsPage?.message?.map((el, index) =>
                    <Dialog name={props.dialogsPage.message[index].name} id={props.dialogsPage.message[index].id}/>
                )}
            </div>
            <div className={classes.massages}>
                {props?.dialogsPage?.message?.map((el, index) =>
                    <div className={classes.message}>{props.dialogsPage.message[index].message}</div>)}
                <div className={classes.send_message}>
                <textarea onChange={onTextAreaChangeHandler}
                          value={props?.newMessageBody}
                          placeholder={"Введите сообщение..."}/>
                    <button onClick={onButtonClickHandler}>Отправить</button>
                </div>
            </div>
        </div>
    );
};

