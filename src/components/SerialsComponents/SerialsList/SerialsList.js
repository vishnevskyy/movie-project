import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import css from './SerialList.module.css'
import {useSearchParams} from "react-router-dom";
import {serialActions} from "../../../redux/slices/serialSlice";
import {SerialCard} from "../SerialCard/SerialCard";

const SerialsList = () => {

    const [query,setQuery]=useSearchParams({page:'1'});

    const {serials, page,sortBy} = useSelector(state => state.serialReducer)

    const {selectedGS} = useSelector(state => state.genresReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(serialActions.getAllSerials({page:query.get('page'),selectedGS,sortBy}))
    }, [page, selectedGS,sortBy])
    const array = serials.results;
    return (
        <div>
            <div></div>
            <div className={css.SerialList}>
                {array && array.map(serial => <SerialCard key={serial.id} serial={serial}/>)}
            </div>
        </div>
    );
};
export {SerialsList};