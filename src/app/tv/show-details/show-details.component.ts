import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShowDetailsData} from '../../app-routing.module';
import {ShowDetails} from '@models';

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
