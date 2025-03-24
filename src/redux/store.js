import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { contcatsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";


const persistConfig = {
    key: 'contacts',
    storage,
};

const persistedReducer = persistReducer(persistConfig, contcatsReducer)

export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filter: filterReducer,    
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);


