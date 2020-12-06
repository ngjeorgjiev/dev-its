import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from 'src/app/shared/shared.module';
import { CodeScanRoutingModule } from './code-scan-routing.module';
import { CodeScanComponent } from './code-scan.component';
import { InValidQrCodeComponent } from './invalid-qr-code/invalid-qr-code.component';
import { RegistrationComponent } from './registration/registration.component';
import { UnverifiedComponent } from './unverified/unverified.component';
import { ValidQrCodeComponent } from './valid-qr-code/valid-qr-code.component';
import { VerificationComponent } from './verification/verification.component';
import { VerifiedComponent } from './verified/verified.component';

@NgModule({
  imports: [
    SharedModule,
    CodeScanRoutingModule,
    TranslocoModule
  ],
  declarations: [
    CodeScanComponent,
    ValidQrCodeComponent,
    RegistrationComponent,
    InValidQrCodeComponent,
    VerificationComponent,
    VerifiedComponent,
    UnverifiedComponent
  ],
  entryComponents: [],
  providers: [
    { provide: TRANSLOCO_SCOPE, useValue: 'code-scan' }
  ],
})

export class CodeScanModule { }
