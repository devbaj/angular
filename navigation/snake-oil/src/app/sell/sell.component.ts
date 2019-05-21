import { Component, OnInit } from '@angular/core';
import { MgmtService } from '../mgmt.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  balance: number;
  positive: boolean;
  value: number;
  sellAmount: string;
  possible: boolean;

  constructor(
    private _mgmtService: MgmtService
  ) {
    this.value = this._mgmtService.value;
    this.possible = true;
  }

  ngOnInit() {
    this.balance = this._mgmtService.balance;
    if (this.balance <= 0) {
      this.positive = false;
    } else {
      this.positive = true;
    }
    this.details = false;
  }

  sell() {
    var number = parseInt(this.sellAmount, 10);
    if (number > this.balance) {
      this.possible = false;
    } else {
      this._mgmtService.sell(number);
      this.balance = this._mgmtService.balance;
    }
    this.value = this._mgmtService.value;
  }


}
