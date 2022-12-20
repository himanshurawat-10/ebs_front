import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

    private baseURL = "http://localhost:8080/address/" ;

  constructor( private _http : HttpClient ) { }

   getAddressList() : Observable<any>{
      return this._http.get<any>( this.baseURL) ;
    }


}
