import {Component} from "react";
import {commentService} from "../../services/comment.service";

import {Comment} from "./Comment";
import '../Posts/post.css'
class Comments extends Component{
    constructor(props) {
        super(props);
        this.state={
            comments:[]
        }
    }

    componentDidMount() {
        commentService.getAll().then(value => value.data).then(value => this.setState({comments:value}))
    }

    render() {
        return(
            <div className={'comments-block'}>
                    <div className={'title'}>Comments</div>
                    <div className={'comments'}>
                        {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
                    </div>
            </div>
        )
    }
}

export {
    Comments
}