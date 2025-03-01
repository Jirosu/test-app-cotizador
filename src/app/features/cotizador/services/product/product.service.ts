import { Injectable } from '@angular/core';
import { Product } from '../../models/product.interface';
import { HttpClient } from '@angular/common/http';
import { API } from '../../../../core/constants/API';
import { ResponseWithDataCount } from '../../../../core/models/response.interface';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private _http: HttpClient ) {}

  getProducts() {
    const url = `${API.url}/products`;
    return this._http.get<ResponseWithDataCount<Product>>(url, { withCredentials: true })
  }

  // increaseMinorPrice(): Observable<Product[]> {
  //   return this.getProducts().pipe(
  //     map( response => response.data.result),
  //     map( products => products.map( (prod: Product) => {
  //       return {
  //         ...prod,
  //         unitPrice: prod.unitPrice * 1.2
  //       }
  //     }))
  //   );
  // }
  
}
