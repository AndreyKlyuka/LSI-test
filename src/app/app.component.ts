import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrencyAPIService} from "./services/currencyAPI.service";

import {Currency} from "./interfaces/currency.interface";
import {CurrencyService} from "./services/currency.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  public currencies!: Currency[]
  subscription!:Subscription

  constructor(private currencyApiService: CurrencyAPIService, private currencyService: CurrencyService) {

  }
  ngOnInit() {
    this.subscription = this.currencyApiService.getCurrentCurrencies().subscribe(data => {
      this.currencyService.tableCurrencies$.next(data[0].rates)
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
