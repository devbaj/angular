import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  key = ''; // you can get your own API key to place here at openweathermap.org

  constructor(
    private _http: HttpClient
  ) { }

  get(city: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.key}`);
  }
}
