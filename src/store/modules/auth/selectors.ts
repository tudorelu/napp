import {getIsLoading, getIsSuccess, getError} from '../request/selectors'
import {AUTH_START} from './actions'

export const getAuthIsLoading = (state: any) => {
  return getIsLoading(state, {
    startActionType: AUTH_START,
  })
}

export const getAuthIsSuccess = (state: any) => {
  return getIsSuccess(state, {
    startActionType: AUTH_START,
  })
}

export const getAuthIsError = (state: any) => {
  return getError(state, {
    startActionType: AUTH_START,
  })
}
