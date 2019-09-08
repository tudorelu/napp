import {combineReducers} from 'redux'
import requests from './modules/request/reducer'
import error from './modules/error/reducer'
import entity from './modules/entity/reducer'

const rootReducer = combineReducers({
  requests,
  entity,
  error,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
