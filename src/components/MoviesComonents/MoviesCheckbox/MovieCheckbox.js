import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genresActions} from "../../../redux/slices/genreSlice";
import {useForm} from "react-hook-form";
import {movieActions} from "../../../redux/slices/movieSlice";

const MovieCheckbox = () => {
    const {reset, register, handleSubmit} = useForm({mode: 'all'});


    const {genresM, selectedGM} = useSelector(state => state.genresReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(genresActions.getGenresM());
    }, [])
    const submit = (data) => {
        const selectedGenres = Object.keys(data)
            .filter(key => data[key])
            .map(key => key.replace('genre_', ''));
        dispatch(genresActions.selectGM(selectedGenres))
        dispatch(movieActions.setSortBy(data.sort_by))
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                {genresM.genres?.map(genre => (
                    <div key={genre.id}>
                        <div>
                            <input
                                type="checkbox"
                                name={`genre_${genre.id}`}
                                {...register(`genre_${genre.id}`)}
                            />
                            {genre.name}
                        </div>
                    </div>
                ))}
                <button type="submit">Save</button>
            </div>
            <select name="" {...register('sort_by')}>
                <option value="popularity.desc">popularity\/</option>
                <option value="popularity.asc">popularity/\</option>
                <option value="release_date.desc">release_date\/</option>
                <option value="release_date.asc">release_date/\</option>
            </select>
        </form>
    )
};

export {MovieCheckbox};