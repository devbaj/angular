import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authorArray: [];

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    let observable = this._httpService.all();
    observable.subscribe( res => {
      if (res[`success`] = true) {
        this.authorArray = res[`package`];
      } else {
        console.log( 'error', res[`error`] );
      }
    });
  }

  destroy(author) {
    let observable = this._httpService.delete(author._id);
    observable.subscribe(res => {
      if (res[`success`]) { this.ngOnInit() } else { console.log('error', res[`error`]); }
    });
  }

}
