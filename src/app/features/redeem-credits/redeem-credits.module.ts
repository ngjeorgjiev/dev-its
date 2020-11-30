import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { InvalidPhoneTapComponent } from './components/invalid/invalid-phone-tap.component';
import { ValidPhoneTapComponent } from './components/valid/valid-phone-tap.component';
import { RedeemCreditsRoutingModule } from './redeem-credits-routing.module';
import { RedeemCreditsComponent } from './redeem-credits.component';

@NgModule({
  imports: [
    SharedModule,
    RedeemCreditsRoutingModule,
  ],
  declarations: [
    RedeemCreditsComponent,
    InvalidPhoneTapComponent,
    ValidPhoneTapComponent
  ],
  entryComponents: [],
  providers: []
})

export class RedeemCreditsModule { }
