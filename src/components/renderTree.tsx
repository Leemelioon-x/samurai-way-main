import React from 'react';
import ReactDOM from "react-dom";
import App from "../App";
import store from "../redux/redux-store"

export type getStoreType= ReturnType<typeof store.getState>

export const renderTree = () => {

    ReactDOM.render(
        <App store={store.getState()} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')

    )
    console.log(store.getState())
};

