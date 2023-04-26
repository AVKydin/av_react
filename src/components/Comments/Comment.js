import {Component} from "react";

import '../Posts/post.css'

class Comment extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {postId, id, name, email, body}=this.props.comment;

        return(
            <div className={'comment'}>
                <p>postId - {postId}</p>
                <p>id - {id}</p>
                <p>name - {name}</p>
                <p>email - {email}</p>
                <p>body - {body}</p>
            </div>
        )
    }
}

export {
    Comment
}