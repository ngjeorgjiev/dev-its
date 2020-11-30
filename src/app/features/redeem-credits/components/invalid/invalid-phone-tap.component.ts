import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './invalid-phone-tap.component.html',
  styleUrls: ['./invalid-phone-tap.component.css']
})
export class InvalidPhoneTapComponent {

  constructor(private router: Router) { }

  invalid(): void {
    this.router.navigateByUrl('/checkout/nfc-payment/redeem-credits');
  }
}
