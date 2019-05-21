import { Component, OnInit } from '@angular/core';
import { MgmtService } from '../mgmt.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  value: number;
  balance: number;
  amount: string;

  constructor(
    private _mgmtService: MgmtService
  ) {
    this.value = this._mgmtService.value;
  }

  ngOnInit() {
    this.balance = this._mgmtService.balance;
  }

  purchase() {
    var number = parseInt(this.amount);
    this._mgmtService.purchase(number);
    this.value = this._mgmtService.value;
  }

}
