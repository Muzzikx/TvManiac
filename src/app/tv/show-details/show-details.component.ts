import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShowDetailsData, ShowDetailsParams} from '../../app-routing.module';
import {TvMazeService} from '../tv-maze.service';
import {ShowDetails} from '../tv.models';

@Component({
  selector: 'tm-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  show: ShowDetails;

  constructor(route: ActivatedRoute) {
    this.show = (route.snapshot.data as ShowDetailsData).show;
  }

  ngOnInit() {
  }

}
