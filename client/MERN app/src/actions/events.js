import * as api from "../api";

//action creators
export const getEvents = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEvents();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (e) {
    console.log(e.message);
  }
};

export const createEvent = (event) => async (dispatch) => {
  try {
    const { data } = await api.createEvent(event);
    dispatch({ type: "CREATE", payload: data });
  } catch (e) {
    console.log(e.message);
  }
};

export const getEvent = (id) => async (dispatch) => {
  try {
    const { data } = await api.getEvent(id);
    dispatch({ type: "FETCH", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
