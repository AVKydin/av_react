import React from 'react';
import {CommentForm, Comments} from "../components";

const CommentsPage = () => {
    return (
        <div>
            <CommentForm/>
            <Comments/>
        </div>
    );
};

export {
    CommentsPage
};