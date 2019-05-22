import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  title: string;
  price: string;
  imageURL: string
  id: string;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe( params => {
      this.id = params.id;
      let observable = this._httpService.readOne(this.id);
      observable.subscribe( res => {
        if (res[`success`]) {
          this.title = res[`payload`][`title`];
          this.price = res[`payload`][`price`];
          this.imageURL = res[`payload`][`imageURL`];
        } else { console.log('error', res[`error`]); }
      } );
    });
  }

  update() {
    let observable = this._httpService.update(this.id, {title: this.title, price: parseFloat(this.price), imageURL: this.imageURL} );
    observable.subscribe(res => {
      if (res[`success`]) { this.ngOnInit } else { console.log('error', res[`error`]); }
    });
  }

}
