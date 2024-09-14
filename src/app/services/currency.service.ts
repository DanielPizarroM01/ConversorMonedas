import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/'; // URL de tu API de tasas de cambio

  constructor(private http: HttpClient) {}
  

  // Función para obtener tasas de cambio basadas en una moneda base
  getRates(base: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${base}`);
  }
}
