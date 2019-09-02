export class TransactionModel {

  hash: string = "";
  block: number = 0;
  date: Date = new Date();
  
  from: string = "";
  to: string = "";
  type: string = "";

  value: number = 0;
  fee: number = 0.01;

}        