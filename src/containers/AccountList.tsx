import React from 'react'
import {Text, Button, FlatList, View} from 'react-native'
import withAccounts from '../hocs/withAccounts'
import {AccountInfoWithBalance} from '../model/account'
import {ChainId} from '@nuls.io/core'

interface Props {
  accounts: any
  createAccount: any
  getBalanceReset: any
}

const _keyExtractor = (item: AccountInfoWithBalance, index: number) =>
  item.address

const AccountListTest: React.FC<Props> = ({
  accounts,
  createAccount,
  getBalanceReset,
}: Props) => {
  return (
    <>
      <Text>Accounts:</Text>
      <FlatList
        data={accounts}
        keyExtractor={_keyExtractor}
        renderItem={({item, index, separators}: any) => {
          const accountInfo: AccountInfoWithBalance = item
          return (
            <View>
              <Text>{accountInfo.address}</Text>
              {accountInfo.balance ? (
                <Text>{accountInfo.balance.balance}</Text>
              ) : (
                <Text>loading...</Text>
              )}
            </View>
          )
        }}
      />
      <Button
        title="Create acccounts"
        onPress={() => createAccount(ChainId.Testnet)}>
        Create account
      </Button>
      <Button title="Reset" onPress={() => getBalanceReset()}>
        Reset
      </Button>
    </>
  )
}

export default withAccounts(AccountListTest, true)
