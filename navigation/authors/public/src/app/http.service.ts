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
    return this._http.post('/api/authors', {name});
  }

  fetch(id: string) {
    return this._http.get(`/api/authors/${id}`);
  }

  update(id: string, author: any) {
    return this._http.post(`/api/authors/${id}`, {author});
  }

  delete(id: string) {
    return this._http.delete(`/api/authors/${id}`);
  }

  addQuote(authorid: string, content: string) {
    console.log('httpservice', content);
    return this._http.post(`/api/authors/${authorid}/quotes`, {content});
  }

  updateQuote(quoteid: string, value: number, authorid: string) {
    return this._http.post(`/api/authors/${authorid}/quotes/${quoteid}`, {value});
  }

  deleteQuote(quoteid: string) {
    return this._http.delete(`/api/quotes/${quoteid}`);
  }
}
