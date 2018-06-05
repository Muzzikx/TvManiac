import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactComponent, Page404Component]
})
export class PagesModule { }
