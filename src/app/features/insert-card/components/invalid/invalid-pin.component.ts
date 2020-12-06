import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './invalid-pin.component.html',
  styleUrls: ['./invalid-pin.component.css']
})
export class InvalidPinComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout( () => {
      this.router.navigateByUrl('/checkout/card/insert-card/valid');
    }, 1500);
  }
}
