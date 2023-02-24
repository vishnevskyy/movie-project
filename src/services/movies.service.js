import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const moviesService={
    getAll:(page,genre,sort_by)=>axiosService.get(`${urls.discover}${urls.movie}?page=${page}&with_genres=${genre}&sort_by=${sort_by}`),
    getAllByGenre:(genre)=>axiosService.get(`${urls.discover}${urls.movie}?with_genres=${genre}`),
    getGenreMovies:()=>axiosService.get(`${urls.genre}${urls.movie}${urls.list}`),
    getMovieBySearch:(page,keyword)=>axiosService.get(`${urls.search}${urls.movie}?page=${page}&query=${keyword}`)
}
export {
    moviesService
}
