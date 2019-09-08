import {ChainId} from '@nuls.io/core'
import {request, requestSuccess, requestError} from '../../request/actions'
import {Account} from '@nuls.io/account'
import {mergeEntity} from '../../entity/actions'
import {ACCOUNT_DOMAIN} from '.'
import {AccountInfo} from '../../../../model/account'

export const ACCOUNT_CREATE = 'ACCOUNT_CREATE'

// ACCOUNT_CREATE
interface AccountCreateExtra {
  chainId: ChainId
}
export function createAccount(extra: AccountCreateExtra) {
  return request({
    startActionType: ACCOUNT_CREATE,
    extra,
  })
}
export type AccountCreateAction = ReturnType<typeof createAccount>

// ACCOUNT_CREATE_SUCCESS
export function createAccountSuccess(
  action: AccountCreateAction,
  payload: {account: Account},
) {
  return requestSuccess(action.meta, payload)
}
export type AccountCreateSuccessAction = ReturnType<typeof createAccountSuccess>

// ACCOUNT_CREATE_ERROR
export function createAccountError(
  action: AccountCreateAction,
  payload: Error,
) {
  return requestError(action.meta, payload)
}
export type AccountCreateErrorAction = ReturnType<typeof createAccountError>

// ACCOUNT_CREATE_STORE
export function storeAccountEntity(account: AccountInfo) {
  return mergeEntity(ACCOUNT_DOMAIN, {
    [account.address]: account,
  })
}
export type AccountStoreEntityAction = ReturnType<typeof storeAccountEntity>

export type AccountCreateActions =
  | AccountCreateAction
  | AccountCreateSuccessAction
  | AccountCreateErrorAction
  | AccountStoreEntityAction
