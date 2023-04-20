import React from 'react';

import './Comment.css'
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    return (

        <div className={'comment'}>
            <Link className={'link'} to={comment.postId.toString()} state={{...comment}}>
                <div>comment body: {body}</div>
            </Link>
        </div>
    );
};

export {
    Comment
};