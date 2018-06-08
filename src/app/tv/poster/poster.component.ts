import {ChangeDetectionStrategy, Component, Input, OnChanges, ViewEncapsulation} from '@angular/core';
import {Show} from '@models';
import {get} from 'lodash';
import {ActivatedRoute} from '@angular/router';
import {ShowDetailsComponent} from '../show-details/show-details.component';

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
  encapsulation: ViewEncapsulation.Emulated, /*default value*/
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PosterComponent implements OnChanges {
  @Input() show: Show;
  posterUrl: string;
  private readonly placeholderUrl = 'https://www.fillmurray.com/210/295';

  constructor(private route: ActivatedRoute) {
  }

  ngOnChanges() {
    this.posterUrl = get(this.show, 'image.medium', this.placeholderUrl);
  }

  get isDetailsComponent(): boolean {
    return this.route.component instanceof ShowDetailsComponent;
  }

}
