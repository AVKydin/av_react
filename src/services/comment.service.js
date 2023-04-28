import {urls} from "../configs/urls";
import {axiosUsersService} from "./axios.users.service";

const commentsService = axiosUsersService.get(urls.comments).then(value => value.data)

export {
    commentsService
}