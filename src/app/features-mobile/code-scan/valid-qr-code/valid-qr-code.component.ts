import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  templateUrl: './valid-qr-code.component.html',
  styleUrls: ['./valid-qr-code.component.css']
})
export class ValidQrCodeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  next(): void {
    this.router.navigateByUrl('/code-scan/valid-qr-code/registration');
  }

}
