import {urls} from "../configs/urls";
import {axiosServiceUsers} from "./axios.service.users";

const usersService = {
    getAll:()=>axiosServiceUsers.get(urls.users),
    create:(car)=>axiosServiceUsers.post(urls.users, car),
}

export {
    usersService
}