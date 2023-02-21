import React from 'react';
import {photobaseURL} from "../../configs/photobaseURL";

import css from './MovieCard.module.css';
const MovieCard = ({movie}) => {
    return (
        <div className={css.MovieCard}>
            <div className={css.Image}>
                <img src={photobaseURL + movie.poster_path} alt=""/>
            </div>
            <div className={css.Title}>{movie.title}</div>
        </div>
    );
};

export {MovieCard};