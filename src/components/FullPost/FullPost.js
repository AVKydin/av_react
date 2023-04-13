import React from 'react';

const FullPost = ({fullPost}) => {
    return (
        <div>
            <p>{fullPost.userId}</p>
            <p>{fullPost.id}</p>
            <p>{fullPost.title}</p>
            <p>{fullPost.body}</p>
        </div>
    );
};

export default FullPost;