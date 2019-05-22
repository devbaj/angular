import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  authorid: string;
  author: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.authorid = params.authorid;
      let observable = this._httpService.fetch(this.authorid);
      observable.subscribe( res => {
        if (res[`success`]) { this.author = res[`package`]; } else { console.log('error', res[`error`]); }
      });
    });
  }

  vote(n: number, quoteid: string) {
    let observable = this._httpService.updateQuote(quoteid, n, this.authorid);
    observable.subscribe( res => {
      if (res[`success`]) { this.ngOnInit(); } else { console.log('error', res[`error`]); }
    });
  }

  delete(id: string) {
    let observable = this._httpService.deleteQuote(id);
    observable.subscribe( res => {
      if (res[`success`]) { this.ngOnInit(); } else { console.log('error', res[`error`]); }
    });
  }

}
