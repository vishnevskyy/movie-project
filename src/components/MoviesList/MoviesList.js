import React from 'react';
import {useSelector} from "react-redux";

const MoviesList = () => {
    const{movies}=useSelector(state => state.movies)
    console.log(movies)
    return (
        <div>
            MoviesList
        </div>
    );
};

export {MoviesList};