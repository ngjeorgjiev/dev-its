import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from 'src/app/shared/shared.module';
import { NfcPaymentRoutingModule } from './nfc-payment-routing.module';
import { NfcPaymentComponent } from './nfc-payment.component';

@NgModule({
  imports: [
    SharedModule,
    NfcPaymentRoutingModule,
    TranslocoModule
  ],
  declarations: [
    NfcPaymentComponent,
  ],
  entryComponents: [],
  providers: [
    { provide: TRANSLOCO_SCOPE, useValue: 'nfc-payment' }
  ],
})

export class NfcPaymentModule { }
