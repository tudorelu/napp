import {
  request,
  requestSuccess,
  requestError,
  requestReset,
} from '../../request/actions'
import {mergeEntity} from '../../entity/actions'
import {ACCOUNT_BALANCE_DOMAIN} from '.'
import {AccountBalance} from '../../../../model/account'
import {ChainId} from '@nuls.io/core'

export const ACCOUNT_GET_BALANCE = 'ACCOUNT_GET_BALANCE'

// ACCOUNT_GET_BALANCE
interface AccountGetBalanceExtra {
  address: string
  chainId?: ChainId
}
export function getBalance(extra: AccountGetBalanceExtra) {
  return request({
    startActionType: ACCOUNT_GET_BALANCE,
    extra,
  })
}
export type AccountGetBalanceAction = ReturnType<typeof getBalance>

// ACCOUNT_GET_BALANCE_SUCCESS
export function getBalanceSuccess(
  action: AccountGetBalanceAction,
  payload: {balance: AccountBalance},
) {
  return requestSuccess(action.meta, payload)
}
export type AccountGetBalanceSuccessAction = ReturnType<
  typeof getBalanceSuccess
>

// ACCOUNT_GET_BALANCE_ERROR
export function getBalanceError(
  action: AccountGetBalanceAction,
  payload: Error,
) {
  return requestError(action.meta, payload)
}
export type AccountGetBalanceErrorAction = ReturnType<typeof getBalanceError>

// ACCOUNT_GET_BALANCE_RESET
export function getBalanceReset(extra: AccountGetBalanceExtra) {
  return requestReset({
    startActionType: ACCOUNT_GET_BALANCE,
    extra,
  })
}
export type AccountGetBalanceResetAction = ReturnType<typeof getBalanceReset>

// ACCOUNT_GET_BALANCE_STORE
export function storeAccountBalanceEntity(
  address: string,
  balance: AccountBalance,
) {
  return mergeEntity(ACCOUNT_BALANCE_DOMAIN, {
    [address]: balance,
  })
}
export type AccountStoreBalanceEntityAction = ReturnType<
  typeof storeAccountBalanceEntity
>

export type AccountGetBalanceActions =
  | AccountGetBalanceAction
  | AccountGetBalanceSuccessAction
  | AccountGetBalanceErrorAction
  | AccountGetBalanceResetAction
  | AccountStoreBalanceEntityAction
