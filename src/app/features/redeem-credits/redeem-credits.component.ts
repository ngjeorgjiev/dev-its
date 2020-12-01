import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  templateUrl: './redeem-credits.component.html',
  styleUrls: ['./redeem-credits.component.css'],
})
export class RedeemCreditsComponent {
  
  constructor(private router: Router, private location: Location) { }
  
  goBack(): void {
    this.location.back();
  }

  valid(): void {
    this.router.navigateByUrl('/checkout/nfc-payment/redeem-credits/valid');
  }

  invalid(): void {
    this.router.navigateByUrl(
      '/checkout/nfc-payment/redeem-credits/invalid'
    );
  }
}
