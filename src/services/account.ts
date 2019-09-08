import {Account, AccountBalance} from '@nuls.io/account'
import {ChainId} from '@nuls.io/core'

export interface AccountServiceI {
  create(chainId: ChainId): Account
  getBalance(address: string, chainId?: ChainId): Promise<AccountBalance>
}

export class AccountService implements AccountServiceI {
  create(chainId: ChainId): Account {
    return Account.create(chainId)
  }
  async getBalance(
    address: string,
    chainId?: ChainId,
  ): Promise<AccountBalance> {
    await new Promise((resolve: any) => setTimeout(resolve, 1000 * 5))
    return Account.getBalance(address, chainId)
  }
}

export default new AccountService()
