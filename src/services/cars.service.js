import {carsApiService} from "./axios.service";
import {urls} from "../constants";

const carsService={
    getAll:()=>carsApiService.get(urls.cars.cars),
    create:(car)=>carsApiService.post(urls.cars.cars, car),
    updateById:(id, car)=>carsApiService.put(urls.cars.byId(id), car),
    deleteById:(id)=>carsApiService.delete(urls.cars.byId(id))
}

export {
    carsService
}