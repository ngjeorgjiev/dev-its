import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';

@NgModule({
  imports: [
    SharedModule,
    CardRoutingModule,
    TranslocoModule
  ],
  declarations: [
    CardComponent,
  ],
  entryComponents: [],
  providers: [
    { provide: TRANSLOCO_SCOPE, useValue: 'cash' }
  ],
})

export class CardModule { }
