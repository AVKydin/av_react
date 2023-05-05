import axios from "axios";

import {baseUrlCars} from "../constants";

const carsApiService = axios.create({baseURL:baseUrlCars});

export {
    carsApiService
}