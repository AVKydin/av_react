import {Component} from "react";
import {postService} from "../../services/post.service";

import {Post} from "./Post";
import './post.css'


class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postService.getAll().then(value => value.data).then(value => this.setState({posts:value}))
    }


    render() {
        return(
            <div className={'posts-block'}>
                <div className={'title'}>Posts</div>
                <div className={'posts'}>
                    {this.state.posts.map((post) => <Post key={post.id} post={post}/>)}
                </div>
            </div>
        )
    }
}

export {
    Posts
}