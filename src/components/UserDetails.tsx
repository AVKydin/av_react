import React, {FC} from 'react';
import {IUser} from "../Interfaces/user.interface";

interface IProps{
    user:IUser;
}

const UserDetails:FC<IProps> = ({user}) => {

    const {id, userName, name, email}=user;

    return (
        <div>
            <div>id: {id}</div>
            <div>userName: {userName}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
        </div>
    );
};

export {
    UserDetails
};

