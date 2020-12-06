import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CashRoutingModule } from './cash-routing.module';
import { CashComponent } from './cash.component';

@NgModule({
  imports: [
    SharedModule,
    CashRoutingModule,
    TranslocoModule
  ],
  declarations: [
    CashComponent,
  ],
  entryComponents: [],
  providers: [
    { provide: TRANSLOCO_SCOPE, useValue: 'cash' }
  ],
})

export class CashModule { }
