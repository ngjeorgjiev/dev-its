import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  templateUrl: './unverified.component.html',
  styleUrls: ['./unverified.component.css']
})
export class UnverifiedComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.router.navigateByUrl(`/code-scan/valid-qr-code/registration`);
    // }, 2000);
  }

  verified(): void {
    this.router.navigateByUrl(`/code-scan/valid-qr-code/registration/verification/verified`);
  }
}
