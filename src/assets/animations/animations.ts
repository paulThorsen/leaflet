import { trigger, transition, animate, style } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [style({ opacity: '0' }), animate('.2s ease-out')]),
]);
