import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './valid-phone-tap.component.html',
  styleUrls: ['./valid-phone-tap.component.css']
})
export class ValidPhoneTapComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout( () => {
      this.router.navigateByUrl('/checkout/nfc-payment/redeem-credits/valid/thank-you');
    }, 1500);
  }
}
