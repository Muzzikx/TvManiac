import {sandboxOf} from 'angular-playground';
import {PosterComponent} from './poster.component';
import {Show} from '@models';

export default sandboxOf(PosterComponent)
  .add('default', {
    template: '<tm-poster [show]="show"></tm-poster>',
    context: {
      show: <Partial<Show>>{
        image: {medium: 'https://www.fillmurray.com/2500/2500'}
      }
    },
  })
  .add('with show image', {
    template: '<tm-poster [show]="show"></tm-poster>',
    context: {
      show: <Partial<Show>>{
        image: {medium: 'https://www.fillmurray.com/2500/2500'}
      }
    },
    styles: [`:host { width: 300px; height: 500px; display: block;`]
  })
  .add('with bookmarked badge', {
    template: '<tm-poster [show]="show" class="bookmarked"></tm-poster>',
    context: {
      show: <Partial<Show>>{
        image: {medium: 'https://www.fillmurray.com/2500/2500'}
      }
    },
    styles: [`:host { width: 300px; height: 500px; display: block;`]
  });
