import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumer } from './consumer';
import { RegisterConsumer } from './registerConsumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  private baseURL = "http://localhost:8080/consumer/" ;

  constructor(  private _http : HttpClient ) { }


    getConsumerList() : Observable<any>{
      return this._http.get<any>( this.baseURL) ;
    }

    registerConsumer(register : RegisterConsumer) : Observable<any>{
      return this._http.post<any>( this.baseURL,register) ;
    }

    

}
