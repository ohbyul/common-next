import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  id: 0,
  content: null,
  isOpen: false,
};


export const alert = createSlice({
  name: "alert",
  initialState,
  reducers: {
    openAlert: (state, actions) => {
      const { content } = actions.payload;
      state.id = Date.now();
      state.content = content;
      state.isOpen = true
    },
    closeAlert: (state) => {
      state.isOpen = false;
      state.content = null;
    },
  },
});

export const { openAlert, closeAlert } = alert.actions;
export const selectAlert = (state: { alert: any; }) => state.alert;

export default alert.reducer;