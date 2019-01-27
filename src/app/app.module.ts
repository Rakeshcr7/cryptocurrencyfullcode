import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { PriceChartComponent } from './price-chart/price-chart.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { ChartModule } from 'angular-highcharts';
import { ChartsModule } from 'ng2-charts';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    ComparisonComponent,
    CurrencyListComponent,
    FavouritesComponent,
    PriceChartComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    IonRangeSliderModule,
    NgxPaginationModule,
    ChartModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    ChartsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
