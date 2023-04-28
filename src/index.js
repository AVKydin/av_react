import React, {useReducer} from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";


const initState = {
    isLoading:false,
    cars:[]
}

const carReducer = (state = initState, action)=>{
    switch (action.type){
        case 'START':
            return {...state, isLoading: true}
        case 'SET_CARS':
            return {...state, cars: [...action.payload]}
        case 'SAVE_CARS':
            return {...state, cars: state.cars}
        default:
            return {...state}
    }
}

const store = createStore(carReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>


);