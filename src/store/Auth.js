import { configureStore, createSlice } from "@reduxjs/toolkit";

export const TOKEN_TIME_OUT = 600 * 1000;

const createExpireTime = () => {
  return Date.now();
  // redux 공식문서 상 reducer에 random, date 함수 사용 X
};

export const tokenSlice = createSlice({
  name: "authToken",
  initialState: {
    authenticated: false,
    accessToken: null,
    expireTime: null,
  },
  reducers: {
    set_token: (state, action) => {
      state.authenticated = true;
      state.accessToken = action.payload;
      state.expireTime = createExpireTime + TOKEN_TIME_OUT;
    },
    delete_token: (state) => {
      state.authenticated = false;
      state.accessToken = null;
      state.expireTime = null;
    },
  },
});

export const { set_token, delete_token } = tokenSlice.actions;

export default configureStore({ reducer: tokenSlice.reducer });
