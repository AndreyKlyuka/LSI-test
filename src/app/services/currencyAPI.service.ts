import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Currency} from "../interfaces/currency.interface";

@Injectable({
  providedIn: 'root'
})
export class CurrencyAPIService {

  private url: string = 'https://api.nbp.pl/api/exchangerates/tables/A/'
  constructor(private http: HttpClient) { }

  getCurrentCurrencies(){
    return this.http.get<any>(this.url + '/?format=json')
  }
  getCurrenciesByDate(date: string){
    return this.http.get<any>(this.url+ date +'/?format=json')
  }
}
