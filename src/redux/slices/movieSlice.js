import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";

const initialState = {
    movies: [],
    selectedMovie:null
};
const getAll = createAsyncThunk('movieSlice/getAll',
    async (_, thunkAPI) => {
        const {rejectWithValue}=thunkAPI;
        try {
        const {data} = await movieService.getAll();
        return data
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})

const movieSlice = createSlice({
    name: "movieSlice", reducers: {
        setSelectedMovie:(state,action)=>{
            state.selectedMovie=action.payload
        }
    }, initialState, extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
            })
    }
})
const {reducer: movieReducer,actions:{setSelectedMovie}} = movieSlice;

const movieActions = {
    getAll,
    setSelectedMovie
}

export {
    movieSlice, movieReducer, movieActions
}