import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API } from '../../../../core/constants/API';
import { ClientDataMigo } from '../../../../core/models/migo.interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private _http: HttpClient) { }

  getClientDataMigo(numDoc: string) {
    const url = `${API.url}/company/migo/${numDoc}`;
    return this._http.get<ClientDataMigo>(url, {withCredentials: true});
  }
}
