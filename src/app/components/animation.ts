import { trigger, state, style, transition, animate } from '@angular/animations';

var tiempo = 500;
export const fadeIn =
  trigger('fadeIn',[
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(-30%), rotate(150deg)'
      }),
      animate(tiempo+'ms linear',
        style({
          opacity: 1,
          transform: 'translateY(-0%), rotate(0deg)'
        }))
    ])
  ]);
