import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  modalType: 1,
  isOpen: false,
  content: null,
  callback: () => { },
  title: ''
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, actions) => {
      const { modalType, content, callback, title } = actions.payload;
      state.modalType = modalType;
      state.isOpen = true;
      state.content = content;
      state.callback = callback;
      state.title = title
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.content = null;
      state.callback = () => { };
      state.title = ''
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModal = (state: { modal: any; }) => state.modal;

export default modalSlice.reducer;