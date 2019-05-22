import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productArray: [];
  deletedProduct: any;

  constructor(
    private _httpService: HttpService
  ) {
    this.productArray = [];
  }

  ngOnInit() {
    let observable = this._httpService.readAll()
    observable.subscribe( res => {
      if (res[`success`]) { this.productArray = res[`payload`]; } else { console.log('error', res[`error`]); }
    });
  }

  destroy(id: string) {
    let observable = this._httpService.delete(id);
    observable.subscribe( res => {
      if (res[`success`]) { this.deletedProduct = res[`payload`]; } else { console.log('error', res[`error`]); }
    });
    this.ngOnInit();
  }

}
