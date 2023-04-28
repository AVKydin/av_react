import axios from "axios";

import {baseUsersURL} from "../configs/urls";

const axiosUsersService = axios.create({baseURL:baseUsersURL});

export {
    axiosUsersService
}