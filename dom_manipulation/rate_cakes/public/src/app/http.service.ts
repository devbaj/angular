import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  add(cake: any) {
    return this._http.post('/cakes', cake);
  }

  all() {
    return this._http.get('/cakes');
  }

  rate(cake: any) {
    return this._http.post(`/cakes/$(cake._id)`, cake);
  }

}
