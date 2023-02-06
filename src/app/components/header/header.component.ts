import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrencyAPIService} from "../../services/currencyAPI.service";
import {CurrencyService} from "../../services/currency.service";
import {Currency} from "../../interfaces/currency.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy{
  date!: Date | null
  subscription!:Subscription

  constructor(private currencyApiService: CurrencyAPIService, private currencyService: CurrencyService) {
  }

  loadCurrencies() {
    if (new Date().getTime() < this.date!.getTime()) {
      alert('I can`t see future :)')
      this.date = null
      return
    }
    this.currencyApiService.getCurrenciesByDate(this.date!.toLocaleDateString().split('.').reverse().join('-')).subscribe(
      data => {
        console.log(data)
        this.currencyService.tableCurrencies$.next(data[0].rates)
      }
    )
  }

  clearDate() {
    this.subscription = this.currencyApiService.getCurrentCurrencies().subscribe(
      data => {
        this.currencyService.tableCurrencies$.next(data[0].rates)
      }
    )
    this.date = null
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
