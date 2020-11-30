import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThankYouRoutingModule } from './thank-you-routing.module';
import { ThankYouComponent } from './thank-you.component';

@NgModule({
  imports: [
    SharedModule,
    ThankYouRoutingModule
  ],
  declarations: [
    ThankYouComponent,
  ],
  entryComponents: [ ],
  providers: []
})

export class ThankYouModule { }
