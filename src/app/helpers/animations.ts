import {
  animation, trigger, animateChild, group,
  transition, animate, style, query, stagger
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('LanguagePicker <=> *', [
      query(':leave', [
        group([
          query('.english, .row english', [
            style({ opacity: 0 }),
            animate('800ms', style({ opacity: 1, transform: 'translateX(-100%)' })),
          ], { optional: true }),
          query('.arabic, .row arabic', [
            style({ opacity: 0 }),
            animate('800ms', style({ opacity: 1, transform: 'translateX(100%)' })),
          ], { optional: true }),
        ])
      ], { optional: true })
    ]),
    transition('* <=> Checkout', [
      transition(':enter', [
        query('.divider-wrapper img', [ // TODO: animate divider
          style({ opacity: 1, marginLeft: '-40%' }),
        ], { optional: true }),
        query('.divider-wrapper', [
          animate('800ms', style({ left: 200})),
        ])
      ]),
    ])
  ]);