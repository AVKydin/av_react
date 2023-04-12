import React, {useEffect, useState} from 'react';


const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                setPosts(posts)
                console.log(posts)
            });
    }, [])
    console.log(posts)


    return (
        <>
            {posts.map((post)=>{

                   <p> {post.id}</p>

            })}
        </>
    );
};

export default Posts;