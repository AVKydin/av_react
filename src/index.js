import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

import App from './App';


const initState = {
    isLoading:false,
    cars:[],
    users:[],
    comments:[]

}

const reducer = (state = initState, action)=>{
    switch (action.type){
        case 'SET_CARS':
            return {...state, cars: [...action.payload], users: [], comments: []}
        case 'USERS':
            return {...state, users: [...action.payload], cars: [], comments: []}
        case 'COMMENTS':
            return {...state, comments: [...action.payload], cars: [], users: []}
        default:
            return {...state}
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <Provider store={store}>
            <App />
        </Provider>



);