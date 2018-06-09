import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TvModule} from './tv/tv.module';
import {PagesModule} from './pages/pages.module';
import {SharedModule} from './shared/shared.module';
import {DynamicModule} from './dynamic/dynamic.module';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './dynamic/config.service';
import {configInitializer} from './dynamic/config-initializer';
import {AcmeClientService} from './dynamic/acme-client.service';
import {EcmaClientService} from './dynamic/ecma-client.service';
import {CLIENT_SERVICE} from './dynamic/client-service-token';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TvModule,
    PagesModule,
    SharedModule,
    DynamicModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configInitializer,
      deps: [HttpClient, ConfigService],
      multi: true,
    },
    {
      provide: CLIENT_SERVICE,
      useFactory: (config: ConfigService) => {
        const clientClass = {
          acme: AcmeClientService,
          ecma: EcmaClientService,
        }[config.client];
        return new clientClass();
      },
      deps: [ConfigService]
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
