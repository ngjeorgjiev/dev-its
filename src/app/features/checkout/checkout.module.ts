import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

@NgModule({
  imports: [
    SharedModule,
    CheckoutRoutingModule,
    TranslocoModule
  ],
  declarations: [
    CheckoutComponent,
  ],
  entryComponents: [],
  providers: [
    { provide: TRANSLOCO_SCOPE, useValue: 'checkout' }
  ],
})

export class CheckoutModule { }
