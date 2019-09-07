import {Account} from '@nuls.io/account'

export class AccountService {
  create() {
    return Account.create()
  }
}

export default new AccountService()
