import React from 'react';
import {photobaseURL} from "../../../configs/photobaseURL";

import css from './MovieCard.module.css';
import {Badge, Button, Card, CardMedia, Chip, Rating, Typography} from "@mui/material";
import {Link, NavLink} from "react-router-dom";

const MovieCard = ({movie}) => {
    window.scroll(0, 0)
    console.log(movie.release_date.slice(0, 4));
    return (
        <NavLink to={`/movie/${movie.id}`}
        style={{textDecoration:'none'}}>
            <Card sx={{
                minHeight: 440,
                maxWidth: 230,
                backgroundColor: "transparent",
                margin: '5px',
                boxShadow: '1px 1px 2px black,0 0 1em black,0 0 0.2em black',
                alignItems: "center",
                textDecoration: "none",
                display:"flex",
                flexDirection:'column'
            }}>
                <CardMedia component="img" alt="poster" image={photobaseURL + movie.poster_path}/>
                <div style={{height:55, padding:'10px',paddingBottom:'0px',justifyContent:'center',alignItems:'center',display:"flex"}}>
                <Typography sx={{textAlign:'center',fontFamily:'fantasy,serif'}}>{movie.title}</Typography>
                    {/*<Typography>{movie.}</Typography>*/}
                </div>
                <div style={{display:'flex',bottom:0,height:31,paddingBottom:'5px'}}>
                <Rating sx={{top:'5px'}} name="customized-10" value={movie.vote_average / 2} readOnly precision={0.25} max={5} sx={{display:"flex",bottom:0}}/>
                <Chip sx={{textDecoration:"none"}} label={movie.release_date.slice(0, 4)}></Chip>
                </div>
            </Card>
        </NavLink>
    );
};

export {MovieCard};