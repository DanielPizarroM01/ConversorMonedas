import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  baseCurrency: string = 'USD';
  targetCurrency: string = 'EUR';
  amount: number = 1;
  conversionResult: number = 0;
  currencies: string[] = ['USD', 'EUR', 'GBP', 'MXN', 'JPY', 'AUD'];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {}

  convertCurrency() {
    this.currencyService.getRates(this.baseCurrency).subscribe((data) => {
      const rate = data.rates[this.targetCurrency];
      this.conversionResult = this.amount * rate;
    });
  }
}

