import React from 'react';

import './Album.css'

const Album = ({album}) => {
    const {userId, id, title} = album;
    return (
        <div className={'album'}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export default Album;