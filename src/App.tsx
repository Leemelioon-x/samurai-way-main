import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {getStoreType} from "./components/renderTree";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";






type AppPropsType = {
    store: getStoreType
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
                        <DialogsContainer/>
                    }
                    />
                    <Route path={'/profile'}
                           render={() =>
                               <Profile users={
                                   props.store.profileUsersPageReducer.profileUsers}
                                        newText={props.store.profileUsersPageReducer.newPostText}
                                        posts={props.store.profileUsersPageReducer.posts}
                                        dispatch={props.dispatch}
                               />}
                    />
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;

