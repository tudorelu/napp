import {Action} from 'redux'

export const ERROR_MESSAGE = 'ERROR_MESSAGE'

export type ErrorActionPayload = Error
export interface ErrorAction extends Action {
  type: typeof ERROR_MESSAGE
  payload: ErrorActionPayload
}
export function errorMessage(payload: ErrorActionPayload): ErrorAction {
  return {
    type: ERROR_MESSAGE,
    payload,
  }
}
