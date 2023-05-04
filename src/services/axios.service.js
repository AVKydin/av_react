import axios from "axios";
import {baseUrlCars, baseUrlJson} from "../constants";

const placeHolderApiService = axios.create({baseURL:baseUrlJson})
const carsApiService = axios.create({baseURL:baseUrlCars});

export {
    placeHolderApiService,
    carsApiService
}