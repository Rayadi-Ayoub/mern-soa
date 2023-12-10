import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({ user: userReducer });

const presistConfig = {
  key: "root",
  storage,
  version: 1,
};
const presistedReducer = persistReducer(presistConfig, rootReducer);

export const store = configureStore({
  reducer: presistedReducer,
  middleware: (buildGetDefaultMiddleware) =>
    buildGetDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
