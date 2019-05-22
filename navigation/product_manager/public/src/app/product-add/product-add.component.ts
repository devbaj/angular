import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  title: string;
  price: string;
  priceNum: number;
  imageURL: string;
  added: boolean;
  addedProduct: any;

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.added = false;
  }

  create() {
    var product = {title: this.title, price: parseFloat(this.price), imageURL: this.imageURL};
    let observable = this._httpService.create(product);
    observable.subscribe( res => {
      if (res[`success`]) { this.addedProduct = res[`package`] } else { console.log('error', res[`err`]); }
    });
  }
}
