import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const MainPage = () => {
    const {page:Mpage} = useSelector(state => state.movieReducer)
    const {page:Spage} = useSelector(state => state.serialReducer)
    const location=useLocation();
    console.log(location)
    return (
        <div>
            MainPage
            <NavLink to={`/movies?page=${Mpage}`}>Фільми</NavLink>
            <NavLink to={`/serials?page=${Spage}`}>Серіали</NavLink>
        </div>
    );
};

export {MainPage};