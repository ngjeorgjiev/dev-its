import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  templateUrl: './code-scan.component.html',
  styleUrls: ['./code-scan.component.css'],
})
export class CodeScanComponent implements OnInit {
  scanning = false;
  validating = false;
  interval: any;
  progress = 0;

  constructor(private router: Router, private location: Location) {}
  
  goBack(): void {
    this.location.back();
  }

  scanCode(): void {
    this.scanning = true;
  }

  goToValidate(): void {
    if (this.scanning) {
      this.validating = true;
      this.interval = setInterval(() => {
        if (this.progress < 35) {
          this.progress = this.progress + 1;
        }
      }, 200);
    }
  }

  goToInvalid(): void {
    this.router.navigateByUrl('/code-scan/invalid-qr-code');
  }

  ngOnInit(): void {}
}
