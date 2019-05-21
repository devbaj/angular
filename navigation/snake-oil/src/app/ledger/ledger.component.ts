import { Component, OnInit } from '@angular/core';
import { MgmtService } from '../mgmt.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  ledger: [];
  detailsView: boolean;
  oneEntry: any;

  constructor(
    private _mgmtService: MgmtService
  ) { }

  ngOnInit() {
    this.ledger = this._mgmtService.ledger;
  }

  details(id: number) {
    this.detailsView = true;
    for (let entry of this.ledger) {
      if (entry.id ===  id) {
        this.oneEntry = entry;
      }
    }
  }
}
