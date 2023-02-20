import React from 'react';
import {NavLink} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            MainPage
            <NavLink to={'/movies'}>MOVIES</NavLink>
            <NavLink to={'/tvs'}>TVS</NavLink>
        </div>
    );
};

export {MainPage};