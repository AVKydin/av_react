import {axiosService} from "./axios.service";

import {urls} from "../constants/urls";
import {IRes} from "../types/axiosRes.type";
import {IUser} from "../Interfaces/user.interface";

const userService={
    getAll:():IRes<IUser[]>=>axiosService.get(urls.users.users),
    getById:(id:string):IRes<IUser>=>axiosService.get(urls.users.byId(id)),
}

export {
    userService
}