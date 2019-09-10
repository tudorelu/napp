import {put, call} from '@redux-saga/core/effects'
import {
  ACCOUNT_GET_BALANCE,
  AccountGetBalanceAction,
  getBalanceSuccess,
  getBalanceError,
  storeAccountBalanceEntity,
} from '../actions'
import {AccountServiceI} from '../../../../services/account'
import {AccountBalance} from '@nuls.io/account'
import {takeEveryCancellable} from '../../request/sagas'

function* handleAccountGetBalance(
  accountService: AccountServiceI,
  action: AccountGetBalanceAction,
) {
  try {
    const balance: AccountBalance = yield call(
      [accountService, 'getBalance'],
      action.meta.extra.address,
      action.meta.extra.chainId,
    )
    yield put(storeAccountBalanceEntity(action.meta.extra.address, balance))
    yield put(getBalanceSuccess(action, {balance}))
  } catch (err) {
    yield put(getBalanceError(action, err))
  }
}

export function* getBalanceSaga(accountService: AccountServiceI): any {
  yield takeEveryCancellable(
    ACCOUNT_GET_BALANCE,
    handleAccountGetBalance,
    accountService,
  )
  // yield takeEvery(
  //   (action: any) =>
  //     action.type === REQUEST_START &&
  //     action.meta.startActionType === ACCOUNT_GET_BALANCE,
  //   handleAccountGetBalance,
  //   accountService,
  // )
}
