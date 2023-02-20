import React, {useEffect, useState} from 'react';

import {movieService} from "../../services/movie.service";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movieSlice";
import {MovieCard} from "../MovieCard/MovieCard";

const MoviesList = () => {
   const {loading,movies,page}=useSelector(state => state.movieReducer)
    const dispatch=useDispatch();
 useEffect(() => {
     dispatch(movieActions.getAllMovies(page))
 },[page])
    const array=movies.results;
    return (
        <div>
            {array && array.map(movie=><MovieCard key={movie.id} movie={movie}/>)}
        </div>
    );
};
export {MoviesList};