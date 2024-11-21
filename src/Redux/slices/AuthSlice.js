import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isloggedIn: localStorage.getItem('isloggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}

};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});

//export const {} = authSlice.actions;
export default authSlice.reducer;