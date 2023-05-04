import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {commentsService} from "../../services";

import {Comment} from "../Comment/Comment";
import {commentActions} from "../../redux";

const Comments = () => {
    const dispatch = useDispatch();
    const {comments} = useSelector(state => state.comments);

    useEffect(()=>{
        commentsService.getAll().then(value => value.data).then(value => dispatch(commentActions.setAll(value)))
    }, [dispatch])

    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {
    Comments
};