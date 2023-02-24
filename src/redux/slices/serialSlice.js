import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {serialService} from "../../services/serials.service";

const initialState = {
    serials: [],
    page: 1,
    sortBy:'popularity.desc'
};

const getAllSerials = createAsyncThunk(
    'serialSlice/getAllSerials',
    async ({page,sortBy,selectedGS}
        , {rejectedWithValue}) => {
        try {
            const {data} = await serialService.getAll(page,selectedGS,sortBy);
            return data
        } catch (e) {
            rejectedWithValue(e.response.data)
        }
    }

)
const getSerialsByGenre = createAsyncThunk(
    'serialSlice/getSerialsByGenre',
    async (genre
        , {rejectedWithValue}) => {
        try {
            const {data} = await serialService.getAllByGenre(genre);
            return data
        } catch (e) {
            rejectedWithValue(e.response.data)
        }
    }

)

const serialSlice = createSlice({
    name: 'serialSlice',
    initialState,
    reducers: {
        setPage: (state, action) => {
            if (1 <state.page < 500) {
                state.page = action.payload
            }
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllSerials.fulfilled, (state, action) => {
                state.serials = action.payload;
            })
            .addCase(getSerialsByGenre.fulfilled, (state, action) => {
                state.serials = action.payload;
            })
});

const {reducer: serialReducer, actions: {setPage,setSortBy}} = serialSlice;

const serialActions = {
    getAllSerials,
    setPage,
    setSortBy,
    getSerialsByGenre
}
export {
    serialReducer,
    serialActions
}