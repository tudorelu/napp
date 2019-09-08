import {
  race,
  call,
  take,
  takeEvery,
  select,
  put,
} from '@redux-saga/core/effects'
import {
  REQUEST_CANCEL,
  REQUEST_RESET,
  RequestActions,
  REQUEST,
  requestStart,
  REQUEST_START,
} from './actions'
import {getRequestKey} from './helpers'
import {getIsLoading} from './selectors'

export function* handleStartSaga(requestAction: RequestActions) {
  const loading = yield select(getIsLoading, requestAction.meta)

  if (!loading) {
    yield put(requestStart(requestAction.meta))
  }
}

export function* raceSaga(
  handler: any,
  args: any[],
  startAction: RequestActions,
) {
  yield race({
    task: call(handler, ...args, startAction),
    cancel: take(
      (action: any): boolean =>
        (action.type === REQUEST_CANCEL || action.type === REQUEST_RESET) &&
        getRequestKey(action.meta) === getRequestKey(startAction.meta),
    ),
  })
}

export function* takeEveryCancellable(
  START_ACTION_TYPE: string,
  handler: any,
  ...args: any[]
) {
  // Handle REQUEST actions and decide if it should start or not
  yield takeEvery(
    (action: any) =>
      action.type === REQUEST &&
      action.meta.startActionType === START_ACTION_TYPE,
    handleStartSaga,
  )

  // Handle REQUEST_START actions and init a race vs REQUEST_CLEAR & REQUEST_RESET
  yield takeEvery(
    (action: any) =>
      action.type === REQUEST_START &&
      action.meta.startActionType === START_ACTION_TYPE,
    raceSaga,
    handler,
    args,
  )
}
