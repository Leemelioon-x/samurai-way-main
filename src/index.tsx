import React from 'react';
import './index.css';
import store from './redux/redux-store'
import {renderTree} from "./components/renderTree";

store.subscribe(renderTree)
renderTree()

