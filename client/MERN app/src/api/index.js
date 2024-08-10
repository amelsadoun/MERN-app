import axios from "axios";

const port = import.meta.env.PORT || 5000;
const events_url = `http://localhost:${port}/api/events`;

//event posting and getting (?)
export const fetchEvents = () => axios.get(events_url);
export const createEvent = (newEvent) => axios.post(events_url, newEvent);
export const getEvent = (id) => axios.get(`${events_url}/${id}`);
export const deleteEvent = (id) => axios.delete(`${events_url}/${id}`);
export const updateEvent = (id, event) => axios.put(`${events_url}/${id}`, event);

// auth
// WHY IS IT THAT WHEN I PUT THE CONST IT DOESNT WOOORK
const auth_url = `http://localhost:${port}/api/auth`;

//authorization functions
export const login = (clubData) => axios.post(`${auth_url}/login`, clubData);
export const signup = (clubData) => axios.post(`${auth_url}/signup`, clubData);
export const updateProfile = (id, club) => axios.put(`${auth_url}/edit/${id}`, club);
export const changePassword = (id, passwords) => axios.put(`${auth_url}/changePassword/${id}`, passwords);

const clubs_url = `http://localhost:${port}/api/clubs`;

//getting club info for profile
export const getClub = (id) => axios.get(`${clubs_url}/${id}`);
