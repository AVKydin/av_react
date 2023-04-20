import React from 'react';

import './Todo.css'

const Todo = ({todo}) => {
    const {userId, id, title, completed}=todo;
    return (
        <div className={'todo'}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>completed: {completed}</div>
        </div>
    );
};

export {
    Todo
};