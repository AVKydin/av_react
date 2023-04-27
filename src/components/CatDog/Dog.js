import React from 'react';
import {useForm} from "react-hook-form";

const Dog = ({stateDispatch}) => {
    const [{dogs}, dispatch] = stateDispatch;
    const {reset, register, handleSubmit} = useForm();

    const saveDog = (dog) => {
        dispatch({type:'AddDog', payload:dog})
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(saveDog)}>
                <input type="text" placeholder={'dog'} {...register('name')}/>
                <button>Save</button>
            </form>

            {dogs.map(dog=><div key={dog.id}>{dog.name} <button onClick={()=>dispatch({type:'DelDog', payload:dog.id})}>Delete</button></div>)}
        </div>
    );
};

export {
    Dog
};