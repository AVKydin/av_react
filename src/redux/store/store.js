import {createStore} from "redux";
import {baseReducer} from "../reducers";


const store = createStore(baseReducer);

export {
    store
}