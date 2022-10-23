import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  data: any;
  loading: boolean;
  error: undefined | string | null;
}

const initialState: IInitialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchBlogs = createAsyncThunk("/fetchBlogs/", async () => {
  const url = `https://django-blog-rest.herokuapp.com/api/v1/blog/`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
});

export const getAllBlogsReducer = createSlice({
  name: "getAllBlogsReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(
        fetchBlogs.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.data=action.payload.results;
        }
      ),
      builder.addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getAllBlogsReducer.reducer;
