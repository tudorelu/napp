import {request, requestSuccess, requestError} from '../request/actions'

export const AUTH = 'AUTH'

export function authStart() {
  return request({
    startActionType: AUTH,
  })
}
export type AuthStartAction = ReturnType<typeof authStart>

export function authSuccess(action: AuthStartAction, payload?: any) {
  return requestSuccess(action.meta, payload)
}
export type AuthSuccessAction = ReturnType<typeof authSuccess>

export function authError(action: AuthStartAction, payload: Error) {
  return requestError(action.meta, payload)
}
export type AuthErrorAction = ReturnType<typeof authError>

export type AuthActions = AuthStartAction | AuthSuccessAction | AuthErrorAction
