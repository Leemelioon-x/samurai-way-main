import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {appState} from './redux/store'



type AppPropsType = {
    store: appState
    dispatch: (action: any) => void
}


function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navigation/>
                <div className="App_content">
                    <Route path={'/dialogs'} render={() =>
                        <Dialogs dialogsPage={props.store.dialogsPage}
                                 newMessageBody={props.store.dialogsPage.newMessageBody}
                                 dispatch={props.dispatch}
                        />}
                    />
                    <Route path={'/profile'}
                           render={() =>
                               <Profile users={
                                   props.store.profileUsersPage.profileUsers}
                                        newText={props.store.profileUsersPage.newPostText}
                                        posts={props.store.profileUsersPage.posts}
                                        dispatch={props.dispatch}
                               />}
                    />
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;

