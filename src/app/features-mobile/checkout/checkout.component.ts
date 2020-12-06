import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent{

  constructor(private router: Router, private location: Location) { }
  
  goBack(): void {
    this.location.back();
  }

  cash(): void {
    this.router.navigateByUrl('/code-scan/checkout/cash');
  }

  card(): void {
    this.router.navigateByUrl('/code-scan/checkout/card');
  }

  nfc(): void {
    this.router.navigateByUrl('/code-scan/checkout/nfc-payment');
  }
}
