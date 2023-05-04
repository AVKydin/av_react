import css from './Header.module.css';

import React from 'react';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className={css.Header}>
            <button onClick={()=>navigate('cars')}>cars</button>
        </div>
    );
};

export {
    Header
};