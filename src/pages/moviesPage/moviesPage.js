import React from 'react';
import {NavLink} from "react-router-dom";
import {MoviesList} from "../../components/MoviesComonents/MoviesList/MoviesList";
import {MovieCheckbox} from "../../components/MoviesComonents/MoviesCheckbox/MovieCheckbox";
import {PaginationM} from "../../components/MoviesComonents/Pagination";
import {MovieSearchBox} from "../../components/MoviesComonents/MovieSearchBox/MovieSearchBox";

const MoviesPage = () => {
    return (
        <div>
            MoviesPage
            <NavLink to={'/main'}>BACK TO CHOISE</NavLink>
            <MovieSearchBox/>
            <MovieCheckbox/>
            <MoviesList/>
            <PaginationM/>
        </div>
    );
};

export {MoviesPage};