import { trigger, state, style, transition, animate } from '@angular/animations';

var tiempo = 500;
export const fadeLateral =
  trigger('fadeLateral',[
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate(tiempo+'ms ease-in',
        style({
          opacity: 1,
          transform: 'translateX(100%)'
        }))
    ])
  ]);
