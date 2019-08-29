import {RequestMeta} from './actions'

export const getRequestKey = (meta: RequestMeta) => {
  const {startActionType = '', extra = {}} = meta
  const _hash = JSON.stringify(extra)
  return `${startActionType}:${_hash}`
}
