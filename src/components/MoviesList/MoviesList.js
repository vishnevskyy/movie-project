import React, {useEffect, useState} from 'react';

import {movieService} from "../../services/movie.service";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movieSlice";
import css from './MovieList.module.css'
import {MovieCard} from "../MovieCard/MovieCard";

const MoviesList = () => {
   const {loading,movies,page}=useSelector(state => state.movieReducer)
    const dispatch=useDispatch();
 useEffect(() => {
     dispatch(movieActions.getAllMovies(page))
     console.log(page)
 },[page])
    const array=movies.results;
    return (
        <div>
            <div className={css.MovieList}>
                {array && array.map(movie=><MovieCard key={movie.id} movie={movie}/>)}
            </div>
            <button onClick={()=>dispatch(movieActions.nextPage(1))}> next page </button>
            <button onClick={()=>dispatch(movieActions.prevPage(1))}> prev page </button>
        </div>
    );
};
export {MoviesList};