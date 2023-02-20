import React from 'react';
import {NavLink} from "react-router-dom";

const HelloPage = () => {
    return (
        <div>
            HelloPage
            <NavLink to={'/main'}>Start</NavLink>
        </div>
    );
};

export {HelloPage};