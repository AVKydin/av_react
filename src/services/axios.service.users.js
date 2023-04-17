import axios from "axios";
import {baseURL, baseURLUsers} from "../configs/urls";

const axiosService = axios.create({baseURL});
const axiosServiceUsers = axios.create({baseURL:baseURLUsers});

export {
    axiosService,
    axiosServiceUsers
}
