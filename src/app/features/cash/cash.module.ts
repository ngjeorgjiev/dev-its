import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CashRoutingModule } from './cash-routing.module';
import { CashComponent } from './cash.component';

@NgModule({
  imports: [
    SharedModule,
    CashRoutingModule
  ],
  declarations: [
    CashComponent,
  ],
  entryComponents: [],
  providers: []
})

export class CashModule { }
