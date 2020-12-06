
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeScanComponent } from './code-scan.component';
import { InValidQrCodeComponent } from './invalid-qr-code/invalid-qr-code.component';
import { RegistrationComponent } from './registration/registration.component';
import { UnverifiedComponent } from './unverified/unverified.component';
import { ValidQrCodeComponent } from './valid-qr-code/valid-qr-code.component';
import { VerificationComponent } from './verification/verification.component';
import { VerifiedComponent } from './verified/verified.component';


const routes: Routes = [
  {
    path: '',
    component: CodeScanComponent
  },
  {
    path: 'valid-qr-code',
    component: ValidQrCodeComponent
  },
  {
    path: 'invalid-qr-code',
    component: InValidQrCodeComponent
  },
  {
    path: 'valid-qr-code/registration',
    component: RegistrationComponent
  },
  {
    path: 'valid-qr-code/registration/verification',
    component: VerificationComponent
  },
  {
    path: 'valid-qr-code/registration/verification/verified',
    component: VerifiedComponent
  },
  {
    path: 'valid-qr-code/registration/verification/unverified',
    component: UnverifiedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeScanRoutingModule {
}
