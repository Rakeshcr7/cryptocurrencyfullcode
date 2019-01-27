import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { PriceChartComponent } from './price-chart/price-chart.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'list', component: CurrencyListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'priceChart/:id', component: PriceChartComponent },
  { path: 'comparisonView/:id1/:id2', component: ComparisonComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
