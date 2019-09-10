import {put, all, takeLatest, call} from '@redux-saga/core/effects'
import {
  REQUEST_START,
  RequestStartAction,
  requestError,
  requestSuccess,
} from '../request/actions'
import {AUTH_START} from './actions'
import {AuthServiceI} from '../../../services/auth'

let _authService: AuthServiceI

function* handleSetAuth({meta}: RequestStartAction) {
  try {
    const res = yield call([_authService, 'auth'])

    if (res.success) {
      yield put(requestSuccess(meta))
    } else {
      throw new Error('Auth error')
    }
  } catch (err) {
    yield put(requestError(meta, err))
  }
}

export function* getAuthSaga(): any {
  yield takeLatest(
    (action: any) =>
      action.type === REQUEST_START &&
      action.meta.startActionType === AUTH_START,
    handleSetAuth,
  )
}

export function* authSaga() {
  yield all([getAuthSaga()])
}

export function createAuthSaga(authService: AuthServiceI): any {
  _authService = authService
  return authSaga()
}

export default createAuthSaga
