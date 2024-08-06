const initialState = {
  club: JSON.parse(localStorage.getItem('club')) || null, // is this dumb?
  isAuthenticated: !!localStorage.getItem('club'), // Set based on presence of club data, apparently !! booleans everything
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "SIGNUP_SUCCESS":
      localStorage.setItem('club', JSON.stringify(payload.club)); // Save club info
    case "LOGIN_SUCCESS":
      // console.log(payload.club)
      localStorage.setItem('club', JSON.stringify(payload.club)); // Save club info
      return {
        ...state,
        club: payload.club,
        isAuthenticated: true,
      };
    case "SIGNUP_FAIL":
    case "LOGIN_FAIL":
      return {
        ...state,
        club: null,
        isAuthenticated: false,
      };

    case "UPDATE_PROFILE":
      localStorage.setItem('club', JSON.stringify(payload.club)); // Save club info
      return {
        ...state,
        club: payload.club,
        isAuthenticated: true,
      };
    case "CHANGE_PASSWORD_SUCCESS":
      return {
        ...state,
        // club: payload.club, // Optionally update club info if it was included in the payload
        isAuthenticated: true,
      };
    case "CHANGE_PASSWORD_FAIL":
      return {
        ...state,
        // club: payload.club, // Optionally update club info if it was included in the payload
        isAuthenticated: true,
      };
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
