import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from 'src/app/shared/shared.module';
import { PurchaseCreditsRoutingModule } from './purchase-credits-routing.module';
import { PurchaseCreditsComponent } from './purchase-credits.component';

@NgModule({
  imports: [
    SharedModule,
    PurchaseCreditsRoutingModule,
    TranslocoModule
  ],
  declarations: [
    PurchaseCreditsComponent,
  ],
  entryComponents: [],
  providers: [
    { provide: TRANSLOCO_SCOPE, useValue: 'purchase-credits' }
  ],
})

export class PurchaseCreditsModule { }
