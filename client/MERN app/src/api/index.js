import axios from "axios";

const url = "http://localhost:5000/api/events";

//event posting
export const fetchEvents = () => axios.get(url);
export const createEvent = (newEvent) => axios.post(url, newEvent);

// auth
const auth_url = "http://localhost:5000/api/auth";
//authorization functions
export const login = (clubData) =>
  axios.post("http://localhost:5000/api/auth/login", clubData);
export const signup = (clubData) =>
  axios.post("http://localhost:5000/api/auth/signup", clubData);
