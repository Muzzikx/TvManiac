import {Component} from '@angular/core';
import {TvMazeService} from '../tv-maze.service';
import {Show} from '@models';
import {BookmarksService} from '../../bookmarks/bookmarks.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {debounceTime, filter, tap} from 'rxjs/operators';
import {startsWithLetterValidator} from '../../shared/forms/starts-with-letter.validator';
import {TvService} from '../tv.service';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger('staggerAnim', [
        transition('*=>*', [
          query(':enter', [
            style({opacity: 0, transform: 'translateY(-50px)'}),
            stagger(250, [
              animate('0.2s', style({opacity: 1, transform: 'translateY(0)'}))
            ])
          ], {optional: true}),
          query(':leave', [
            style({opacity: 1, transform: 'translateY(0) scale(1)'}),
            stagger(250, [
              animate('0.2s', style({opacity: 1, transform: 'translateY(-500px) scale(0)'}))
            ])
          ], {optional: true})
        ])
      ]
    )
  ]
})

export class SearchComponent {
  shows: Show[] = [];
  bookmarks$: Observable<Show[]>;
  bookmarksLoaded$: Observable<boolean>;
  searchForm: FormGroup;

  constructor(private tv: TvMazeService,
              private bs: BookmarksService<Show>,
              private fb: FormBuilder,
              private tvService: TvService) {
    this.initForm();

    this.search(this.searchForm.value.query);
    this.bookmarks$ = this.bs.getAll();
    this.bookmarksLoaded$ = this.bs.loaded$;
  }

  search(query: string) {
    this.tv.searchShows(query)
      .subscribe(shows => this.shows = shows);
  }

  private initForm() {
    this.searchForm = this.fb.group({
      query: [this.tvService.searchCache.query,
        [
          Validators.required,
          Validators.minLength(3),
          startsWithLetterValidator
        ],
        // [
        //   usernameAvailableValidator
        // ],
      ],
    });

    this.searchForm.get('query')
      .valueChanges
      .pipe(
        debounceTime(200),
        tap(() => console.log(this.searchForm.get('query').errors)),
        tap(query => this.tvService.searchCache.query = query),
        filter(() => this.searchForm.valid)
      )
      .subscribe(v => this.search(v));
  }
}
