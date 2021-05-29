import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSliceReducer from '../redux/auth'
import thunk from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
}


const reducer = combineReducers({
    auth: authSliceReducer,
})


const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)

export default store
