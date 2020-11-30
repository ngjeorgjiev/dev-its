
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidPhoneTapComponent } from './components/invalid/invalid-phone-tap.component';
import { ValidPhoneTapComponent } from './components/valid/valid-phone-tap.component';
import { RedeemCreditsComponent } from './redeem-credits.component';


const routes: Routes = [
  {
    path: '',
    component: RedeemCreditsComponent
  },
  {
    path: 'invalid',
    component: InvalidPhoneTapComponent
  },
  {
    path: 'valid',
    component: ValidPhoneTapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedeemCreditsRoutingModule {
}
