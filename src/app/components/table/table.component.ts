import {Component, Input, OnInit} from '@angular/core';
import {Currency} from "../../interfaces/currency.interface";
import {Observable} from "rxjs";
import {CurrencyService} from "../../services/currency.service";
import {CurrencyAPIService} from "../../services/currencyAPI.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  currencies$!:Observable<Currency[]>

  constructor(private currencyApiService: CurrencyAPIService, private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencies$ = this.currencyService.currencies$

  }

}
