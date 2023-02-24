import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {movieActions} from "../../../redux/slices/movieSlice";
import {useSearchParams} from "react-router-dom";

const MovieSearchBox = () => {
    const [query,setQuery]=useSearchParams({page:'1'})
    const{register,handleSubmit}=useForm({mode:'all'})
const dispatch=useDispatch();
    const submit = (data) => {
        dispatch(movieActions.setSearchQuery(data.searchQuery));
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'type keyword'} {...register('searchQuery')}/>
            <button>Search</button>
        </form>
    );
};

export {MovieSearchBox};