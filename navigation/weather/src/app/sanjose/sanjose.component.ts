import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather: any;
  temp: number;
  tempL: number;
  tempH: number;

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    let observable = this._httpService.get('san jose');
    observable.subscribe( data => {
      this.weather = data;
      this.temp = Math.floor(this.weather.main.temp - 273.15);
      this.tempL = Math.floor( this.weather.main.temp_min - 273.15 );
      this.tempH = Math.floor( this.weather.main.temp_max - 273.15 );
    });
  }

}
