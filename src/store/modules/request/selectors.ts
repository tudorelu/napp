import {getRequestKey} from './helpers'
import {RequestMeta} from './actions'

const namespace = 'requests'

export const getIsLoading = (state: any, meta: RequestMeta): boolean => {
  const key = getRequestKey(meta)
  return Boolean(state[namespace][key] && state[namespace][key]['loading'])
}

export const getIsError = (state: any, meta: RequestMeta): boolean => {
  const key = getRequestKey(meta)
  return Boolean(state[namespace][key] && state[namespace][key]['error'])
}

export const getError = (state: any, meta: RequestMeta): Error | undefined => {
  const key = getRequestKey(meta)
  return state[namespace][key] ? state[namespace][key]['error'] : undefined
}

export const getIsSuccess = (state: any, meta: RequestMeta): boolean => {
  const key = getRequestKey(meta)
  return Boolean(state[namespace][key] && state[namespace][key]['success'])
}

export const getRequestedAt = (
  state: any,
  meta: RequestMeta,
): number | undefined => {
  const key = getRequestKey(meta)
  return state[namespace][key]
    ? state[namespace][key]['requestedAt']
    : undefined
}

export const getReceivedAt = (
  state: any,
  meta: RequestMeta,
): number | undefined => {
  const key = getRequestKey(meta)
  return state[namespace][key] ? state[namespace][key]['receivedAt'] : undefined
}

export const getIsRequested = (state: any, meta: RequestMeta): boolean => {
  const key = getRequestKey(meta)
  return Boolean(state[namespace][key] && state[namespace][key])
}
