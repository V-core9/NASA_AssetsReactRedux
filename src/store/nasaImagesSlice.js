import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';

const initialState = {
  collection: {},
  status: 'idle',
  search: {
    q: 'space station',
    yearStart: 1900,
    yearEnd: (new Date()).getFullYear(),
    page: 1
  },
};


export const startSearch = createAsyncThunk(
  'nasaImages/startSearch',
  async (data) => {

    const { q, yearStart, yearEnd, page } = data;
    const resp = await fetch(`https://images-api.nasa.gov/search?q=${q}&media_type=image&year_start=${yearStart}&year_end=${yearEnd}&page=${page}`, { method: 'GET', redirect: 'follow' });
    console.log(resp.body);
    return resp.text();
  }
);


export const nasaImagesSlice = createSlice({
  name: 'nasaImages',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setSearchQ: (state, action) => {
      state.search.q = action.payload;
    },
    setYearEnd: (state, action) => {
      const value = Number(action.payload);
      if (Number.isInteger(value) && value <= (new Date()).getFullYear() && value >= state.search.yearStart) state.search.yearEnd = value;
    },
    setYearStart: (state, action) => {
      const value = Number(action.payload);
      if (Number.isInteger(value) && value > 0 && value <= state.search.yearEnd) state.search.yearStart = value;
    },
    nextPage: (state) => {
      state.search.page += 1;
    },
    prevPage: (state) => {
      if (state.search.page > 1) state.search.page -= 1;
    },
    resetPage: (state, action) => {
      state.search.page = 1;
    },
    setPage: (state, action) => {
      state.search.page = parseInt(action.payload);
    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {

    builder
      .addCase(startSearch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(startSearch.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(startSearch.fulfilled, (state, action) => {
        state.status = 'idle';
        const rez = JSON.parse(action.payload);
        console.log('JSON.parse(action.payload)', rez);
        if (rez.collection) {
          state.collection = rez.collection;
        } else {
          state.collection = {};
        }
      });

  },
});

export const { setSearchQ, setYearEnd, setYearStart } = nasaImagesSlice.actions;

export const selectSearch = (state) => state.nasaImages.search;

export const goToPage = (val) => (dispatch, getState) => {
  dispatch(nasaImagesSlice.actions.setPage(val));
  dispatch(startSearch(selectSearch(getState())));
};

export const goToNextPage = () => (dispatch, getState) => {
  dispatch(nasaImagesSlice.actions.nextPage());
  dispatch(startSearch(selectSearch(getState())));
};

export const goToPrevPage = () => (dispatch, getState) => {
  dispatch(nasaImagesSlice.actions.prevPage());
  dispatch(startSearch(selectSearch(getState())));
};

export const startNewSearch = () => (dispatch, getState) => {
  dispatch(nasaImagesSlice.actions.resetPage());
  dispatch(startSearch(selectSearch(getState())));
};

export default nasaImagesSlice.reducer;
