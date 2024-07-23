import * as api from "../api";

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
