import {combineReducers} from 'redux'
import requests from './modules/request/reducer'
import error from './modules/error/reducer'

const rootReducer = combineReducers({
  requests,
  error,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
