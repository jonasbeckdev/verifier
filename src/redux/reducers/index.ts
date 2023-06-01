import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'

import userReducer from './user'

const userPersistConfig = {
    key: 'userReducer',
    storage: AsyncStorage,
    blacklist: [
    ]
}

const rootReducer = combineReducers({
    userReducer: persistReducer(userPersistConfig, userReducer)
})
export default rootReducer
export type IRootState = ReturnType<typeof rootReducer>