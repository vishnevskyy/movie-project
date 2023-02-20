import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const movieService={
    getAll:(page)=>axiosService.get(`${urls.discover}${urls.movie}?page=${page}`)
}
export {
    movieService
}
