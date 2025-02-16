import { Injectable } from '@angular/core';
import { Product } from '../../models/product.interface';
import { HttpClient } from '@angular/common/http';
import { API } from '../../../../core/constants/API';
import { Response } from '../../../../core/models/response.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // constructor( private _http: HttpClient ) {}

  private products: Product[] = [];

  constructor() {
    this.products = [      
        {
            code: '0378-24/25',
            description: "Laptop",
            unitPrice: 1500.00,
            stock: 1
        },
        {
            code: 'QQ-6067',
            description: "Smartphone",
            unitPrice: 800.00,
            stock: 1
        },
        {
            code: 'TA-2016',
            description: "Tablet",
            unitPrice: 600.00,
            stock: 1
        },
        {
            code: '2838',
            description: "Auriculares",
            unitPrice: 200.00,
            stock: 1
        },
        {
            code:'123-439/42',
            description: "Smartwatch",
            unitPrice: 300.00,
            stock: 1,            
        }
    ];
   }

   getProducts() {
    return of({
      data: {
        result: [...this.products]
      }
    });
  }


  // getProducts() {
  //   const url = `${API.url}/products`;
  //   return this._http.get<Response>(url, { withCredentials: true });
  // }

}
