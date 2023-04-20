import {axiosService} from "./axios.service.urls";

import {urls} from "../configs/urls";

const commentsService = {
    getAll:()=>axiosService.get(urls.comments)
}

export {
    commentsService
}