import axios from "axios";
import {baseURL, urls} from "./urls";

const axiosService = axios.create({baseURL});

const carsService = axiosService.get(urls.cars).then(value => value.data);

export {
    axiosService,
    carsService
}