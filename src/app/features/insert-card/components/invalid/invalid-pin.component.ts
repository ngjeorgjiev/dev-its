import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './invalid-pin.component.html',
  styleUrls: ['./invalid-pin.component.css']
})
export class InvalidPinComponent {

  constructor(private router: Router) { }

  valid(): void {
    this.router.navigateByUrl('/checkout/card/insert-card/valid');
  }
}
