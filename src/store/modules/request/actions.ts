import {Action} from 'redux'

export const REQUEST = 'REQUEST'
export const REQUEST_START = 'REQUEST_START'
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
export const REQUEST_ERROR = 'REQUEST_ERROR'
export const REQUEST_CANCEL = 'REQUEST_CANCEL'
export const REQUEST_RESET = 'REQUEST_RESET'

export interface RequestMeta<
  Extra extends Record<string, any> = Record<string, any>
> {
  startActionType: string
  successActionType?: string
  errorActionType?: string
  extra?: Extra
}

export interface RequestAction<M extends RequestMeta = RequestMeta>
  extends Action {
  type: typeof REQUEST
  meta: M
}
export function request<M extends RequestMeta>(meta: M): RequestAction<M> {
  return {
    type: REQUEST,
    meta,
  }
}

export interface RequestStartAction<M extends RequestMeta = RequestMeta>
  extends Action {
  type: typeof REQUEST_START
  meta: M
}
export function requestStart<M extends RequestMeta>(
  meta: M,
): RequestStartAction<M> {
  return {
    type: REQUEST_START,
    meta,
  }
}

export interface RequestSuccessAction<M extends RequestMeta = RequestMeta>
  extends Action {
  type: typeof REQUEST_SUCCESS
  payload?: any
  meta: M
}
export function requestSuccess<M extends RequestMeta>(
  meta: M,
  payload?: any,
): RequestSuccessAction<M> {
  return {
    type: REQUEST_SUCCESS,
    payload,
    meta,
  }
}

export interface RequestErrorAction<M extends RequestMeta = RequestMeta>
  extends Action {
  type: typeof REQUEST_ERROR
  payload: Error
  meta: M
}
export function requestError<M extends RequestMeta>(
  meta: M,
  payload: Error,
): RequestErrorAction<M> {
  return {
    type: REQUEST_ERROR,
    payload,
    meta,
  }
}

export interface RequestCancelAction<M extends RequestMeta = RequestMeta>
  extends Action {
  type: typeof REQUEST_CANCEL
  meta: M
}
export function requestCancel<M extends RequestMeta>(
  meta: M,
): RequestCancelAction<M> {
  return {
    type: REQUEST_CANCEL,
    meta,
  }
}

export interface RequestResetAction<M extends RequestMeta = RequestMeta>
  extends Action {
  type: typeof REQUEST_RESET
  meta: M
}
export function requestReset<M extends RequestMeta>(
  meta: M,
): RequestResetAction<M> {
  return {
    type: REQUEST_RESET,
    meta,
  }
}

export type RequestActions =
  | RequestAction
  | RequestStartAction
  | RequestSuccessAction
  | RequestErrorAction
  | RequestCancelAction
  | RequestResetAction
