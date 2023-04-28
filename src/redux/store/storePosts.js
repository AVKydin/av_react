import {createStore} from "redux";
import {postReducer} from "../reducers/postReducer";

const post = createStore(postReducer);

export {
    post
}