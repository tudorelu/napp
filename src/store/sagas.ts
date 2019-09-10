import {all} from '@redux-saga/core/effects'
import createAuthSaga from './modules/auth/sagas'
import biometricAuthService from '../services/auth'

export default function* rootSaga() {
  yield all([createAuthSaga(biometricAuthService)])
}
