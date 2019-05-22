import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  readAll() {
    return this._http.get('/api/products');
  }

  readOne(id: string) {
    return this._http.get(`/api/products/${id}`);
  }

  create(product: any) {
    return this._http.post('/api/products', product);
  }

  update(id: string, product: any) {
    return this._http.put(`/api/products/${id}`, product);
  }

  delete(id: string) {
    return this._http.delete(`/api/products/${id}`);
  }
}
