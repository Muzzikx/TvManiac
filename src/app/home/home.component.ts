import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'tm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() owner = 'Me';
  @Output() timePass = new EventEmitter<number>();

  constructor() {
    setInterval(() => {
      this.timePass.emit(+new Date()); /*when '+' then return function valueOf*/
    }, 2345);
  }

  ngOnInit() {
  }

}
