import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const serialService={
    getAll:(page,genre,sort_by)=>axiosService.get(`${urls.discover}${urls.serials}?page=${page}&with_genres=${genre}&sort_by=${sort_by}`),
    getAllByGenre:(genre)=>axiosService.get(`${urls.discover}${urls.serials}?with_genres=${genre}`),
    getGenreSerials:()=>axiosService.get(`${urls.genre}${urls.serials}${urls.list}`),
}
export {
    serialService
}
