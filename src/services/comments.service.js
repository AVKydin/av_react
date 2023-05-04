import {urls} from "../constants";
import {placeHolderApiService} from "./axios.service";

const commentsService = {
    getAll:()=>placeHolderApiService.get(urls.comments),
    create:(comment)=>placeHolderApiService.post(urls.comments, comment)
}

export {
    commentsService
}