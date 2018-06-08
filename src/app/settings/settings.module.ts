import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainSettingsComponent} from './main-settings/main-settings.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: MainSettingsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MainSettingsComponent]
})
export class SettingsModule {
}
