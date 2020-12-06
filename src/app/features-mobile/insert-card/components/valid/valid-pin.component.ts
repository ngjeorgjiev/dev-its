import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './valid-pin.component.html',
  styleUrls: ['./valid-pin.component.css']
})
export class ValidPinComponent {

  constructor(private router: Router) { }

  thankYou(): void {
    this.router.navigateByUrl('/code-scan/checkout/card/insert-card/valid/thank-you');
  }
}
