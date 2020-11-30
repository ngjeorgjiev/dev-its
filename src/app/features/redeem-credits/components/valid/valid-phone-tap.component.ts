import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './valid-phone-tap.component.html',
  styleUrls: ['./valid-phone-tap.component.css']
})
export class ValidPhoneTapComponent {

  constructor(private router: Router) { }

  valid(): void {
    this.router.navigateByUrl('/checkout/nfc-payment/redeem-credits/valid/thank-you');
  }
}
