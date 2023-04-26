import {Component} from "react";

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }


    render() {
        return(
            <div>
                Posts
            </div>
        )
    }
}

export {
    Posts
}