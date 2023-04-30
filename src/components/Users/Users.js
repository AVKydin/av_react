import React from 'react';
import {useSelector} from "react-redux";

import css from '../component.module.css'

const Users = () => {
    const state = useSelector(state => state);

    return (
        <div className={css.Main}>
            <div>{state.users.map(user =>
                <div className={css.User} key={user.id}>
                    <div>{user.name}, {user.email}</div>
                </div>)}
            </div>
        </div>
    );
};

export default Users;