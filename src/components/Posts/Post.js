import {Component} from "react";

import './post.css'

class Post extends Component{

    constructor(props) {
        super(props);
    }

    render() {

                const {userId, id, title, body}=this.props.post;
        return(
                <div className={'post'} >
                    <p>userId - {userId}</p>
                    <p>idPost - {id}</p>
                    <p>title - {title}</p>
                    <p>body - {body}</p>
                </div>

        )
    }
}

export {
    Post
}