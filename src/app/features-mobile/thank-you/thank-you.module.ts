import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThankYouRoutingModule } from './thank-you-routing.module';
import { ThankYouComponent } from './thank-you.component';

@NgModule({
  imports: [
    SharedModule,
    ThankYouRoutingModule,
    TranslocoModule
  ],
  declarations: [
    ThankYouComponent,
  ],
  entryComponents: [ ],
  providers: [
    { provide: TRANSLOCO_SCOPE, useValue: 'thank-you' }
  ],
})

export class ThankYouModule { }
