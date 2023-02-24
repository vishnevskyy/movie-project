import React from 'react';
import {photobaseURL} from "../../../configs/photobaseURL";

import css from './SerialCard.module.css';
const SerialCard = ({serial}) => {
    return (
        <div className={css.SerialCard}>
            <div className={css.Image}>
                {serial.poster_path &&
                <img src={photobaseURL + serial.poster_path} alt=""/>
                }
            </div>
            <div className={css.Title}>{serial.name}</div>
        </div>
    );
};

export {SerialCard};