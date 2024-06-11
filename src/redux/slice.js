import { createSlice } from "@reduxjs/toolkit";

//SLICE PARA COUNTER
const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: state=>state + 1,
        decrement: state=>state - 1
    }
})

//SLICE PARA USER
const userSlice = createSlice({
    name: 'user',
    initialState: {name: 'Rodrigo'},
    reducers: {
        setName: (state, action)=>{
            return {...state, name: action.payload}
        },
    }
})

export const {increment, decrement} = counterSlice.actions;
export const {setName} = userSlice.actions;

export const counterReducer = counterSlice.reducer;
export const userReducer = userSlice.reducer;