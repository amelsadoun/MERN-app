const initialState = {
  events: [],
  pagination: {
    currentPage: 1,
    totalPages: 1,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return {
        ...state,
        events: action.payload,
      };
    case "SET_PAGINATION":
      return {
        ...state,
        pagination: action.payload,
      };
    case "CREATE":
      return action.payload;
    case "UPDATE":
      return action.payload;
    case "DELETE":
      return action.payload;
    case "FETCH":
      return action.payload;
    default:
      return state;
  }
};
