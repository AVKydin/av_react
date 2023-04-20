import {axiosService} from "./axios.service.urls";
import {urls} from "../configs/urls";

const todoService = {
    getAll:(todo)=>axiosService.get(urls.todos)
}

export {
    todoService
}