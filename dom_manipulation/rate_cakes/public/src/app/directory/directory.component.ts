import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  cakes: [];
  cake = {
    rating: null,
    comment: null
  };
  @Output() cakeEmitter = new EventEmitter();

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    let observable = this._httpService.all();
    observable.subscribe(data => {
      this.cakes = data[`data`];
      console.log(this.cakes);
    });
  }

  rate(cake: any) {
    console.log( 'submit rating', cake)
    let observable = this._httpService.rate(cake);
    observable.subscribe();
  }

  cakeDetails(event: any, cake: any) {
    this.cakeEmitter.emit({event, cake});
  }
}
