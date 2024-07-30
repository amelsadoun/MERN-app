import * as api from "../api"

//get single club info 
export const getClub = (id) => async (dispatch) => {
    try {
      const { data } = await api.getClub(id);
      // console.log(data)
      dispatch({ type: "GET_CLUB", payload: data });
    } catch (err) {
      console.error(err.message);
    }
  };