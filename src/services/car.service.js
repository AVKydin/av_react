import {urls} from "../configs/urls";
import {axiosService} from "./axios.service";

const carsService = axiosService.get(urls.cars).then(value => value.data);

export {
    carsService
}