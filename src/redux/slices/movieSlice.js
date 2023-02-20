import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";

const initialState = {
    movies: [],
    page: 1
};

const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (page, {rejectedWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            rejectedWithValue(e.response.data)
        }
    }
);


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        nextPage: (state, action) => {
            if (state.page < 500) {
                state.page += action.payload
            }
        },
        prevPage: (state, action) => {
            if (state.page > 1){state.page -= action.payload}
        }

    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movies = action.payload
            })
});

const {reducer: movieReducer, actions: {nextPage,prevPage}}=movieSlice;

const movieActions = {
    getAllMovies,
    nextPage,
    prevPage

}
export {
    movieReducer,
    movieActions
}