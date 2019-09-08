import {put, call} from '@redux-saga/core/effects'
import {
  ACCOUNT_CREATE,
  createAccountSuccess,
  createAccountError,
  storeAccountEntity,
  AccountCreateAction,
} from '../actions'
import {AccountServiceI} from '../../../../services/account'
import {Account} from '@nuls.io/account'
import {takeEveryCancellable} from '../../request/sagas'

function* handleAccountCreate(
  accountService: AccountServiceI,
  action: AccountCreateAction,
) {
  try {
    const account: Account = yield call(
      [accountService, 'create'],
      action.meta.extra.chainId,
    )
    const accountInfo = account.toObject()
    yield put(storeAccountEntity(accountInfo))
    yield put(createAccountSuccess(action, {account}))
  } catch (err) {
    yield put(createAccountError(action, err))
  }
}

export function* createAccountSaga(accountService: AccountServiceI): any {
  yield takeEveryCancellable(
    ACCOUNT_CREATE,
    handleAccountCreate,
    accountService,
  )
}
