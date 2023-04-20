import {axiosService} from "./axios.service.urls";
import {urls} from "../configs/urls";

const postCommentService = {
    getById:(id)=>axiosService.get(urls.postComment + id)
}

export {
    postCommentService
}