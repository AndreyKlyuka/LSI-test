import {Component, OnInit} from '@angular/core';
import {CurrencyAPIService} from "./services/currencyAPI.service";

import {Currency} from "./interfaces/currency.interface";
import {CurrencyService} from "./services/currency.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public currencies!: Currency[]

  constructor(private currencyApiService: CurrencyAPIService, private currencyService: CurrencyService) {

  }
  ngOnInit() {
    this.currencyApiService.getCurrentCurrencies().subscribe(data => {
      this.currencyService.tableCurrencies$.next(data[0].rates)

    })
  }
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }

}
