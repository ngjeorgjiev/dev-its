import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  phoneEnteredId = '123-45-678-910';
  sendCode = false;
  constructor(private router: Router, private location: Location) {}

  verification(phoneId: string): void {
    this.router.navigateByUrl(`/code-scan/valid-qr-code/registration/${phoneId}/verification`);
  }  

  goBack(): void {
    this.location.back();
  }

  enableSendCode(): void {
    this.sendCode = true;
  }

  scanCode(): void {
    this.router.navigateByUrl(`/code-scan/valid-qr-code/registration/verification`);
  }
}
