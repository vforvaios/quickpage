import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/models/reducers/userReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "state",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    userReducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
