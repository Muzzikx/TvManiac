import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Show} from '../tv.models';
import {get} from 'lodash';

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
  encapsulation: ViewEncapsulation.Emulated, /*default value*/
})
export class PosterComponent implements OnInit {
  @Input() show: Show;
  posterUrl: string;
  private readonly placeholderUrl = 'https://www.fillmurray.com/210/295';

  constructor() {
  }

  ngOnInit() {
    this.posterUrl = get(this.show, 'image.medium', this.placeholderUrl);
  }

}
