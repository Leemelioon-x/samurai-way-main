import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./redux/state";

type appState = {
    profileUsersPage: profileUsers
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

type profileUsers = {
    profileUsers: Array<profileUsersType>
    posts:Array<postsType>
    newPostText:string
}

type postsType={
    id:number
    post:string
}

type profileUsersType = {
    id: number
    name: string
    bigPhoto: string
    photo: string
    userInfo: userInfoType
}

type userInfoType = {
    dataOfBirth: string
    city: string
    education: string
    webSite: string
}


export let renderEntireTree = (state:appState) => {

    ReactDOM.render(
        <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}