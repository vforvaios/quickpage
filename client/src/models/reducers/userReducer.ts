import { createReducer } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "../actions/userActions";

const initialState = {
  user: null,
};
const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginUser, (state, action) => ({
      ...state,
      user: action.payload,
    }))
    .addCase(logoutUser, (state) => ({
      ...state,
      user: null,
    }));
});

export default userReducer;
