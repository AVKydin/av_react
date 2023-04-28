import {initState} from "../initState/initState";


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

export {
    reducer
}