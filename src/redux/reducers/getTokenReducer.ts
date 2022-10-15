import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IToken {
  data: any;
  loading: boolean;
  error: string | null;
  detail: {
    email: string;
    password: string;
  };
}
const initialState = {
  data: "",
  loading: false,
  error: null,
};

export const fetchDetails = createAsyncThunk(
  "/fetchDetails/",
  async (detail: IToken["detail"]) => {
    const url = "https://django-blog-rest.herokuapp.com/api/v1/account/login/";
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: detail.email,
        password: detail.password,
      }),
    }).then((res) => res.json());
  }
);

const getTokenReducer = createSlice({
  name: "getTokenReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetails.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(fetchDetails.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.access) {
          localStorage.setItem("token", action.payload.access);
          localStorage.setItem(
            "details",
            JSON.stringify(action.payload.user_details)
          );
          console.log(
            "Acess and details",
            localStorage.getItem("token"),
            localStorage.getItem("details")
          );
        }

        console.log(action.payload);
        state.data = action.payload;
        state.error = null;
      }),
      builder.addCase(fetchDetails.rejected, (state, action) => {
        state.loading = false;
        /*   state.error = action.error.message; */
      });
  },
});

export default getTokenReducer.reducer;
