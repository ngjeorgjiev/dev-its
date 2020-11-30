import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { LanguagePickerComponent } from './features/language-picker/language-picker.component';


const routerOptions: ExtraOptions = {
  enableTracing: true,
  useHash: false,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  // scrollOffset: [0, 32],
  relativeLinkResolution: 'legacy',
};

const routes: Routes = [
  {
    path: '',
    component: LanguagePickerComponent,
    data: {animation: 'LanguagePicker'}
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./features/checkout/checkout.module').then(
        (m) => m.CheckoutModule
      )
  },
  {
    path: 'checkout/cash',
    loadChildren: () =>
      import('./features/cash/cash.module').then(
        (m) => m.CashModule
      )
  },
  {
    path: 'checkout/cash/thank-you',
    loadChildren: () =>
      import('./features/thank-you/thank-you.module').then(
        (m) => m.ThankYouModule
      )
  },
  {
    path: 'checkout/card',
    loadChildren: () =>
      import('./features/card/card.module').then(
        (m) => m.CardModule
      )
  },
  {
    path: 'checkout/card/insert-card',
    loadChildren: () =>
      import('./features/insert-card/insert-card.module').then(
        (m) => m.InsertCardModule
      )
  },
  {
    path: 'checkout/card/insert-card/valid/thank-you',
    loadChildren: () =>
      import('./features/thank-you/thank-you.module').then(
        (m) => m.ThankYouModule
      )
  },
  {
    path: 'checkout/nfc-payment',
    loadChildren: () =>
      import('./features/nfc-payment/nfc-payment.module').then(
        (m) => m.NfcPaymentModule
      )
  },
  {
    path: 'checkout/nfc-payment/redeem-credits',
    loadChildren: () =>
      import('./features/redeem-credits/redeem-credits.module').then(
        (m) => m.RedeemCreditsModule
      )
  },
  {
    path: 'checkout/nfc-payment/redeem-credits/valid/thank-you',
    loadChildren: () =>
      import('./features/thank-you/thank-you.module').then(
        (m) => m.ThankYouModule
      )
  },
  {
    path: 'checkout/nfc-payment/purchase-credits',
    loadChildren: () =>
      import('./features/purchase-credits/purchase-credits.module').then(
        (m) => m.PurchaseCreditsModule
      )
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
