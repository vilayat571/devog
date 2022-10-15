import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IRegister {
  data: any;
  loading: boolean;
  error: string | null;
  details: {
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    password: string;
  };
}
const initialState: Partial<IRegister> = {
  data: "",
  loading: false,
  error: null,
};

export const registeredUser = createAsyncThunk(
  "/registeredUser",
  async (data: IRegister["details"]) => {
    const url = "https://django-blog-rest.herokuapp.com/api/v1/account/register/";
    const register = await fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        username: data.username,
        password: data.password,
      }),
    });
    const res = await register.json();
    return res;
  }
);

const registerReducer = createSlice({
  name: "registerReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registeredUser.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(registeredUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        console.log(action.payload);
      }),
      builder.addCase(registeredUser.rejected, (state, action) => {
        state.loading = false;
        /* state.error=action.error.message */
      });
  },
});
export default registerReducer.reducer;
