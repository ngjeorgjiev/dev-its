import { NgModule } from '@angular/core';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
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
    { provide: TRANSLOCO_SCOPE, useValue: 'card' }
  ],
})

export class CardModule { }
