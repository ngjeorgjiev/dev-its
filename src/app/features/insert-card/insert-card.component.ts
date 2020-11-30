import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  templateUrl: './insert-card.component.html',
  styleUrls: ['./insert-card.component.css']
})
export class InsertCardComponent {

  constructor(private router: Router) { }

  invalid(): void {
    this.router.navigateByUrl('/checkout/card/insert-card/invalid');
  }
}
