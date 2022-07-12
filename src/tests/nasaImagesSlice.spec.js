import nasaImagesReducer, { searchImages, setSearchQ, setYearEnd, setYearStart, nextPage, prevPage, resetPage, setPage } from '../store/nasaImagesSlice';

describe('nasaImages reducer', () => {
  const initialState = {
    collection: {},
    status: 'idle',
    search: {
      page: 1,
      q: "space station",
      yearEnd: 2022,
      yearStart: 1900,
    }
  };
  it('should handle initial state', () => {
    expect(nasaImagesReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });


  it('should setSearchQ', () => {
    const actual = nasaImagesReducer(initialState, setSearchQ('apollo'));
    expect(actual.search.q).toEqual("apollo");
  });

  it('should setYearStart', () => {
    const actual = nasaImagesReducer(initialState, setYearStart(2000));
    expect(actual.search.yearStart).toEqual(2000);
  });


  it('should setYearEnd', () => {
    const actual = nasaImagesReducer(initialState, setYearEnd(2000));
    expect(actual.search.yearEnd).toEqual(2000);
  });


  it('should refuse setYearEnd', () => {
    const actual = nasaImagesReducer(initialState, setYearEnd(1000));
    expect(actual.search.yearEnd).toEqual(initialState.search.yearEnd);
  });

});
