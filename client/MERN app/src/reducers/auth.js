const initialState = {
  club: JSON.parse(localStorage.getItem('club')) || null, // is this dumb?
  isAuthenticated: !!localStorage.getItem('club'), // Set based on presence of club data, apparently !! booleans everything 
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "SIGNUP_SUCCESS":
    case "LOGIN_SUCCESS":
      localStorage.setItem('club', JSON.stringify(payload.club)); // Save club info
      return {
        ...state,
        club: payload.club,
        isAuthenticated: true,
      };
    case "SIGNUP_FAIL":
    case "LOGIN_FAIL":
    case "LOGOUT":
      localStorage.removeItem('club'); // Remove club info
      return {
        ...state,
        club: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
