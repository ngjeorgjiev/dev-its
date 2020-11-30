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
  ],
  declarations: [
    InsertCardComponent,
    InvalidPinComponent,
    ValidPinComponent
  ],
  entryComponents: [],
  providers: []
})

export class InsertCardModule { }
