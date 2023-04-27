import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";

const baseReducer = (state, action)=>{
    console.log(state, action)
    return {...state}
};

const store = createStore(baseReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>

);
