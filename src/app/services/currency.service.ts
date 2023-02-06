import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Currency} from "../interfaces/currency.interface";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  public tableCurrencies$ = new BehaviorSubject<Currency[]>([])
  public currencies$ = this.tableCurrencies$.asObservable()
  constructor() { }
}
