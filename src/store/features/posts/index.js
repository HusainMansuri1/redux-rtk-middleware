import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const initialState = {
	data: [],
	loading: false,
	error: false,
};

export const getPosts = createAsyncThunk(
	//prettier-ignore
	'getPostsData',
	async (args, { rejectWithValue }) => {
		try {
			const resp = await fetch(API_ENDPOINT);
			const data = await resp.json();
			return data;
		} catch (error) {
			console.log(error);
			throw rejectWithValue(error);
		}
	}
);

const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPosts.pending, (state) => {
				state.loading = true;
			})
			.addCase(getPosts.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
				state.error = false;
			})
			.addCase(getPosts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const postsData = (state) => state.posts;
export default postSlice.reducer;
