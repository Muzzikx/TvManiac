import { Component } from '@angular/core';

@Component({
  selector: 'tm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = {
    value: 'TV Maniac',
    toString: () => JSON.stringify(this),
  };
}
