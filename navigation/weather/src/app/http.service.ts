import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  key = 'e6c2cdf246401ea36c85ef3da3a5cc0a';

  constructor(
    private _http: HttpClient
  ) { }

  get(city: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.key}`);
  }
}
