import {axiosInstance} from "./axios.service";
import {urls} from "../configs/urls";

const movieService={
    getAll:()=>axiosInstance.get(urls.discover+urls.movie)
}
export {
    movieService
}