import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { NfcPaymentRoutingModule } from './nfc-payment-routing.module';
import { NfcPaymentComponent } from './nfc-payment.component';

@NgModule({
  imports: [
    SharedModule,
    NfcPaymentRoutingModule,
  ],
  declarations: [
    NfcPaymentComponent,
  ],
  entryComponents: [],
  providers: []
})

export class NfcPaymentModule { }
