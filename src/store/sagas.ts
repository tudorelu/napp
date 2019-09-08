import {all} from '@redux-saga/core/effects'
import createAuthSaga from './modules/auth/sagas'
import biometricAuthService from '../services/auth'
import accountService from '../services/account'

import createAccountSaga from './modules/account/sagas'

export default function* rootSaga() {
  yield all([
    createAuthSaga(biometricAuthService),
    createAccountSaga(accountService),
  ])
}
