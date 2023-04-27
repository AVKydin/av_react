import {DEC, INC, RESET} from "./base.action";

const increment = ()=>{
    return {type:INC}
}
const decrement = ()=>{
    return {type:DEC}
}
const reset = ()=>{
    return {type:RESET}
}

export {
    decrement,
    increment,
    reset
}