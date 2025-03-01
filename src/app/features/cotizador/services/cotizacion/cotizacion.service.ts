import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { catchError, EmptyError, map, Observable, of } from 'rxjs';

import { CotizacionStatus, GenerateQuotation_BL, ModifyQuotation_BL, Quotation, QuotationDetail, QuotationHeader, RespQuotationByIdDto, RespQuotationDetailDto, RespQuotationsDto } from '../../models/cotizacion.interface';
import { QuotationDetailService } from '../quotation-detail-service/quotation-detail-service.service';
import { API } from '../../../../core/constants/API';
import { Response, ResponseWithData } from '../../../../core/models/response.interface';
import { Mapper } from '../../../../shared/utils/mapper';
import { CompanyService } from '../company/company.service';


@Injectable({
  providedIn: 'root'
})
export class CotizacionService{

  // private cotizacionesFromLocalStorage: RespQuotationsDto[] = [];
  private cotizacionesFromLocalStorage: Quotation[] = [];
  

  constructor( 
    private _http: HttpClient,
    private _cartService: QuotationDetailService,
    private _companyService: CompanyService
   ) {}
 

  // API

  // All Quotations header and details
  getQuotation() {
    this.getCotizacionesFromLocalStorage();
  
    const url = `${API.url}/quotation`;
    return this._http.get<ResponseWithData<RespQuotationsDto[]>>(url, { withCredentials: true }).pipe(
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


  getQuotationHeaders(): Observable<Quotation[]> {    
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
        // ...data, 
        ...data.map(header => Mapper.mapQuotationHeaderToQuotation(header)),
        ...this.cotizacionesFromLocalStorage.reverse()
      ]),
      catchError(error => {
        console.error('Error trying to get quotations:', error);
        return of(this.cotizacionesFromLocalStorage.reverse());
      })
    );
    
  }
  

  getQuotationDetailById(id: string) {
    const url = `${API.url}/quotation/detail/${id}`;
    return this._http.get<ResponseWithData<RespQuotationDetailDto[]>>(url, { withCredentials: true })
  }

  
  addQuotation(cotizacionAdd: GenerateQuotation_BL) {
    
    const url = `${API.url}/quotation`;
    return this._http.post<ResponseWithData<string>>(url, cotizacionAdd, { withCredentials: true });
  }

  updateQuotation(cotizacionUpdate: ModifyQuotation_BL) {
    
    const url = `${API.url}/quotation`;
    return this._http.put<ResponseWithData<string>>(url, cotizacionUpdate, { withCredentials: true });
  }

  deleteQuotation(id: string) {
    const url = `${API.url}/quotation/${id}`;    

    return this._http.delete<ResponseWithData<string>>(url, { withCredentials: true });
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

      return;
    }
    this.cotizacionesFromLocalStorage = [];
  }

  getProductTariffPrice(prod: QuotationDetail) {
    this._companyService.getCompanyTariffPrice(prod.productCode).subscribe( resp => {
      prod.tariffPrice = resp.data
    })
  }

  findCotizacionInLocalStorageById(id: string)  {
    // console.log('service',id);
    
    this.getCotizacionesFromLocalStorage();
    // console.log(this.cotizacionesFromLocalStorage);
    
    const index = this.cotizacionesFromLocalStorage.findIndex( cot => cot.noCotizacion === id);
    // console.log({index});
    
    if (index === -1) {      
      return null;
    }

    
    // console.log(this.cotizacionesFromLocalStorage[index]);

    // obtener precio de lista
    this.cotizacionesFromLocalStorage[index].cart.forEach( detailProd => {
      this.getProductTariffPrice(detailProd)

    } )
    
    // console.log(this.cotizacionesFromLocalStorage[index].cart);
    
    return this.cotizacionesFromLocalStorage[index];
  }

  saveCotizacionInLocalStorage(cotizacion: Quotation) {
    this.getCotizacionesFromLocalStorage();
    
    if(cotizacion.status === CotizacionStatus.Devuelto) {
      return;
    }

    const index = this.cotizacionesFromLocalStorage.findIndex( cot => cot.noCotizacion === cotizacion.noCotizacion);
    
    // nueva cotizacion (guarda storage)
    if (index === -1) {
      cotizacion.noCotizacion = cotizacion.noCotizacion || this.getNewId();
      // cotizacion.date = new Date();
      cotizacion.cart = this._cartService.cotizacionProductsCart;
      cotizacion.status = CotizacionStatus.Pendiente;  
      cotizacion.timestamp = Date.now();
        
      this.cotizacionesFromLocalStorage.push(cotizacion);
      // this.cotizacionesFromLocalStorage.unshift(cotizacion);

      this.saveInLocalStorage('backup-data-local', this.cotizacionesFromLocalStorage);
      return;
    }
    
    cotizacion.cart = this._cartService.cotizacionProductsCart;
    this.cotizacionesFromLocalStorage[index] = cotizacion;         
    
    this.saveInLocalStorage('backup-data-local', this.cotizacionesFromLocalStorage);
  }

  saveInLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
 
  deleteCotizacionFromLocalStorage(noCotizacion: string) {    
    const updatedCotizaciones = this.cotizacionesFromLocalStorage.filter( cot => cot.noCotizacion !== noCotizacion );
    this.saveInLocalStorage('backup-data-local', updatedCotizaciones);
  }  

}
