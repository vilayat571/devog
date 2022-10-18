import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  blogs: any;
  loading: boolean;
  error: string | null | undefined;
}

const initialState: IInitialState = {
  blogs: [],
  loading: false,
  error: null,
};

export const fetchBlogs = createAsyncThunk("/fetchBlogs/", async () => {
  const url = "https://django-blog-rest.herokuapp.com/api/v1/blog/";
  const res = await fetch(url);
  const data = await res.json();
  return data;
});

const getBlogsReducer = createSlice({
  name: "getBlogsReducer",
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
          state.blogs = action.payload;
        }
      ),
      builder.addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        /* state.error=action.error.message */
      });
  },
});

export default getBlogsReducer.reducer;
