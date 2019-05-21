import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  all() {
    return this._http.get('/api/authors');
  }

  add(name: string) {
    console.log('httpservice', name);
    return this._http.post('/api/authors', {name});
  }

  fetch(id: string) {
    return this._http.get(`/api/authors/${id}`);
  }

  update(id: string, author: any) {
    console.log('http id', id);
    return this._http.post(`/api/authors/${id}`, {author});
  }

  delete(id: string) {
    return this._http.delete(`/api/authors/${id}`);
  }
}
