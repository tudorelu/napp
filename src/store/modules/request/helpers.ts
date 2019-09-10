import {RequestMeta} from './actions'
import {h32} from 'xxhashjs'

export const getRequestKey = (meta: RequestMeta) => {
  const {startActionType = '', extra = {}} = meta
  return h32(`${startActionType}:${JSON.stringify(extra)}`, 0xaaa).toString(16)
}
