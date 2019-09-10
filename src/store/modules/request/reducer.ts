import {
  RequestActions,
  REQUEST_START,
  REQUEST_SUCCESS,
  REQUEST_ERROR,
  REQUEST_CANCEL,
  REQUEST_RESET,
} from './actions'
import {getRequestKey} from './helpers'

export interface RequestState {
  [key: string]: {
    loading: boolean
    requestedAt?: number
    receivedAt?: number
    error?: Error
    success: boolean
  }
}

const requestInitialState = {}

const requestReducer = (
  state: RequestState = requestInitialState,
  action: RequestActions,
) => {
  switch (action.type) {
    case REQUEST_START: {
      const key = getRequestKey(action.meta)
      return {
        ...state,
        [key]: {
          loading: true,
          requestedAt: new Date().getTime(),
        },
      }
    }
    case REQUEST_SUCCESS: {
      const key = getRequestKey(action.meta)
      return {
        ...state,
        [key]: {
          ...state[key],
          receivedAt: new Date().getTime(),
          loading: false,
          error: undefined,
          success: true,
        },
      }
    }
    case REQUEST_ERROR: {
      const key = getRequestKey(action.meta)
      return {
        ...state,
        [key]: {
          ...state[key],
          receivedAt: new Date().getTime(),
          loading: false,
          error: action.payload,
          success: false,
        },
      }
    }
    case REQUEST_CANCEL: {
      const key = getRequestKey(action.meta)
      return {
        ...state,
        [key]: {
          ...state[key],
          loading: false,
        },
      }
    }
    case REQUEST_RESET:
      const key = getRequestKey(action.meta)
      const newState = {
        ...state,
      }
      delete newState[key]
      return newState
    default:
      return state
  }
}

export default requestReducer
