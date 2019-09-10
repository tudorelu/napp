import {put, all, call} from '@redux-saga/core/effects'
import {AUTH, authSuccess, AuthStartAction, authError} from './actions'
import {AuthServiceI} from '../../../services/auth'
import {takeEveryCancellable} from '../request/sagas'

function* handleSetAuth(authService: AuthServiceI, action: AuthStartAction) {
  try {
    const res = yield call([authService, 'auth'])

    if (res.success) {
      yield put(authSuccess(action))
    } else {
      throw new Error('Auth error')
    }
  } catch (err) {
    yield put(authError(action, err))
  }
}

export function* getAuthSaga(authService: AuthServiceI): any {
  yield takeEveryCancellable(AUTH, handleSetAuth, authService)
}

export function* authSaga(authService: AuthServiceI) {
  yield all([getAuthSaga(authService)])
}

export function createAuthSaga(authService: AuthServiceI): any {
  return authSaga(authService)
}

export default createAuthSaga
