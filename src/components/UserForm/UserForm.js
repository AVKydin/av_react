import React from 'react';
import {useForm} from "react-hook-form";
import {usersService} from "../../services";
import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const UserForm = () => {
    const {reset, register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const save = async (user) => {
        const {data} = await usersService.create(user);
        dispatch(userActions.create(data))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <button>Save</button>
        </form>
    );
};

export {
    UserForm
};