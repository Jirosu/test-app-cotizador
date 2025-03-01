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
<<<<<<< HEAD
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
=======
    // return this._http.get<ResponseWithDataCount<Product>>(url, { withCredentials: true });
    return of(
      {
        data: {
          result: [      
            {
                code: '0378-24/25',
                description: "Laptop",
                unitPrice: 1500.00,
                stock: 10
            },
            {
                code: 'QQ-6067',
                description: "Smartphone",
                unitPrice: 800.00,
                stock: 100
            },
            {
                code: 'TA-2016',
                description: "Tablet",
                unitPrice: 600.00,
                stock: 10
            },
            {
                code: '2838',
                description: "Auriculares",
                unitPrice: 200.00,
                stock: 10
            },
            {
                code: '123-439/42',
                description: "Smartwatch",
                unitPrice: 300.00,
                stock: 10
            }
        ]
        }
      }
    )
  }

  increaseMinorPrice(): Observable<Product[]> {
    return this.getProducts().pipe(
      map( response => response.data.result),
      map( products => products.map( (prod: Product) => {
        return {
          ...prod,
          unitPrice: prod.unitPrice * 1.2
        }
      }))
    );
  }
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
  
}
