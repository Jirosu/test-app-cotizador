import { Injectable } from '@angular/core';
import { Product } from '../../models/product.interface';
import { HttpClient } from '@angular/common/http';
import { API } from '../../../../core/constants/API';
import { Response } from '../../../../core/models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private _http: HttpClient ) {}

  getProducts() {
    const url = `${API.url}/products`;
    return this._http.get<Response>(url, { withCredentials: true });
  }

}
