import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './invalid-phone-tap.component.html',
  styleUrls: ['./invalid-phone-tap.component.css']
})
export class InvalidPhoneTapComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout( () => {
      this.router.navigateByUrl('/checkout/nfc-payment/redeem-credits/valid');
    }, 1500);
  }
}
