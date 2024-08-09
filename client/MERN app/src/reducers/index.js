import { combineReducers } from "redux";
import events from "./events";
import auth from "./auth"
import clubs from "./clubs"
import filters from "./filters"

export default combineReducers({events, auth, clubs, filters})