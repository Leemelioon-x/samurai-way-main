import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


type AppPropsType = {
    appState: appState
    addPost:(newPostMessage:string)=>void
}

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

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navigation/>
                <div className="App_content">
                    <Route path={'/dialogs'} render={() =>
                        <Dialogs dialogsPage={
                            props.appState.dialogsPage}
                        />}
                    />
                    <Route path={'/profile'}
                           render={() =>
                               <Profile users={
                                   props.appState.profileUsersPage.profileUsers}
                                        posts={props.appState.profileUsersPage.posts}
                                        addPost={props.addPost}
                               />}
                    />
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;

