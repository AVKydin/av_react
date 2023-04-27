import React from 'react';
import {useForm} from "react-hook-form";

const Cat = ({stateDispatch}) => {
    const {reset, register,handleSubmit} = useForm();
    const [{cats}, dispatch] = stateDispatch;

    const saveCat = (cat) =>{
        dispatch({type:'AddCat', payload:cat})
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(saveCat)}>
                <input type="text" placeholder={'cat'} {...register('name')}/>
                <button>Save</button>
            </form>
                {cats.map(cat=><div key={cat.id}>{cat.name} <button onClick={()=>dispatch({type:'DelCat', payload:cat.id})}>Delete</button></div>)}
        </div>
    );
};

export {
    Cat
};