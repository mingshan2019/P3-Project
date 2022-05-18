import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { CollapsedReducer } from './reducers/CollapsedReducer'

import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// import { LoadingReducer } from './reducers/LoadingReducer'

const persistConfig = {
    key: 'Neo',
    storage,
    // blacklist: ['LoadingReducer']
  }
  
const reducer = combineReducers({
    CollapsedReducer,
    // LoadingReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

const persistor = persistStore(store)

export {
    store,
    persistor}