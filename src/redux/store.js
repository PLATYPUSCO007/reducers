import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, userReducer } from "./slice";

//CREAMOS STORE
const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
    }
})

export default store;