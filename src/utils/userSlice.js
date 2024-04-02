import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser: (state, action) => {
            // data will be loaded in state
            return action.payload;
        },
        removeUser: (state, action) => {
            // null will be placed in state
            return null;
        },
    },
});

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;