import {AccountInfo as AccInfo, AccountBalance} from '@nuls.io/account'

export type AccountInfo = Omit<AccInfo, 'privateKey' | 'publicKey'>

export type AccountBalance = AccountBalance

export interface AccountInfoWithBalance extends AccountInfo {
  balance?: AccountBalance
}
