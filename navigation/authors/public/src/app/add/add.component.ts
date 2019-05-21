import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  author: string;
  addedAuthor: any;

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
  }

  add() {
    let observable = this._httpService.add(this.author);
    observable.subscribe( res => {
      if (res[`success`]) {
        this.addedAuthor = res[`package`];
      } else {
        console.log('error', res[`error`]);
      }
    });
  }

}
