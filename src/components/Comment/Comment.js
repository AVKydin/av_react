import React from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../../services/users.service";

const Comment = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isValid,
        },
    } = useForm({mode: 'all'});

    const add = async (add) => {
      const {data} = await commentService.create(add)
        console.log(data)
        reset()
    }


    return (
        <form onSubmit={handleSubmit(add)} className={'form'}>
            <h3 className={'h3'}>Додати комент</h3>
            <input type='text' placeholder={'name'} {...register('name', {pattern:{
                    value:/^[a-zA-Zа-яА-яёЁіІїЇ]{5,40}$/,
                    message: 'name складається тільки з літер від 5 до 40 символів'
                },
                required: {value: true, message: 'name складається тільки з літер від 5 до 40 символів'}
            })}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type='text' placeholder={'email'} {...register('email', {pattern:{
                    value:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    message: 'не схоже на дійсний email'
                },
                required: {value: true, message: 'не схоже на дійсний email'}
            })}/>
            {errors.email && <span>{errors.email.message}</span>}

            <input type='text' placeholder={'body'} {...register('body', {pattern:{
                    value:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,100}$/,
                    message: 'name складається тільки з літер від 1 до 100 символів'
                },
                required: {value: true, message: 'body складається тільки з літер від 1 до 100 символів'}
            })}/>
            {errors.body && <span>{errors.body.message}</span>}

            <button disabled={!isValid}>Add Comment</button>
        </form>
    );
};




export default Comment;