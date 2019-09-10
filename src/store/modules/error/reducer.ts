import * as ActionTypes from './actions'
import {ErrorAction} from './actions'
import {Action} from 'redux'

const errorActionRegexp = new RegExp('^ERROR_|_ERROR$')

const error = (state: Error | null = null, action: Action | ErrorAction) => {
  const {type} = action
  const payload = (action as any).payload

  if (!errorActionRegexp.test(type) && type !== ActionTypes.ERROR_MESSAGE) {
    return null
  } else if (payload) {
    return payload instanceof Error
      ? payload
      : new Error(payload.error ? payload.error : 'There was an error')
  }

  return state
}

export default error
