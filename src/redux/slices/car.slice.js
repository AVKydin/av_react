import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carsService.getAll();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            await carsService.create(car)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setAll: (state, action) => {
            state.cars = action.payload
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        },
        changeTrigger: state => {
            state.trigger = !state.trigger
        }
    },
    // extraReducers: {
    //     [getAll.fulfilled]: (state, action) => {
    //         state.cars = action.payload
    //     },
    //     [create.fulfilled]: (state) => {
    //         state.trigger = !state.trigger
    //     }
    // }
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.cars = action.payload
            })
            .addCase(create.fulfilled, state => {
                state.trigger = !state.trigger
            })

});

const {reducer: carReducer, actions} = slice;

const carActions = {
    ...actions,
    getAll,
    create
}

export {
    carActions,
    carReducer
}