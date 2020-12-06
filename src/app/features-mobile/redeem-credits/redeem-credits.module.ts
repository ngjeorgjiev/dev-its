import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from 'src/app/shared/shared.module';
import { InvalidPhoneTapComponent } from './components/invalid/invalid-phone-tap.component';
import { ValidPhoneTapComponent } from './components/valid/valid-phone-tap.component';
import { RedeemCreditsRoutingModule } from './redeem-credits-routing.module';
import { RedeemCreditsComponent } from './redeem-credits.component';

@NgModule({
  imports: [
    SharedModule,
    RedeemCreditsRoutingModule,
    TranslocoModule
  ],
  declarations: [
    RedeemCreditsComponent,
    InvalidPhoneTapComponent,
    ValidPhoneTapComponent
  ],
  entryComponents: [],
  providers: [
    { provide: TRANSLOCO_SCOPE, useValue: 'redeem-credits' }
  ],
})

export class RedeemCreditsModule { }
