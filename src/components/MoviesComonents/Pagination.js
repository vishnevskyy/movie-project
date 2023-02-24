import React, {useEffect} from 'react';
import {movieActions} from "../../redux/slices/movieSlice";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const PaginationM = () => {
    const[query,setQuery]=useSearchParams({page:`1`})
    const {page} = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(movieActions.setPage({page:query.get('page')}))
},[query]);

    return (
        <div>
            <div>{JSON.stringify(page.page)}</div>
            <button onClick={() =>setQuery(query=>({page:+query.get('page')+1}))}> next page</button>
            <button onClick={() =>setQuery(query=>({page:+query.get('page')-1}))}> prev page</button>
        </div>
    );
};

export {PaginationM};