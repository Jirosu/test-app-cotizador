<<<<<<< HEAD
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API } from '../../../../core/constants/API';
import { ClientData } from '../../../../core/models/migo.interface';
import { RespPlaceOfDispatchDto, RespPriceTypeDto, RespShippingLocationDto, RespTypeOfDeliveryDto } from '../../models/company.interface';
import { ResponseWithData } from '../../../../core/models/response.interface';
import { TariffPrice } from '../../models/tarifPrice.interface';
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API } from '../../../../core/constants/API';
import { ClientDataMigo } from '../../../../core/models/migo.interface';
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private _http: HttpClient) { }

<<<<<<< HEAD
  
  getCustomerInfo(numDoc: string) {
    const url = `${API.url}/company/customer/${numDoc}`;
    return this._http.get<ClientData>(url, {withCredentials: true});
  }

  getTypeOfDelivery() {
    const url = `${API.url}/company/type-of-delivery`;
    return this._http.get<ResponseWithData<RespTypeOfDeliveryDto[]>>(url, {withCredentials: true});
  }

  getCompanyPlaceOfDispatch() {
    const url = `${API.url}/company/place-of-dispatch`;
    return this._http.get<ResponseWithData<RespPlaceOfDispatchDto[]>>(url, {withCredentials: true});
  }

  getCompanyShippingLocation() {
    const url = `${API.url}/company/shipping-location`;
    return this._http.get<ResponseWithData<RespShippingLocationDto[]>>(url, {withCredentials: true});
  }

  getCompanyPriceType() {
    const url = `${API.url}/company/price-type`;
    return this._http.get<ResponseWithData<RespPriceTypeDto[]>>(url, {withCredentials: true});
  }

  getCompanyPercentageForMinorTypePrice() {
    const url = `${API.url}/company/percentage-for-minor-type-price`;
    return this._http.get<ResponseWithData<number>>(url, {withCredentials: true});
  }

  getCompanyTariffPrice(productNo: string) {
    const url = `${API.url}/company/tariff-price`;
    let params = new HttpParams()
      .set('productNo', productNo);

    return this._http.get<ResponseWithData<TariffPrice[]>>(url, {params, withCredentials: true});
  }


=======
  getClientDataMigo(numDoc: string) {
    const url = `${API.url}/company/migo/${numDoc}`;
    return this._http.get<ClientDataMigo>(url, {withCredentials: true});
  }
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
}
