export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const SET_FILTERS = "SET_FILTERS";

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters,
});
