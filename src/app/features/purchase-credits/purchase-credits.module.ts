import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PurchaseCreditsRoutingModule } from './purchase-credits-routing.module';
import { PurchaseCreditsComponent } from './purchase-credits.component';

@NgModule({
  imports: [
    SharedModule,
    PurchaseCreditsRoutingModule,
  ],
  declarations: [
    PurchaseCreditsComponent,
  ],
  entryComponents: [],
  providers: []
})

export class PurchaseCreditsModule { }
