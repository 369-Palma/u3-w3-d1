import { configureStore, combineReducers } from "@reduxjs/toolkit";
/* import mainReducer from '../reducers' */
import favouritesReducer from "../reducers/favsReducer";
import dataReducer from "../reducers/data";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY,
    }),
  ],
};

const mainReducer = combineReducers({
  favs: favouritesReducer,
  data: dataReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
