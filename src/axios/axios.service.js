import axios from "axios";

import {baseURL, baseUsersURL, urls} from "./urls";

const axiosService = axios.create({baseURL});

const axiosUsersService = axios.create({baseURL:baseUsersURL});

const carsService = axiosService.get(urls.cars).then(value => value.data);

const usersService = axiosUsersService.get(urls.users).then(value => value.data)

const commentsService = axiosUsersService.get(urls.comments).then(value => value.data)

export {
    axiosService,
    carsService,
    usersService,
    commentsService
}