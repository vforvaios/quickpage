import { createReducer } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "../actions/userActions";

type UserState = {
  user: any;
  tenant: any;
};
const initialState: UserState = {
  user: null,
  tenant: null,
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
      tenant: null,
    }));
});

export default userReducer;
