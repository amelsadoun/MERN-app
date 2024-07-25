const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  club: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "SIGNUP_SUCCESS":
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
        club: payload.club,
      };
    case "SIGNUP_FAIL":
    case "LOGIN_FAIL":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        club: null,
      };
    default:
      return state;
  }
}
