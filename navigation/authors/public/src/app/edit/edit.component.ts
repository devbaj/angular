import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: string;
  author: any;
  updated: boolean;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _httpService: HttpService
  ) {
    this.updated = false;
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this.id = params[`id`];
      this.getAuthor();
    });
  }

  getAuthor() {
    let observable = this._httpService.fetch(this.id);
    observable.subscribe( res => {
      if (res[`success`]) { this.author = res[`package`]; } else { console.log('error', res[`error`]); }
    });
  }

  update() {
    let observable = this._httpService.update(this.author._id, this.author);
    observable.subscribe( res => {
      if (res[`success`]) {
        this.updated = true;
        this.ngOnInit();
      } else {
        console.log('error', res[`error`]);
      }
    });
  }

}
