import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MgmtService {
  ledger: [];
  balance: number;
  value: number;

  constructor() {
    this.balance = 0;
    this.value = Math.floor((Math.random() * 100) + 1);
    this.ledger = [];
  }

  generateId() {
    return Math.floor((Math.random() * 9999) + 1);
  }

  mine() {
    this.balance++;
    this.ledger.push({action: 'made', amount: 1, value: this.value , id: this.generateId()});
    if (this.value >= 1) { this.value--; }
  }

  purchase(n: number) {
    this.balance += n;
    this.ledger.push({action: 'bought', amount: n, value: this.value, id: this.generateId()});
    console.log(this.ledger);
    this.value += (n / this.value) * 10;
  }

  sell(n: number) {
    this.balance -= n;
    this.ledger.push({action: 'sold', amount: n, value: this.value, id: this.generateId()});
    console.log(this.ledger);
    if (this.value >= 1) { this.value -= (n / this.value) * 10; }
  }
}
