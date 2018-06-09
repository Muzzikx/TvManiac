import {AfterViewInit, Component, ComponentFactoryResolver, Inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {AcmeClientComponent} from '../acme-client/acme-client.component';
import {ConfigService} from '../config.service';
import {EcmaClientComponent} from '../ecma-client/ecma-client.component';
import {CLIENT_SERVICE} from '../client-service-token';

@Component({
  selector: 'client-area',
  templateUrl: './client-area.component.html',
  styleUrls: ['./client-area.component.css']
})
export class ClientAreaComponent implements OnInit, AfterViewInit {
  name: string;

  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;

  constructor(@Inject(CLIENT_SERVICE) private client: { name: string },
              private config: ConfigService,
              private componentFactory: ComponentFactoryResolver) {
    this.name = client.name;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const factory = this.componentFactory.resolveComponentFactory
    ({
      acme: AcmeClientComponent,
      ecma: EcmaClientComponent
    }[this.config.client]);

    this.vc.createComponent(factory);
  }

}
