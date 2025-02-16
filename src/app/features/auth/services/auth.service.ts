import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReqLogin } from '../../../core/models/req-login.interface';
import { API } from '../../../core/constants/API';
import { Response } from '../../../core/models/response.interface';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _http: HttpClient) { }

  login(user: ReqLogin) {          
    const url: string = `${API.url}/auth/login`;
    // return this._http.post<HttpResponse<any>>(url, user, { withCredentials: true, responseType: 'text' as 'json' });
    return this._http.post<HttpResponse<any>>(url, user, { withCredentials: true, observe: 'response', responseType: 'text' as 'json' })
  }  

  logout() {
    const url: string = `${API.url}/auth/logout`;
    return this._http.post<HttpResponse<any>>(url, null, { withCredentials: true, responseType: 'text' as 'json' });
  }

  isLoggedIn() {
    const url: string = `${API.url}/auth/is-logged-in`;
    return this._http.post<Response>(url, null, { withCredentials: true });
  }

}
