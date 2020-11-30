import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './purchase-credits.component.html',
  styleUrls: ['./purchase-credits.component.css']
})
export class PurchaseCreditsComponent {

  constructor(private router: Router) { }

  cash(): void {
    this.router.navigateByUrl('/checkout/cash');
  }

  card(): void {
    this.router.navigateByUrl('/checkout/card');
  }
}
