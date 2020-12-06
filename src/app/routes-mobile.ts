import { Routes } from '@angular/router';

export const  MOBILE_ROUTES: Routes = [
  {
    path: 'code-scan',
    loadChildren: () =>
      import('./features-mobile/code-scan/code-scan.module').then(
        (m) => m.CodeScanModule
      )
  },
  {
    path: 'code-scan/checkout',
    loadChildren: () =>
      import('./features-mobile/checkout/checkout.module').then(
        (m) => m.CheckoutModule
      )
  },
  {
    path: 'code-scan/checkout/cash',
    loadChildren: () =>
      import('./features-mobile/cash/cash.module').then(
        (m) => m.CashModule
      )
  },
  {
    path: 'code-scan/checkout/cash/thank-you',
    loadChildren: () =>
      import('./features-mobile/thank-you/thank-you.module').then(
        (m) => m.ThankYouModule
      )
  },
  {
    path: 'code-scan/checkout/card',
    loadChildren: () =>
      import('./features-mobile/card/card.module').then(
        (m) => m.CardModule
      )
  },
  {
    path: 'code-scan/checkout/card/insert-card',
    loadChildren: () =>
      import('./features-mobile/insert-card/insert-card.module').then(
        (m) => m.InsertCardModule
      )
  },
  {
    path: 'code-scan/checkout/card/insert-card/valid/thank-you',
    loadChildren: () =>
      import('./features-mobile/thank-you/thank-you.module').then(
        (m) => m.ThankYouModule
      )
  },
  {
    path: 'code-scan/checkout/nfc-payment',
    loadChildren: () =>
      import('./features-mobile/nfc-payment/nfc-payment.module').then(
        (m) => m.NfcPaymentModule
      )
  },
  {
    path: 'code-scan/checkout/nfc-payment/redeem-credits',
    loadChildren: () =>
      import('./features-mobile/redeem-credits/redeem-credits.module').then(
        (m) => m.RedeemCreditsModule
      )
  },
  {
    path: 'code-scan/checkout/nfc-payment/redeem-credits/valid/thank-you',
    loadChildren: () =>
      import('./features-mobile/thank-you/thank-you.module').then(
        (m) => m.ThankYouModule
      )
  },
  {
    path: 'code-scan/checkout/nfc-payment/purchase-credits',
    loadChildren: () =>
      import('./features-mobile/purchase-credits/purchase-credits.module').then(
        (m) => m.PurchaseCreditsModule
      )
  }
];
