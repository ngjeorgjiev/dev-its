import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './nfc-payment.component.html',
  styleUrls: ['./nfc-payment.component.css']
})
export class NfcPaymentComponent {

  constructor(private router: Router) { }

  redeemCredits(): void {
    this.router.navigateByUrl('/checkout/nfc-payment/redeem-credits');
  }
  purchaseCredits(): void {
    this.router.navigateByUrl('/checkout/nfc-payment/purchase-credits');
  }
}
