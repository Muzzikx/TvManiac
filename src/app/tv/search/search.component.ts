import {Component} from '@angular/core';
import {TvMazeService} from '../tv-maze.service';
import {Show} from '../tv.models';
import {BookmarksService} from '../../bookmarks/bookmarks.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {debounceTime, filter, tap} from 'rxjs/operators';
import {startsWithLetterValidator} from '../../shared/forms/starts-with-letter.validator';
import {usernameAvailableValidator} from '../../shared/forms/username-available.validator';

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  shows: Show[] = [];
  bookmarks$: Observable<Show[]>;
  bookmarksLoaded$: Observable<boolean>;
  searchForm: FormGroup;

  constructor(private tv: TvMazeService,
              private bs: BookmarksService<Show>,
              private fb: FormBuilder) {
    this.initForm();
    this.search('mr robot');
    this.bookmarks$ = this.bs.getAll();
    this.bookmarksLoaded$ = this.bs.loaded$;
  }

  search(query: string) {
    this.tv.searchShows(query)
      .subscribe(shows => this.shows = shows);
  }

  private initForm() {
    this.searchForm = this.fb.group({
      query: ['batman',
        [
          Validators.required,
          Validators.minLength(3),
          startsWithLetterValidator
        ],
        [
          usernameAvailableValidator
        ],
      ],
    });

    this.searchForm.get('query')
      .valueChanges
      .pipe(
        debounceTime(200),
        tap(() => console.log(this.searchForm.get('query').errors)),
        filter(() => this.searchForm.valid)
      )
      .subscribe(v => this.search(v));
  }
}
