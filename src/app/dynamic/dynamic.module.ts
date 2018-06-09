import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientAreaComponent} from './client-area/client-area.component';
import {AcmeClientComponent} from './acme-client/acme-client.component';
import {EcmaClientComponent} from './ecma-client/ecma-client.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClientAreaComponent, AcmeClientComponent, EcmaClientComponent],
  entryComponents: [AcmeClientComponent, EcmaClientComponent]
})
export class DynamicModule {
}
