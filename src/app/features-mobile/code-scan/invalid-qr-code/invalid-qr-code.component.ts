import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  templateUrl: './invalid-qr-code.component.html',
  styleUrls: ['./invalid-qr-code.component.css']
})
export class InValidQrCodeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  valid(): void {
    this.router.navigateByUrl('/code-scan/valid-qr-code');
  }

}
