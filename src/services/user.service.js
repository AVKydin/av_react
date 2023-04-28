import {urls} from "../configs/urls";
import {axiosUsersService} from "./axios.users.service";

const usersService = axiosUsersService.get(urls.users).then(value => value.data)

export {
    usersService
}