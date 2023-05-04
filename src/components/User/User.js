import React from 'react';

const User = ({user}) => {
    const {id, name, username} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>userName: {username}</div>
        </div>
    );
};

export {
    User
};