import {getIsLoading, getIsSuccess, getError} from '../request/selectors'
import {
  ACCOUNT_GET_BALANCE,
  ACCOUNT_BALANCE_DOMAIN,
  ACCOUNT_DOMAIN,
} from './actions'
import {getEntities} from '../entity/selectors'
import {createSelector} from 'reselect'
import {
  AccountInfo,
  AccountBalance,
  AccountInfoWithBalance,
} from '../../../model/account'

export const getAccountBalances = (
  state: any,
): Record<string, AccountBalance> => {
  return getEntities(state, ACCOUNT_BALANCE_DOMAIN)
}

export const getAccountBalanceIsLoading = (state: any) => {
  return getIsLoading(state, {
    startActionType: ACCOUNT_GET_BALANCE,
  })
}

export const getAccountBalanceIsSuccess = (state: any) => {
  return getIsSuccess(state, {
    startActionType: ACCOUNT_GET_BALANCE,
  })
}

export const getAccountBalanceIsError = (state: any) => {
  return getError(state, {
    startActionType: ACCOUNT_GET_BALANCE,
  })
}

export const getAccountEntities = (state: any): Record<string, AccountInfo> => {
  return getEntities(state, ACCOUNT_DOMAIN)
}

export const getAccounts = createSelector(
  [getAccountEntities],
  (entities: Record<string, AccountInfo>): AccountInfo[] =>
    Object.keys(entities).map(k => entities[k]),
)

export const getAccountsWithBalance = createSelector(
  [getAccounts, getAccountBalances],
  (
    accounts: AccountInfo[],
    balances: Record<string, AccountBalance>,
  ): AccountInfoWithBalance[] =>
    accounts.map((account: any) => {
      account.balance = balances[account.address]
      return account
    }),
)
