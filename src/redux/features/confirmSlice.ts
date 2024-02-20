import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  confirmType: 'default',
  isOpen: false,
  content: null,
  // callback: () => { },
  title: '',
  leftText: '확인',
  leftClick: () => { },   //좌버튼 = callback
  rightText: '취소',
  rightClick: () => { },
};

export const confirmSlice = createSlice({
  name: "confirm",
  initialState,
  reducers: {
    openConfirm: (state, actions) => {
      const { confirmType, content, title,
        leftText, leftClick, rightText, rightClick } = actions.payload;
      // console.log(actions.payload);

      state.confirmType = confirmType;
      state.isOpen = true;
      state.content = content;
      state.title = title
      // 확인
      state.leftText = leftText ?? initialState?.leftText;
      state.leftClick = leftClick;
      // 취소
      state.rightText = rightText ?? initialState?.rightText;
      state.rightClick = rightClick;
    },
    closeConfirm: (state) => {
      state.isOpen = false;
      state.content = null;
      state.title = ''
    },
  },
});

export const { openConfirm, closeConfirm } = confirmSlice.actions;
export const selectConfirm = (state: { confirm: any; }) => state.confirm;

export default confirmSlice.reducer;