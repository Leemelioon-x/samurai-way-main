import React from 'react';
import ReactDOM from "react-dom";
import App from "../App";
import store from "../redux/store"

export const renderTree = () => {

    ReactDOM.render(
        <App store={store.getState()} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    )
};

