import {getIsLoading, getIsSuccess, getError} from '../request/selectors'
import {AUTH} from './actions'

export const getAuthIsLoading = (state: any) => {
  return getIsLoading(state, {
    startActionType: AUTH,
  })
}

export const getAuthIsSuccess = (state: any) => {
  return getIsSuccess(state, {
    startActionType: AUTH,
  })
}

export const getAuthIsError = (state: any) => {
  return getError(state, {
    startActionType: AUTH,
  })
}
