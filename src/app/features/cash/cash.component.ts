import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent {
  constructor(private router: Router, private location: Location) { }
  
  goBack(): void {
    this.location.back();
  }
  insertMoney(): void {
    this.router.navigateByUrl('/checkout/cash/thank-you');
  }
}
