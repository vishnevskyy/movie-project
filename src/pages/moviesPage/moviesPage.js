import React from 'react';
import {NavLink} from "react-router-dom";
import {MoviesList} from "../../components/MoviesList/MoviesList";

const MoviesPage = () => {
    return (
        <div>
            MoviesPage
            <NavLink to={'/main'}>BACK TO CHOISE</NavLink>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};