
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseCreditsComponent } from './purchase-credits.component';


const routes: Routes = [
  {
    path: '',
    component: PurchaseCreditsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseCreditsRoutingModule {
}
