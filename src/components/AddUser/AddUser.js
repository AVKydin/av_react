import React from 'react';
import {useForm} from "react-hook-form";
import {usersService} from "../../services/users.service";

const AddUser = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isValid,
        },
    } = useForm({mode: 'all'});

    const add = async(add)=>{
        const {data} = await usersService.create(add)
        console.log(data)
        reset()
    }

    return (

        <form onSubmit={handleSubmit(add)} className={'form'}>
                <h3 className={'h3'}>Додати юзера</h3>
                <input type='text' placeholder={'name'} {...register('name', {pattern:{
                    value:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                        message: 'name складається тільки з літер від 1 до 20 символів'
                    },
                    required: {value: true, message: 'name складається тільки з літер від 1 до 20 символів'}
                })}/>
                {errors.name && <span>{errors.name.message}</span>}

                <input type='text' placeholder={'username'} {...register('username', {pattern:{
                        value:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                        message: 'username складається тільки з літер від 1 до 20 символів'
                    },
                    required: {value: true, message: 'username складається тільки з літер від 1 до 20 символів'}
                })}/>
                {errors.username && <span>{errors.username.message}</span>}

                <input type='text' placeholder={'email'} {...register('email', {pattern:{
                        value:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                        message: 'не схоже на дійсний email'
                    },
                    required: {value: true, message: 'не схоже на дійсний email'}
                })}/>
                {errors.email && <span>{errors.email.message}</span>}

            <button disabled={!isValid}>Add User</button>

        </form>
    );
};



export default AddUser;