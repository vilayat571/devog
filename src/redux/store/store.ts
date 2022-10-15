import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import changeThemeReducer from "../reducers/changeThemeReducer";
import getTokenReducer from "../reducers/getTokenReducer";
import registerReducer from "../reducers/registerReducer";

export const store = configureStore({
  reducer: {
    getTokenReducer: getTokenReducer,
    changeThemeReducer: changeThemeReducer,
    registerReducer: registerReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
