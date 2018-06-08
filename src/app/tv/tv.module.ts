import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search/search.component';
import {TvMazeService} from './tv-maze.service';
import {HttpClientModule} from '@angular/common/http';
import {PosterComponent} from './poster/poster.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BookmarksModule} from '../bookmarks/bookmarks.module';
import {ShowDetailsComponent} from './show-details/show-details.component';
import {RouterModule} from '@angular/router';
import {EpisodiesPipe} from './episodies.pipe';
import {TvMazeEndpointsService} from './tv-maze-endpoints.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BookmarksModule,
    RouterModule
  ],
  providers: [
    TvMazeService,
    TvMazeEndpointsService
  ],
  declarations: [SearchComponent, PosterComponent, ShowDetailsComponent, EpisodiesPipe]
})
export class TvModule {
}
