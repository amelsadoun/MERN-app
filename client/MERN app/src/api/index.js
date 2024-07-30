import axios from "axios";

const events_url = "http://localhost:5000/api/events";

//event posting and getting (?)
export const fetchEvents = () => axios.get(events_url);
export const createEvent = (newEvent) => axios.post(events_url, newEvent);
export const getEvent = (id) => axios.get(`${events_url}/${id}`);

// auth
// WHY IS IT THAT WHEN I PUT THE CONST IT DOESNT WOOORK
const auth_url = "http://localhost:5000/api/auth";

//authorization functions
export const login = (clubData) => axios.post(`${auth_url}/login`, clubData);

export const signup = (clubData) => axios.post(`${auth_url}/signup`, clubData);

const clubs_url = "http://localhost:5000/api/clubs";

//getting club info for profile
export const getClub = (id) => axios.get(`${clubs_url}/${id}`);
