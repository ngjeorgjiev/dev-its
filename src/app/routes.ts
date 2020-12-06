import { Routes } from '@angular/router';

export const ROUTES: Routes = [
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
  }
];
