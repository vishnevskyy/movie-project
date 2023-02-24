import {combineReducers} from "redux";
import {movieReducer} from "./slices/movieSlice";
import {configureStore} from "@reduxjs/toolkit";
import {genresReducer} from "./slices/genreSlice";
import {serialReducer} from "./slices/serialSlice";

const rootReducer=combineReducers({movieReducer, genresReducer,serialReducer})
const setupStore=()=>configureStore({reducer:rootReducer})
export {
    setupStore
}