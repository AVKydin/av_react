import {urls} from "../configs/urls";
import {axiosServiceUsers} from "./axios.service.users";
import comment from "../components/Comment/Comment";

const usersService = {
    create:(user)=>axiosServiceUsers.post(urls.users, user),
}

const commentService = {
    create:(comment)=>axiosServiceUsers.post(urls.comments, comment)
}

export {
    usersService,
    commentService
}