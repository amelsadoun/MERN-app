import { SET_FILTERS, SET_SEARCH_QUERY } from "../actions/filters";

const initialState = {
  searchQuery: "",
  filters: { field: [], type: [], tags: [], dateFrom: null, dateTo: null },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case SET_FILTERS:
      return { ...state, filters: action.payload };
    default:
      return state;
  }
};
