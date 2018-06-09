import {Injectable} from '@angular/core';
import {ClientService} from './client-class';

@Injectable()
export class AcmeClientService extends ClientService {
  name = 'ACME Corp.';

  constructor() {
    super();
  }
}
