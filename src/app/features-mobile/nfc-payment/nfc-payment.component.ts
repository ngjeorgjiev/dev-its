import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  templateUrl: './nfc-payment.component.html',
  styleUrls: ['./nfc-payment.component.css']
})
export class NfcPaymentComponent {

  constructor(private router: Router, private location: Location) { }
  
  goBack(): void {
    this.location.back();
  }

  redeemCredits(): void {
    this.router.navigateByUrl('/code-scan/checkout/nfc-payment/redeem-credits');
  }
  purchaseCredits(): void {
    this.router.navigateByUrl('/code-scan/checkout/nfc-payment/purchase-credits');
  }
}
