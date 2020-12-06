import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './valid-pin.component.html',
  styleUrls: ['./valid-pin.component.css']
})
export class ValidPinComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout( () => {
      this.router.navigateByUrl('/checkout/card/insert-card/valid/thank-you');
    }, 1500);
  }
}
