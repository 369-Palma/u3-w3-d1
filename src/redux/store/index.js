import { configureStore, combineReducers } from "@reduxjs/toolkit";
/* import mainReducer from '../reducers' */
import favouritesReducer from "../reducers/favsReducer";
import dataReducer from "../reducers/dataReducer";

const mainReducer = combineReducers({
  favs: favouritesReducer,
  dataFetch: dataReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
