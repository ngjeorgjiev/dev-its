
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NfcPaymentComponent } from './nfc-payment.component';


const routes: Routes = [
  {
    path: '',
    component: NfcPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NfcPaymentRoutingModule {
}
