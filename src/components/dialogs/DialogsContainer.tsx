import React, {ChangeEvent} from 'react';
import classes from "./Dialogs.module.css";
import {Dialog} from "./dialog/Dialog";
import {
    dialogsType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/dialogsPage-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StoreType} from "../../redux/redux-store";
import {getStoreType} from "../renderTree";

/*type DialogsPropsType = {
    dialogsPage: dialogsType
    newMessageBody: string
    dispatch: (action: any) => void
}


export const DialogsContainerr = (props: DialogsPropsType) => {

    const onSendMessage = (text:string) => {
        props.dispatch(sendMessageActionCreator(text))
        props.dispatch(updateNewMessageBodyActionCreator(""))
    }
    const onUpdateNewMessage = (text:string) => {
        props.dispatch(updateNewMessageBodyActionCreator(text))
    }

    return (
        <Dialogs dialogsPage={props.dialogsPage}
                 newMessageBody={props.newMessageBody}
                 updateNewMessage={onUpdateNewMessage}
                 addMessage={onSendMessage}
        />
    )
};*/

type mapStateToPropsType={
    dialogsPage:dialogsType
    newMessageBody:string
}
type mapDispatchToProps={
    addMessage:(text:string)=>void,
    updateNewMessage:(text:string)=>void
}

const mapStateToProps=(state:getStoreType):mapStateToPropsType=>{
    return{
        dialogsPage: state.dialogsPageReducer,
        newMessageBody: state.dialogsPageReducer.newMessageBody
    }
}
const mapDispatchToProps=(dispatch:Dispatch):mapDispatchToProps=>{
    return{
        updateNewMessage:(text:string)=>{
            dispatch(updateNewMessageBodyActionCreator(text))
        },
        addMessage:(text:string)=>{
            dispatch(sendMessageActionCreator(text))
            dispatch(updateNewMessageBodyActionCreator(""))
        }
    }
}

export const DialogsContainer= connect(mapStateToProps,mapDispatchToProps)(Dialogs);
