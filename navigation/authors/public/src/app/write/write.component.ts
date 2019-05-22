import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  authorid: string;
  author: any;
  content: string;

  constructor(
    private _route: ActivatedRoute,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe( params => {
      this.authorid = params.authorid;
      let observable = this._httpService.fetch(this.authorid);
      observable.subscribe( res => {
        if (res[`success`]) { this.author = res[`package`]; } else { console.log('error', res[`error`]); }
      });
    });
  }

  submit() {
    console.log(this.content);
    let observable = this._httpService.addQuote(this.authorid, this.content);
    observable.subscribe( res => {
      if (res[`success`]) { console.log('success'); } else {console.log('error', res[`error`]); }
    });
  }

}
