import {all} from '@redux-saga/core/effects'
import {AccountServiceI} from '../../../../services/account'
import {createAccountSaga as newAccountSaga} from './create'
import {getBalanceSaga} from './balance'

export function* authSaga(accountService: AccountServiceI) {
  yield all([newAccountSaga(accountService), getBalanceSaga(accountService)])
}

export function createAccountSaga(accountService: AccountServiceI): any {
  return authSaga(accountService)
}

export default createAccountSaga
