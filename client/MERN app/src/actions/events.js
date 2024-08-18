import * as api from "../api";

//action creators
export const getEvents = (filters, searchQuery, page) => async (dispatch) => {
  try {
    const { data } = await api.fetchEvents(filters, searchQuery, page);
    dispatch({ type: "FETCH_ALL", payload: data.events });
    dispatch({ type: "SET_PAGINATION", payload: { currentPage: data.currentPage, totalPages: data.totalPages } });
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

//get single event
export const getEvent = (id) => async (dispatch) => {
  try {
    const { data } = await api.getEvent(id);
    dispatch({ type: "FETCH", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

//delete single event
export const deleteEvent = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteEvent(id);
    dispatch({ type: "DELETE", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

//edit event
export const updateEvent = (id, event) => async (dispatch) => {
  try {
    const { data } = await api.updateEvent(id, event);
    dispatch({ type: "UPDATE", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
