import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';

const initialState = {
  collection: {},
  status: 'idle',
  search: {
    q: '',
    yearStart: 1,
    yearEnd: (new Date()).getFullYear(),
    page: 1,
    media_type: null
  },
};


export const startSearch = createAsyncThunk(
  'nasaAssets/startSearch',
  async (data) => {

    const { q, yearStart, yearEnd, page, media_type } = data;

    const medType = (media_type == null) ? `` : `&media_type=${media_type}`;

    const yStart = (yearStart == null) ? `` : `&year_start=${yearStart}`;
    const yEnd = (yearEnd == null) ? `` : `&year_end=${yearEnd}`;

    const resp = await fetch(`https://images-api.nasa.gov/search?q=${q}${medType}${yStart}${yEnd}&page=${page}`, { method: 'GET', redirect: 'follow' });
    console.log(resp.body);
    return resp.text();
  }
);


export const nasaAssetsSlice = createSlice({
  name: 'nasaAssets',
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
    resetYearEnd: (state) => {
      state.search.yearEnd = (new Date()).getFullYear();
    },
    setYearStart: (state, action) => {
      const value = Number(action.payload);
      if (Number.isInteger(value) && value > 0 && value <= state.search.yearEnd) state.search.yearStart = value;
    },
    resetYearStart: (state) => {
      state.search.yearStart = 1;
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

export const { setSearchQ, setYearEnd, setYearStart, resetYearStart, resetYearEnd } = nasaAssetsSlice.actions;

export const selectSearch = (state) => state.nasaAssets.search;

export const goToPage = (val) => (dispatch, getState) => {
  dispatch(nasaAssetsSlice.actions.setPage(val));
  dispatch(startSearch(selectSearch(getState())));
};

export const goToNextPage = () => (dispatch, getState) => {
  dispatch(nasaAssetsSlice.actions.nextPage());
  dispatch(startSearch(selectSearch(getState())));
};

export const goToPrevPage = () => (dispatch, getState) => {
  dispatch(nasaAssetsSlice.actions.prevPage());
  dispatch(startSearch(selectSearch(getState())));
};

export const startNewSearch = () => (dispatch, getState) => {
  dispatch(nasaAssetsSlice.actions.resetPage());
  dispatch(startSearch(selectSearch(getState())));
};

export default nasaAssetsSlice.reducer;