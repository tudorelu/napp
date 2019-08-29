import {
  requestStart,
  requestSuccess,
  RequestSuccessAction,
  RequestStartAction,
  RequestErrorAction,
  requestError,
} from '../request/actions'

export const AUTH_START = 'AUTH_START'

export function authStart(): RequestStartAction {
  return requestStart({
    startActionType: AUTH_START,
  })
}
export type AuthStartAction = ReturnType<typeof authStart>

export function authSuccess(payload: any): RequestSuccessAction {
  return requestSuccess(
    {
      startActionType: AUTH_START,
    },
    payload,
  )
}
export type AuthSuccessAction = ReturnType<typeof authSuccess>

export function authError(payload: Error): RequestErrorAction {
  return requestError(
    {
      startActionType: AUTH_START,
    },
    payload,
  )
}
export type AuthErrorAction = ReturnType<typeof authError>

export type AuthActions = AuthStartAction | AuthSuccessAction | AuthErrorAction
