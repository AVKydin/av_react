import React, {useReducer} from 'react';

import '../Posts/post.css'
import {Cat} from "./Cat";
import {Dog} from "./Dog";


const reducer = (state, action) => {
    switch (action.type) {
        case 'AddCat':
            const cat = action.payload;
            const catId = state.cats.slice(-1)[0]?.id + 1 || 1;
            cat.id = catId;
            return {...state, cats: [...state.cats, cat]}
        case 'AddDog':
            const dog = action.payload;
            const dogId = state.dogs.slice(-1)[0]?.id + 1 || 1;
            dog.id = dogId;
            return {...state, dogs: [...state.dogs, dog]}
        case 'DelCat':
            const catIdDel = action.payload;
            const catInd = state.cats.findIndex(value => value.id===catIdDel);
            state.cats.splice(catInd, 1);
            return {...state}
        case 'DelDog':
            const dogIdDel = action.payload;
            const dogInd = state.dogs.findIndex(value => value.id===dogIdDel);
            state.dogs.splice(dogInd, 1);
            return {...state}
        default:
            return state;
    }
}

const CatDog = () => {

    const stateDispatch = useReducer(reducer, {cats: [], dogs: []});


    return (
        <div className={'cat-dog'}>
            <Cat stateDispatch={stateDispatch}/>
            <Dog stateDispatch={stateDispatch}/>
        </div>
    );
};

export {
    CatDog
};

