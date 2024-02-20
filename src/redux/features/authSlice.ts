import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: 'init',
    // content: null,
    // isOpen: false,
};


export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        session: (state, actions) => {
            const { userId } = actions.payload;
            state.userId = userId;
        },
    },
});

export const { session } = auth.actions;
export const selectAuth = (state: { auth: any; }) => state.auth;

export default auth.reducer;