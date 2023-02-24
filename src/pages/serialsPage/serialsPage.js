import React from 'react';
import {NavLink} from "react-router-dom";
import {SerialsList} from "../../components/SerialsComponents/SerialsList/SerialsList";
import {PaginationS} from "../../components/SerialsComponents/Pagination";
import {SerialsCheckbox} from "../../components/SerialsComponents/SerialsCheckbox/SerialsCheckbox";

const SerialsPage = () => {
    return (
        <div>
            SerialsPage
            <NavLink to={'/main'}>BACK TO CHOISE</NavLink>
            <SerialsCheckbox/>
            <SerialsList/>
            <PaginationS/>
        </div>
    );
};

export {SerialsPage};