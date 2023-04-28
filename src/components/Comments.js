import React from 'react';
import {useSelector} from "react-redux";

import css from './component.module.css'
const Comments = () => {
    const state = useSelector(state => state);

    return (
        <div className={css.Main}>
            <div >{state.comments.map(comment =>
                <div className={css.Comment} key={comment.id}>
                    <div>{comment.name}, {comment.body}</div>
                </div>)}
            </div>
        </div>
    );
};

export default Comments;