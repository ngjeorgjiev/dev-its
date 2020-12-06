
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidPinComponent } from './components/invalid/invalid-pin.component';
import { ValidPinComponent } from './components/valid/valid-pin.component';
import { InsertCardComponent } from './insert-card.component';


const routes: Routes = [
  {
    path: '',
    component: InsertCardComponent
  },
  {
    path: 'invalid',
    component: InvalidPinComponent
  },
  {
    path: 'valid',
    component: ValidPinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsertCardRoutingModule {
}
