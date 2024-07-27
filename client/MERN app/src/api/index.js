import axios from "axios";

const url = "http://localhost:5000/api/events";

//event posting and getting (?)
export const fetchEvents = () => axios.get(url);
export const createEvent = (newEvent) => axios.post(url, newEvent);
export const getEvent = (id) =>
  axios.get(`http://localhost:5000/api/events/${id}`);

// auth
// WHY IS IT THAT WHEN I PUT THE CONST IT DOESNT WOOORK
const auth_url = "http://localhost:5000/api/auth";

//authorization functions
export const login = (clubData) =>
  axios.post(`${auth_url}/login`, clubData);

export const signup = (clubData) =>
  axios.post(`${auth_url}/signup`, clubData);

//getting club info for profile
export const getClub = (id) =>
  axios.get(`${auth_url}/${id}`);
