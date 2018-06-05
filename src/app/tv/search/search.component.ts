import {Component} from '@angular/core';
import {TvMazeService} from '../tv-maze.service';
import {Show} from '../tv.models';
import {BookmarksService} from '../../bookmarks/bookmarks.service';

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  shows: Show[] = [];

  constructor(private tv: TvMazeService,
              private bs: BookmarksService<Show>) {
    this.search('super');
  }

  search(query: string) {
    this.tv.searchShows(query)
      .subscribe(shows => this.shows = shows);
  }

  get bookmarks(): Show[] {
    console.count();
    return this.bs.getAll() as Show[];
  }

  saveBookmark(show: Show) {
    this.bs.add(show);
  }

  isBookmarked(show: Show): boolean {
    return this.bs.has(show.id);
  }

}
