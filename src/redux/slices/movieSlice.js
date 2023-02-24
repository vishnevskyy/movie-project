import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/movies.service";

const initialState = {
    movies: [],
    page: 1,
    sortBy:'popularity.desc',
    searchQuery:null
};

const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async ({page,sortBy,selectedGM}
, {rejectedWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page,selectedGM,sortBy);
            return data
        } catch (e) {
            rejectedWithValue(e.response.data)
        }
    }

)
const getMoviesBySearch = createAsyncThunk(
    'movieSlice/getMoviesBySearch',
    async ({page, searchQuery}
, {rejectedWithValue}) => {
        try {
            console.log(page)
            const {data} = await moviesService.getMovieBySearch(page,searchQuery);
            return data
        } catch (e) {
            rejectedWithValue(e.response.data)
        }
    }

)
const getMoviesByGenre = createAsyncThunk(
    'movieSlice/getMoviesByGenre',
    async (genre
, {rejectedWithValue}) => {
        try {
            const {data} = await moviesService.getAllByGenre(genre);
            return data
        } catch (e) {
            rejectedWithValue(e.response.data)
        }
    }

)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setPage: (state, action) => {
            if (1 <state.page < 500) {
                state.page = action.payload
            }
        },
        setSortBy: (state, action) => {
                state.sortBy = action.payload
        },
        setSearchQuery: (state, action) => {
                state.searchQuery = action.payload
            console.log(state.searchQuery)
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(getMoviesBySearch.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
});

const {reducer: movieReducer, actions: {setPage,setSortBy,setSearchQuery}} = movieSlice;

const movieActions = {
    getAllMovies,
    setPage,
    setSortBy,
    getMoviesByGenre,
    getMoviesBySearch,
    setSearchQuery
}
export {
    movieReducer,
    movieActions
}