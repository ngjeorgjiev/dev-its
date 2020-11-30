import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(private router: Router, private location: Location) { }
  
  goBack(): void {
    this.location.back();
  }

  insertCard(): void {
    this.router.navigateByUrl('/checkout/card/insert-card');
  }
}
