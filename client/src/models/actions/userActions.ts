import { createAction } from "@reduxjs/toolkit";

const loginUser = createAction<any>("user/loginUser");
const logoutUser = createAction("user/logoutUser");
const setLoggedInUser = createAction("user/setLoggedInUser");
const resetState = createAction("user/resetState");
const getUsers = createAction("user/getUsers");
const setCurrentPagesPage = createAction("user/setCurrentPagesPage");
const removeSelectedFilter = createAction("user/removeSelectedFilter");
const userFiltersSearch = createAction("user/userFiltersSearch");
const setAllUsers = createAction("user/setAllUsers");
const removeUser = createAction("user/removeUser");
const updateUser = createAction("user/updateUser");
const emptyAction = createAction("user/emptyAction");
const downloadNewsletterUsers = createAction("user/downloadNewsletterUsers");

export {
  loginUser,
  setLoggedInUser,
  logoutUser,
  resetState,
  getUsers,
  setCurrentPagesPage,
  removeSelectedFilter,
  userFiltersSearch,
  setAllUsers,
  removeUser,
  updateUser,
  emptyAction,
  downloadNewsletterUsers,
};
