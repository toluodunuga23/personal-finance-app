import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "./budget/budgetSlice";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage


//https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/

const rootReducer = combineReducers({
  initalState: budgetReducer,
});

const persistConfig = {
  key: "root",
  storage,
  // Optionally blacklist or whitelist specific reducers
  // blacklist: ['someReducer'],
  // whitelist: ['anotherReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
