import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {postCommentService} from "../../services/post.comment.service";
import './PostComment.css'

const PostComment = () => {
    const {state} = useLocation();

    const [postComment, setPostComment] = useState({});
    useEffect(() => {
        postCommentService.getById(state.id).then(value => value.data).then(value => setPostComment(value))
    }, [state.id])
    return (
        <div className={'post-comment'}>
            <p>Пост, до якого написаний коментар</p>
            {postComment.body}
        </div>
    );
};

export {
    PostComment
};