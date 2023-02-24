import React from 'react';
import {photobaseURL} from "../../../configs/photobaseURL";

import css from './MovieCard.module.css';
import {Badge, Button, Rating} from "@mui/material";
const MovieCard = ({movie}) => {
    return (
        <div className={css.MovieCard}>
            <div className={css.Image}>
                {movie.poster_path &&
                    <Badge badgeContent={movie.genre_ids[0]} color={"success"} anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}>
                <img src={photobaseURL + movie.poster_path} alt=""/>
                    </Badge>
                }
            </div>
            <div className={css.Title}>
                <Button>{movie.title}</Button>
            </div>

            <Rating name="customized-10" value={movie.vote_average/2} readOnly precision={0.25} max={5} />
        </div>
    );
};

export {MovieCard};