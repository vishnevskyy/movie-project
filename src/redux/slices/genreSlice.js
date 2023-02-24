import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/movies.service";
import {serialService} from "../../services/serials.service";

const initialState = {
    genresS: [],
    genresM: [],
    selectedGM: [],
    selectedGS: []
};
const getGenresM = createAsyncThunk(
    "genreSlice/getGenresM",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getGenreMovies()
            return data
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    })
const getGenresS = createAsyncThunk(
    "genreSlice/getGenresS",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await serialService.getGenreSerials()
            return data
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    })
const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        selectGM: (state, action) => {
            state.selectedGM = action.payload;
        },
        deselectGM: (state, action) => {
            const index = state.selectedGM.findIndex(action.payload);
            state.selectedGM.splice(index, 1)
        },
        selectGS: (state, action) => {
            state.selectedGS = action.payload;
        },
        deselectGS: (state, action) => {
            const index = state.selectedGS.findIndex(action.payload);
            state.selectedGS.splice(index, 1)
        }
    },
    extraReducers: builder => builder
        .addCase(getGenresM.fulfilled, (state, action) => {
            state.genresM = action.payload;
        })
        .addCase(getGenresS.fulfilled, (state, action) => {
            state.genresS = action.payload;
        })
})
const {
    reducer: genresReducer,
    actions: {selectGM, deselectGM,selectGS,deselectGS}
}
    = genreSlice;
const genresActions = {
    getGenresS,
    getGenresM,
    selectGM,
    deselectGM,
    selectGS,
    deselectGS
}
export {
    genresActions,
    genresReducer
}