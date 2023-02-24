import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../../redux/slices/movieSlice";
import css from './MovieList.module.css'
import {MovieCard} from "../MovieCard/MovieCard";
import {useSearchParams} from "react-router-dom";

const MoviesList = ({id}) => {

    const [query,setQuery]=useSearchParams({page:'1'});

    const {movies, page,sortBy,searchQuery} = useSelector(state => state.movieReducer)

    const {selectedGM} = useSelector(state => state.genresReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        if (!searchQuery){
            dispatch(movieActions.getAllMovies({page:query.get('page'),selectedGM,sortBy}))
        }else {
            dispatch(movieActions.getMoviesBySearch({page:query.get('page'),searchQuery}))
        }
    }, [page, selectedGM,sortBy,searchQuery])
    const array = movies.results;
    return (
        <div>
            <div></div>
            <div className={css.MovieList}>
                {array && array.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};
export {MoviesList};