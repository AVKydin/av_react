import {axiosService} from "./axios.service.urls";
import {urls} from "../configs/urls";

const albumsService = {
    getAll:()=>axiosService.get(urls.albums)
}

export {
    albumsService
}