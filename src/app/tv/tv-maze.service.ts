import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Show, ShowDetails, ShowResponse} from '@models';
import {map, tap} from 'rxjs/operators';
import {TvMazeEndpointsService} from './tv-maze-endpoints.service';
import {TvService} from './tv.service';

@Injectable()
export class TvMazeService {
  private readonly apiRoot: string;

  constructor(private http: HttpClient,
              private endpoints: TvMazeEndpointsService,
              private tvService: TvService) {
    this.apiRoot = endpoints.root;
  }

  searchShows(query: string): Observable<Show[]> {
    // if(query === this.tvService.searchCache.query) {
    //   return of(this.tvService.searchCache.shows);
    // }
    const url = `${this.apiRoot}/search/shows?q=${query}`;
    return this.http.get<ShowResponse[]>(url)
      .pipe(
        map(showResponses => showResponses.map(({show}) => show)),
        tap(shows=>this.tvService.searchCache.shows = shows),
      );
  }

  getShow(id: string): Observable<ShowDetails> {
    const url = `${this.apiRoot}/shows/${id}?embed=episodes`;
    return this.http.get<ShowDetails>(url);
  }
}
