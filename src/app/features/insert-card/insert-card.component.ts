import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  templateUrl: './insert-card.component.html',
  styleUrls: ['./insert-card.component.css']
})
export class InsertCardComponent {

  constructor(private router: Router, private location: Location) { }
  
  goBack(): void {
    this.location.back();
  }

  invalid(): void {
    this.router.navigateByUrl('/checkout/card/insert-card/invalid');
  }
}
