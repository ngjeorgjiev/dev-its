import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { InvalidPinComponent } from './components/invalid/invalid-pin.component';
import { ValidPinComponent } from './components/valid/valid-pin.component';
import { InsertCardRoutingModule } from './insert-card-routing.module';
import { InsertCardComponent } from './insert-card.component';

@NgModule({
  imports: [
    SharedModule,
    InsertCardRoutingModule,
    TranslocoModule
  ],
  declarations: [
    InsertCardComponent,
    InvalidPinComponent,
    ValidPinComponent
  ],
  entryComponents: [],
  providers: [
    { provide: TRANSLOCO_SCOPE, useValue: 'insert-card' }
  ],
})

export class InsertCardModule { }
