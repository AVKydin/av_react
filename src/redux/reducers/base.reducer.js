import Posts from "../../components/Posts";
import React from "react";
import {DEC, INC, RESET} from "../actions";


const baseReducer = (state = 0, action)=>{
    switch (action.type){
        case INC:
            return <Posts/>;
        case DEC:
            return --state;
        case RESET:
            return 0;
        default:
            return state;
    }
};

export {
    baseReducer
}