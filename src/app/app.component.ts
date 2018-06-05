import {Component} from '@angular/core';

interface MenuItem {
  label: string;
  path: string;
  exact?: boolean;
}

@Component({
  selector: 'tm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TV Maniac';
  menu: MenuItem[] = [
    {label: 'Home', path: '', exact: true},
    {label: 'TV shows', path: 'tv'},
    {label: 'Contact', path: 'contact'},
  ];

  handleClick(value: string) {
    this.title = value;
  }
}
