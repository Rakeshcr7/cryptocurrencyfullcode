import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  constructor(private _http: HttpClient) { }

  public getAllCurrency(): any {
    let result = this._http.get('https://api.coinmarketcap.com/v2/ticker/')
    return result;
  }
}

 