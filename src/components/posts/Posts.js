import React from 'react';
import {Provider} from "react-redux";
import {post} from "../../redux/store/storePosts";


const Posts = () => {
    return (
        <Provider store={post}>
            <div>
                Posts
            </div>
        </Provider>
    );
};

export default Posts;