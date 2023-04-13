import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";


const Posts = ({details}) => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                setPosts(posts)

            });
    }, [])




    return (
        <>
            {posts.map(post =>
                <Post
                    post={post} details={details} key={post.id}/>
            )
            }
        </>
    );
};

export default Posts;