import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';

@NgModule({
  imports: [
    SharedModule,
    CardRoutingModule,
  ],
  declarations: [
    CardComponent,
  ],
  entryComponents: [],
  providers: []
})

export class CardModule { }
