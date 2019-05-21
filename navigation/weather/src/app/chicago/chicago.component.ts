import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather: any;
  temp: number;
  tempL: number;
  tempH: number;

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    let observable = this._httpService.get('chicago');
    observable.subscribe( data => {
      this.weather = data;
      this.temp = Math.floor(this.weather.main.temp - 273.15);
      this.tempL = Math.floor( this.weather.main.temp_min - 273.15 );
      this.tempH = Math.floor( this.weather.main.temp_max - 273.15 );
    });
  }



}
