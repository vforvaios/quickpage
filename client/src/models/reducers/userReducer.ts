import { createReducer } from "@reduxjs/toolkit";
import { loginUser } from "../actions/userActions";

const initialState = {
  user: null,
};
const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(loginUser, (state, action) => ({
    ...state,
    user: action.payload,
  }));
});

export default userReducer;
