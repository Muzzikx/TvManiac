import {ChangeDetectionStrategy, Component, Input, OnChanges, ViewEncapsulation} from '@angular/core';
import {Show} from '@models';
import {get} from 'lodash';
import {ActivatedRoute} from '@angular/router';
import {ShowDetailsComponent} from '../show-details/show-details.component';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
  encapsulation: ViewEncapsulation.Emulated, /*default value*/
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('imgTrigger', [
      transition('start => end', [
        style({transform: 'translateX(0)'}),
        animate('1s', style({transform: 'translateX(100px)'}),)
      ])
    ])
  ]
})
export class PosterComponent implements OnChanges {
  @Input() show: Show;
  posterUrl: string;
  imageState: 'start' | 'end' = 'start';
  private readonly placeholderUrl = 'https://www.fillmurray.com/210/295';

  constructor(private route: ActivatedRoute) {
  }

  ngOnChanges() {
    this.posterUrl = get(this.show, 'image.medium', this.placeholderUrl);
  }

  toggleImageState() {
    this.imageState = this.imageState === 'start' ? 'end' : 'start';
  }

  get isDetailsComponent(): boolean {
    return this.route.component === ShowDetailsComponent;
  }

}
