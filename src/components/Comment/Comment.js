import React from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../../services/users.service";
import {joiResolver} from '@hookform/resolvers/joi';
import {commentValidator} from "../../validators/comment.validator";

const Comment = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isValid,
        },
    } = useForm({mode: 'all', resolver:joiResolver(commentValidator)});

    const add = async (add) => {
      const {data} = await commentService.create(add)
        console.log(data)
        reset()
    }


    return (
        <form onSubmit={handleSubmit(add)} className={'form'}>
            <h3 className={'h3'}>Додати комент</h3>
            <input type='text' placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type='text' placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}

            <input type='text' placeholder={'body'} {...register('body')}/>
            {errors.body && <span>{errors.body.message}</span>}

            <button disabled={!isValid}>Add Comment</button>
        </form>
    );
};




export default Comment;