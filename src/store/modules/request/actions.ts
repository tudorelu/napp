import {Action} from 'redux'

export const REQUEST_START = 'REQUEST_START'
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
export const REQUEST_ERROR = 'REQUEST_ERROR'
export const REQUEST_CANCEL = 'REQUEST_CANCEL'
export const REQUEST_RESET = 'REQUEST_RESET'

export interface RequestAction extends Action {
  type:
    | typeof REQUEST_START
    | typeof REQUEST_SUCCESS
    | typeof REQUEST_ERROR
    | typeof REQUEST_CANCEL
    | typeof REQUEST_RESET
  meta: RequestMeta
}

export interface RequestMeta<
  Extra extends Record<string, any> = Record<string, any>
> {
  startActionType: string
  successActionType?: string
  errorActionType?: string
  extra?: Extra
}

export interface RequestStartAction extends Action {
  type: typeof REQUEST_START
  meta: RequestMeta
}
export function requestStart(meta: RequestMeta): RequestStartAction {
  return {
    type: REQUEST_START,
    meta,
  }
}

export interface RequestSuccessAction extends Action {
  type: typeof REQUEST_SUCCESS
  payload?: any
  meta: RequestMeta
}
export function requestSuccess(
  meta: RequestMeta,
  payload?: any,
): RequestSuccessAction {
  return {
    type: REQUEST_SUCCESS,
    payload,
    meta,
  }
}

export interface RequestErrorAction extends Action {
  type: typeof REQUEST_ERROR
  payload: Error
  meta: RequestMeta
}
export function requestError(
  meta: RequestMeta,
  payload: Error,
): RequestErrorAction {
  return {
    type: REQUEST_ERROR,
    payload,
    meta,
  }
}

export interface RequestCancelAction extends Action {
  type: typeof REQUEST_CANCEL
  meta: RequestMeta
}
export function requestCancel(meta: RequestMeta): RequestCancelAction {
  return {
    type: REQUEST_CANCEL,
    meta,
  }
}

export interface RequestResetAction extends Action {
  type: typeof REQUEST_RESET
  meta: RequestMeta
}
export function requestReset(meta: RequestMeta): RequestResetAction {
  return {
    type: REQUEST_RESET,
    meta,
  }
}

export type RequestActions =
  | RequestStartAction
  | RequestSuccessAction
  | RequestErrorAction
  | RequestCancelAction
  | RequestResetAction
