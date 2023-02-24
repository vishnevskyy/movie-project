import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genresActions} from "../../../redux/slices/genreSlice";
import {useForm} from "react-hook-form";
import {serialActions} from "../../../redux/slices/serialSlice";

const SerialsCheckbox = () => {
    const {reset, register, handleSubmit} = useForm({mode: 'all'});


    const {genresS, selectedGS} = useSelector(state => state.genresReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(genresActions.getGenresS());
    }, [])
    const submit = (data) => {
        const selectedGenres = Object.keys(data)
            .filter(key => data[key])
            .map(key => key.replace('genre_', ''));
        dispatch(genresActions.selectGS(selectedGenres))
        dispatch(serialActions.setSortBy(data.sort_by))
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                {genresS.genres?.map(genre => (
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

export {SerialsCheckbox};