import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from './address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

    private baseURL = "http://localhost:8080/address/" ;

  constructor( private _http : HttpClient ) { }

   getAddressList() : Observable<any>{
      return this._http.get<any>( this.baseURL) ;
    }

      addAddress(a : Address) : Observable<any>{
         return this._http.post<any>( "http://localhost:8080/address/",a) ;
      }

      getAddresssById(id:number) : Observable<any>{
        return this._http.get<any>( `$(this.baseURL)/${id}`) ; 
      }

      updateAddress(id :number, a : Address) :   Observable<any>{
        return this._http.put<any>( `$(this.baseURL)/${id}`,a) ; 
      }

}
