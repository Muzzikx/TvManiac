import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';

interface Config {
  client: string;
}

export function configInitializer(http: HttpClient, config: ConfigService) {
  return () => http.get<Config>('config.json')
    .toPromise()
    .then(data => config.client = data.client);
}
