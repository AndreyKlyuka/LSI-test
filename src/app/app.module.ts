import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {TableModule} from "primeng/table";
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import {CalendarModule} from "primeng/calendar";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CardModule} from "primeng/card";
import {PaginatorModule} from "primeng/paginator";
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    CalendarModule,
    FormsModule,
    CardModule,
    PaginatorModule,
    FormsModule, ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
