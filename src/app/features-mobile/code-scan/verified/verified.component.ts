import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  templateUrl: './verified.component.html',
  styleUrls: ['./verified.component.css']
})
export class VerifiedComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // setTimeout( () => {
    //   this.router.navigateByUrl('/code-scan/checkout');
    // }, 2000);
  }

  goToCheckout(): void {
    this.router.navigateByUrl('/code-scan/checkout');
  }
}
