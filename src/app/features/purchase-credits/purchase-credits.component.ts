import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  templateUrl: './purchase-credits.component.html',
  styleUrls: ['./purchase-credits.component.css']
})
export class PurchaseCreditsComponent {

  constructor(private router: Router, private location: Location) { }
  
  goBack(): void {
    this.location.back();
  }

  cash(): void {
    this.router.navigateByUrl('/checkout/cash');
  }

  card(): void {
    this.router.navigateByUrl('/checkout/card');
  }
}
