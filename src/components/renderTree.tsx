import React from 'react';
import ReactDOM from "react-dom";
import App from "../App";
import store from "../redux/redux-store"
import {Provider} from "react-redux";

export type getStoreType= ReturnType<typeof store.getState>

export const renderTree = () => {
debugger
    ReactDOM.render(
        <Provider store={store}>
        <App store={store.getState()} dispatch={store.dispatch.bind(store)}/>,
        </Provider>,
        document.getElementById('root')

    )
    console.log(store.getState())
};

