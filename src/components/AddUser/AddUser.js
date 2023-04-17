import React from 'react';
import {useForm} from "react-hook-form";
import {usersService} from "../../services/users.service";
import {joiResolver} from '@hookform/resolvers/joi'
import {userValidator} from "../../validators/user.validator";

const AddUser = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isValid,
        },
    } = useForm({mode: 'all', resolver:joiResolver(userValidator)});

    const add = async(add)=>{
        const {data} = await usersService.create(add)
        console.log(data)
        reset()
    }

    return (

        <form onSubmit={handleSubmit(add)} className={'form'}>
                <h3 className={'h3'}>Додати юзера</h3>
                <input type='text' placeholder={'name'} {...register('name')}/>
                {errors.name && <span>{errors.name.message}</span>}

                <input type='text' placeholder={'username'} {...register('username')}/>
                {errors.username && <span>{errors.username.message}</span>}

                <input type='text' placeholder={'email'} {...register('email')}/>
                {errors.email && <span>{errors.email.message}</span>}

            <button disabled={!isValid}>Add User</button>

        </form>
    );
};



export default AddUser;