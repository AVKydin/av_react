import React from 'react';

const Post = ({post, details}) => {



    return (
            <div >
                <p > {post.id} - {post.title}</p>
                <button onClick={()=>{
                    details(post)
                }} >details</button>
            </div>
    );
};

export default Post;