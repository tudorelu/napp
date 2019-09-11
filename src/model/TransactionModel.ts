export class TransactionModel {
  hash = ''
  block = 0
  date: Date = new Date()

  from = ''
  to = ''
  type = ''

  value = 0
  fee = 0.01
}
