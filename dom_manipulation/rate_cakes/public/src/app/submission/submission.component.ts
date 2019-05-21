import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {
  cake = {
    name: null,
    image: null
  };

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit', this.cake);
    let observable = this._httpService.add(this.cake);
    observable.subscribe( data => {
      if (data[`message`] === 'success') {
        console.log(data[`message`], data[`data`]);
      }
    } );
  }

}
