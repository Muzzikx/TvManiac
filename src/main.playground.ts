import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';
import {RouterTestingModule} from '@angular/router/testing';

PlaygroundModule
  .configure({
    selector: 'tm-app',
    overlay: true,
    modules: [
      RouterTestingModule
    ]
  });

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
