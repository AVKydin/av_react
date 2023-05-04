import {urls} from "../constants";
import {placeHolderApiService} from "./axios.service";

const usersService = {
    getAll: () => placeHolderApiService.get(urls.users),
    create:(user)=>placeHolderApiService.post(urls.users, user)
}

export {
    usersService
}