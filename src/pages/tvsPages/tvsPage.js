import React from 'react';
import {NavLink} from "react-router-dom";

const TvsPage = () => {
    return (
        <div>
            TvsPage
            <NavLink to={'/main'}>BACK TO CHOISE</NavLink>
        </div>
    );
};

export {TvsPage};