import * as api from "../api";

// Action for club sign up/registration
export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);
    dispatch({ type: "SIGNUP_SUCCESS", payload: data });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: "SIGNUP_FAIL", payload: err.response.data });
    return err.response.data.message;
  }
};

// Action for club login
export const login = (formData) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
  } catch (err) {
    // console.log(err.response.data);
    dispatch({ type: "LOGIN_FAIL", payload: err.response.data });
    return err.response.data.message;
  }
};

// Action for club logout
export const logout = () => (dispatch) => {
  localStorage.removeItem("club");
  dispatch({ type: "LOGOUT" });
};

// Action for updating club profile
export const updateProfile = (id, club) => async (dispatch) => {
  try {
    // console.log(id)
    const { data } = await api.updateProfile(id, club);
    dispatch({ type: "UPDATE_PROFILE", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

// Action for changing club password
export const changePassword = (id, passwords) => async (dispatch) => {
  try {
    const { data } = await api.changePassword(id, passwords);
    dispatch({ type: "CHANGE_PASSWORD_SUCCESS", payload: data });
  } catch (err) {
    console.log(err.response.data.message)
    dispatch({ type: "CHANGE_PASSWORD_FAIL", payload: err.response.data });
    return err.response.data.message;
  }
};
