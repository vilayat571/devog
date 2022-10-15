import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  theme: boolean;
}

const initialState: IInitialState = {
  theme: false,
};

const changeThemeReducer = createSlice({
  name: "changeThemeReducer",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<boolean>) => {
      state.theme = !action.payload;
    },
  },
});
export const { changeTheme } = changeThemeReducer.actions;
export default changeThemeReducer.reducer;
