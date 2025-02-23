import { Injectable } from '@angular/core';
import { CotizacionStatus, GenerateQuotation_BL, ModifyQuotation_BL, QuotationHeader, RespQuotationByIdDto, RespQuotationDetailDto, RespQuotationsDto } from '../../models/cotizacion.interface';

import { CartService } from '../cart/cart.service';
import { API } from '../../../../core/constants/API';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Response, ResponseWithData } from '../../../../core/models/response.interface';
import { catchError, EmptyError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService{

  private cotizacionesFromLocalStorage: RespQuotationsDto[] = [];
  

  constructor( 
    private _http: HttpClient,
    private _cartService: CartService
   ) {
    // this.cotizaciones = [
    //   {
    //     id: 'COT-1',
    //     docCliente: '12345678970',
    //     cliente: 'Cliente 1',
    //     monto: 3100.00,
    //     fecha: '2025-02-13',
    //     estado: 'Completado',
    //     precioPorMenor: false,
    //     notaVenta: false,
    //     productos: [
    //       {
    //         code: '0378-24/25',
    //         description: "Apple MacBook Pro 16-inch M1 Max",
    //         unitPrice: 1500.00,
    //         stock: 1,
    //         cantidad: 1,
    //         monto: 1500.00
    //       },
    //       {
    //         code: 'QQ-6067',
    //         description: "Samsung Galaxy S21 Ultra 5G",
    //         unitPrice: 800.00,
    //         stock: 1,
    //         cantidad: 2,
    //         monto: 1600.00
    //       }
    //     ]
    //   },
    //   {
    //     id: 'COT-2',
    //     docCliente: '98765412301',
    //     cliente: 'Cliente 2',
    //     monto: 2300.00,
    //     fecha: '2025-02-13',
    //     estado: 'Completado',
    //     precioPorMenor: false,
    //     notaVenta: false,
    //     productos: [
    //       {
    //         code: 'TA-2016',
    //         description: "Microsoft Surface Pro 8",
    //         unitPrice: 600.00,
    //         stock: 1,
    //         cantidad: 2,
    //         monto: 1200.00
    //       },
    //       {
    //         code: '2838',
    //         description: "Bose Noise Cancelling Headphones 700",
    //         unitPrice: 200.00,
    //         stock: 1,
    //         cantidad: 2,
    //         monto: 400.00
    //       },
    //       {
    //         code: '123-439/42',
    //         description: "Apple Watch Series 8",
    //         unitPrice: 300.00,
    //         stock: 1,
    //         cantidad: 2,
    //         monto: 600.00
    //       }
    //     ]
    //   },
    //   {
    //     id: 'COT-20',
    //     docCliente: '12345678',
    //     cliente: 'Cliente 20',
    //     monto: 3100.00,
    //     fecha: '2025-02-13',
    //     estado: 'Completado',
    //     precioPorMenor: false,
    //     notaVenta: false,
    //     productos: [
    //       {
    //         code: '0378-24/25',
    //         description: "Apple MacBook Pro 16-inch M1 Max",
    //         unitPrice: 1500.00,
    //         stock: 1,
    //         cantidad: 1,
    //         monto: 1500.00
    //       },
    //       {
    //         code: 'QQ-6067',
    //         description: "Samsung Galaxy S21 Ultra 5G",
    //         unitPrice: 800.00,
    //         stock: 1,
    //         cantidad: 2,
    //         monto: 1600.00
    //       }
    //     ]
    //   },
    //   {
    //     id: 'COT-4',
    //     docCliente: '12345678970',
    //     cliente: 'Cliente 1',
    //     monto: 3100.00,
    //     fecha: '2025-02-13',
    //     estado: 'Devuelto',
    //     precioPorMenor: false,
    //     notaVenta: false,
    //     productos: [
    //       {
    //         code: '0378-24/25',
    //         description: "Apple MacBook Pro 16-inch M1 Max",
    //         unitPrice: 1500.00,
    //         stock: 1,
    //         cantidad: 1,
    //         monto: 1500.00
    //       },
    //       {
    //         code: 'QQ-6067',
    //         description: "Samsung Galaxy S21 Ultra 5G",
    //         unitPrice: 800.00,
    //         stock: 1,
    //         cantidad: 2,
    //         monto: 1600.00
    //       }
    //     ]
    //   },
    // ];
   }
 

  // API

  // All Quotations header and details
  getQuotation() {
    this.getCotizacionesFromLocalStorage();
  
    const url = `${API.url}/quotation`;
    return this._http.get<ResponseWithData<RespQuotationsDto[]>>(url, { withCredentials: true }).pipe(
    // return of(
    //   {
    //     data: [          
    //         {
    //           no: 'Q001',
    //           noClient: 'C001',
    //           clientName: 'Juan Pérez',
    //           detail: [
    //             {
    //               noQuotation: 'Q001',
    //               noProduct: 'P001',
    //               noLine: 'L001',
    //               quantity: 2,
    //               price: 50,
    //               description: 'Producto A',
    //               amount: 100
    //             },
    //             {
    //               noQuotation: 'Q001',
    //               noProduct: 'P002',
    //               quantity: 3,
    //               price: 30,
    //               description: 'Producto B',
    //               amount: 90
    //             }
    //           ],
    //           igv: 18,
    //           totalPrice: 208,
    //           status: CotizacionStatus.Completado
    //         },
    //         {
    //           no: 'Q002',
    //           noClient: 'C002',
    //           clientName: 'Ana Gómez',
    //           detail: [
    //             {
    //               noQuotation: 'Q002',
    //               noProduct: 'P003',
    //               quantity: 1,
    //               price: 100,
    //               description: 'Producto C',
    //               amount: 100
    //             }
    //           ],
    //           totalPrice: 118,
    //           status: CotizacionStatus.Pendiente
    //         },
    //         {
    //           no: 'Q003',
    //           noClient: 'C003',
    //           clientName: 'Carlos López',
    //           detail: [
    //             {
    //               noQuotation: 'Q003',
    //               noProduct: 'P004',
    //               quantity: 5,
    //               price: 20,
    //               description: 'Producto D',
    //               amount: 100
    //             }
    //           ],
    //           igv: 18,
    //           totalPrice: 118,
    //           status: CotizacionStatus.Devuelto
    //         },
    //         {
    //           no: 'Q004',
    //           noClient: 'C004',
    //           clientName: 'Lucía Martínez',
    //           detail: [
    //             {
    //               noQuotation: 'Q004',
    //               noProduct: 'P005',
    //               quantity: 10,
    //               price: 15,
    //               description: 'Producto E',
    //               amount: 150
    //             }
    //           ],
    //           totalPrice: 177,
    //           status: CotizacionStatus.Completado
    //         },
    //         {
    //           no: 'Q005',
    //           noClient: 'C005',
    //           clientName: 'Pedro Sánchez',
    //           detail: [
    //             {
    //               noQuotation: 'Q005',
    //               noProduct: 'P006',
    //               quantity: 4,
    //               price: 25,
    //               description: 'Producto F',
    //               amount: 100
    //             },
    //             {
    //               noQuotation: 'Q005',
    //               noProduct: 'P007',
    //               quantity: 2,
    //               price: 40,
    //               description: 'Producto G',
    //               amount: 80
    //             }
    //           ],
    //           igv: 32,
    //           totalPrice: 224,
    //           status: CotizacionStatus.Pendiente
    //         }
          
    //       ]
    //   }
    // )
    // .pipe(
      map(response => response.data),
      map(cotizaciones =>
        cotizaciones.map((cotizacion: RespQuotationsDto) => ({
          ...cotizacion,
          noClient: cotizacion.noClient, 
          clientName: cotizacion.clientName, 
          status: CotizacionStatus.Devuelto
        }))
      ),
      map(data => [...this.cotizacionesFromLocalStorage, ...data]),
      catchError(error => {
        console.error('Error trying to get quotations:', error);
        return of(this.cotizacionesFromLocalStorage);
      })
    );
  }

  getQuotationById(id: string) {    

    const url = `${API.url}/quotation/${id}`;
    return this._http.get<ResponseWithData<RespQuotationByIdDto>>(url, { withCredentials: true });
  }


  getQuotationHeaders() {    
    this.getCotizacionesFromLocalStorage();

    const url = `${API.url}/quotation/headers`;
    return this._http.get<ResponseWithData<QuotationHeader[]>>(url, { withCredentials: true }).pipe(    
      map(response => response.data),
      map(cotizaciones =>
        cotizaciones.map((cotizacion: QuotationHeader) => ({
          ...cotizacion,
          status: CotizacionStatus.Devuelto
        }))
      ),
      map(data => [ //reverse() - más recientes me muestran arriba
        ...data.reverse(), 
        ...this.cotizacionesFromLocalStorage.reverse()
      ]),
      catchError(error => {
        console.error('Error trying to get quotations:', error);
        return of(this.cotizacionesFromLocalStorage.reverse());
      })
    );

    // return of([...this.cotizacionesFromLocalStorage])
  }
  

  getQuotationDetailById(id: string) {
    const url = `${API.url}/quotation/detail/${id}`;
    return this._http.get<ResponseWithData<RespQuotationDetailDto[]>>(url, { withCredentials: true })
  }

  
  addQuotation(cotizacionAdd: GenerateQuotation_BL) {
    
    const url = `${API.url}/quotation/generate`;
    return this._http.post<Response>(url, cotizacionAdd, { withCredentials: true });
  }

  updateQuotation(cotizacionUpdate: ModifyQuotation_BL) {
    
    const url = `${API.url}/quotation/modify`;
    return this._http.put<Response>(url, cotizacionUpdate, { withCredentials: true });
  }

  deleteQuotation(id: string) {
    const url = `${API.url}/quotation`;
    let params = new HttpParams()
      .set('doc', id);

    return this._http.delete<Response>(url, { params, withCredentials: true });
  }

  
  // Local Storage
  getNewId() {
    const date = new Date();
    const randomNum1 = () => Math.floor(Math.random() * 10);    
    const randomNum2 = () => Math.floor(Math.random() * 10);

    let newId = `CT-${date.getMilliseconds()}${randomNum1()}${date.getSeconds()}${randomNum2()}-D`;

    return newId;
  }



  getCotizacionesFromLocalStorage() {
    
    const storage = localStorage.getItem('backup-data-local');
    if(storage) {
      this.cotizacionesFromLocalStorage =  JSON.parse(storage);
      // this.cotizacionesFromLocalStorage.sort((a, b) => b.timestamp! - a.timestamp!); // Ordena por timestamp (descendente)
      this.cotizacionesFromLocalStorage.sort((a, b) => a.timestamp! - b.timestamp!); // Ordena por timestamp (ascendente)


      // this.cotizacionesFromLocalStorage = [
      //   ...this.cotizacionesFromLocalStorage, 
        // ...[
        //   {
        //     no: 'Q001',
        //     noClient: 'C001',
        //     clientName: 'Juan Pérez',
        //     detail: [
        //       {
        //         noQuotation: 'Q001',
        //         noProduct: 'P001',
        //         descProduct: 'Producto A',
        //         noLine: 10000,
        //         quantity: 2,
        //         price: 50,
        //         amount: 100
        //       },
        //       {
        //         noQuotation: 'Q001',
        //         noProduct: 'P002',
        //         descProduct: 'Producto B',
        //         noLine: 20000,
        //         quantity: 3,
        //         price: 30,
        //         amount: 90
        //       }
        //     ],
        //     igv: 18,
        //     totalPrice: 208,
        //     status: CotizacionStatus.Devuelto
        //   },
        //   {
        //               no: 'FV-Q004',
        //               noClient: 'C004',
        //               clientName: 'Lucía Martínez',
        //               detail: [
        //                 {
        //                   noQuotation: 'Q004',
        //                   noProduct: 'P005',
        //                   quantity: 10,
        //                   price: 15,
        //                   noLine: 10000,
        //                   descProduct: 'Producto E',
        //                   amount: 150
        //                 }
        //               ],
        //               totalPrice: 177,
        //               status: CotizacionStatus.Devuelto
        //             },
        //             {
        //               no: 'FV-Q005',
        //               noClient: 'C005',
        //               clientName: 'Pedro Sánchez',
        //               detail: [
        //                 {
        //                   noQuotation: 'Q005',
        //                   noProduct: 'P006',
        //                   quantity: 4,
        //                   price: 25,
        //                   noLine: 20000,
        //                   descProduct: 'Producto F',
        //                   amount: 100
        //                 },
        //                 {
        //                   noQuotation: 'Q005',
        //                   noProduct: 'P007',
        //                   quantity: 2,
        //                   price: 40,
        //                   noLine: 30000,
        //                   descProduct: 'Producto G',
        //                   amount: 80
        //                 }
        //               ],
        //               igv: 32,
        //               totalPrice: 224,
        //               status: CotizacionStatus.Pendiente
        //             }
        // ]
      // ]

      // this.saveInLocalStorage('backup-data-local',this.cotizacionesFromLocalStorage );
      return;
    }
    this.cotizacionesFromLocalStorage = [];
  }

  findCotizacionInLocalStorageById(id: string)  {
    // console.log('service',id);
    
    this.getCotizacionesFromLocalStorage();
    // console.log(this.cotizacionesFromLocalStorage);
    
    const index = this.cotizacionesFromLocalStorage.findIndex( cot => cot.no === id);
    // console.log({index});
    
    if (index === -1) {      
      return null;
    }

    
    // console.log(this.cotizacionesFromLocalStorage[index]);
    
    return this.cotizacionesFromLocalStorage[index];
  }

  saveCotizacionInLocalStorage(cotizacion: RespQuotationsDto) {
    if(cotizacion.status === CotizacionStatus.Devuelto) {
      return;
    }

    const index = this.cotizacionesFromLocalStorage.findIndex( cot => cot.no === cotizacion.no);
    
    // nueva cotizacion (guarda storage)
    if (index === -1) {
      cotizacion.no = cotizacion.no || this.getNewId();
      // cotizacion.date = new Date();
      cotizacion.detail = this._cartService.cotizacionProductsCart;
      cotizacion.status = CotizacionStatus.Pendiente;  
      cotizacion.timestamp = Date.now();
        
      this.cotizacionesFromLocalStorage.push(cotizacion);
      // this.cotizacionesFromLocalStorage.unshift(cotizacion);

      this.saveInLocalStorage('backup-data-local', this.cotizacionesFromLocalStorage);
      return;
    }
    
    cotizacion.detail = this._cartService.cotizacionProductsCart;
    this.cotizacionesFromLocalStorage[index] = cotizacion;         
    
    this.saveInLocalStorage('backup-data-local', this.cotizacionesFromLocalStorage);
  }

  saveInLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));

    // this.getLocalStorageSize();
    // this.calcularTamañoLocalStorage();
  }
 
  deleteCotizacionFromLocalStorage(noCotizacion: string) {    
    const updatedCotizaciones = this.cotizacionesFromLocalStorage.filter( cot => cot.no !== noCotizacion );
    this.saveInLocalStorage('backup-data-local', updatedCotizaciones);
  }


  calcularTamañoLocalStorage() {
    let total = 0;
    
    for (let i = 0; i < localStorage.length; i++) {
      const clave:string = localStorage.key(i) || ''; // Obtener la clave del elemento
      const valor: string = localStorage.getItem(clave) || ''; // Obtener el valor del elemento
      
      total += (clave.length + valor.length); // Sumar el tamaño de la clave y el valor
    }
  
    console.log('Tamaño total de localStorage (en bytes):', total);
    return total;
  }

  getLocalStorageSize() {
    let total = 0;
    for (let item in localStorage) {
      if (localStorage.hasOwnProperty(item)) {
        total += (localStorage[item].length + item.length) * 2;
      }
    }
    console.log('Tamaño del LocalStorage: ' + total + ' bytes');
  }

}
