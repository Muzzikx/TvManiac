import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './tv/search/search.component';
import {ContactComponent} from './pages/contact/contact.component';
import {Page404Component} from './pages/page404/page404.component';
import {ShowDetailsComponent} from './tv/show-details/show-details.component';
import {ShowDetailsResolver} from './tv/show-details/show-details.resolver';
import {ShowDetails} from '@models';
import {HasRolesGuard} from './shared/has-roles.guard';
import {LazyRoute} from '@angular/compiler';
import {ClientAreaComponent} from './dynamic/client-area/client-area.component';

export interface ShowDetailsParams {
  id: string;
}

export interface ShowDetailsData {
  show: ShowDetails;
  roles: string[];
}

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tv', component: SearchComponent},
  {
    path: 'tv/:id',
    component: ShowDetailsComponent,
    resolve: {
      show: ShowDetailsResolver
    },
    data: {
      roles: ['admin', 'edytor']
    },
    canActivate: [
      // HasRolesGuard
    ]
  },
  {path: 'contact', component: ContactComponent},
  {path: 'client', component: ClientAreaComponent},
  {path: 'settings', loadChildren: './settings/settings.module#SettingsModule'},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    preloadingStrategy: PreloadAllModules
  })],
  providers: [ShowDetailsResolver],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
