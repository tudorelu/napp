import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {
  getAccounts,
  getAccountsWithBalance,
} from '../store/modules/account/selectors'
import {
  createAccount,
  getBalance,
  getBalanceReset,
} from '../store/modules/account/actions'
import {ChainId} from '@nuls.io/core'
import {ReactComponentLike} from 'prop-types'
import {AccountInfoWithBalance} from '../model/account'

const mapStateToProps = (state: any) => ({
  accounts: getAccounts(state),
  accountsWithBalance: getAccountsWithBalance(state),
})

const mapDispatchToProps = (dispatch: any) => ({
  createAccount: (chainId: ChainId) => dispatch(createAccount({chainId})),
  getBalanceReset: (address: string, chainId?: ChainId) =>
    dispatch(getBalanceReset({address, chainId})),
  getBalance: (address: string, chainId?: ChainId) =>
    dispatch(getBalance({address, chainId})),
})

type InnerProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

type Props = InnerProps

const withAccountsEnhancer = (
  Component: ReactComponentLike,
  withBalance: boolean,
) => {
  const AccountListTest: React.FC<Props> = ({
    accounts,
    accountsWithBalance,
    createAccount,
    getBalance,
    getBalanceReset,
    ...rest
  }: Props) => {
    if (withBalance) {
      // Cancel all pending requests on component destroy
      useEffect(() => {
        return () => {
          accounts.forEach((account: AccountInfoWithBalance) => {
            !account.balance &&
              getBalanceReset(account.address, account.chainId)
          })
        }
      }, [])

      // Fetch all account balances component update
      useEffect(() => {
        accounts.forEach((account: AccountInfoWithBalance) => {
          !account.balance && getBalance(account.address, account.chainId)
        })
      }, [accounts])
    }

    const props = {
      accounts: accountsWithBalance,
      createAccount,
      getBalanceReset: () => {
        accounts.forEach((account: AccountInfoWithBalance) => {
          !account.balance && getBalanceReset(account.address, account.chainId)
        })
      },
    }

    return <Component {...props} {...rest} />
  }

  return AccountListTest
}

const withAccounts = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withAccountsEnhancer,
)

export default withAccounts
