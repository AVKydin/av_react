import Posts from "../../components/posts/Posts";
import React from "react";
import {DEC, INC, RESET} from "../actions";


const postReducer = (state = 0, action)=>{
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
    postReducer
}