import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Show, ShowDetails, ShowResponse} from './tv.models';
import {map} from 'rxjs/operators';

@Injectable()
export class TvMazeService {
  private readonly apiRoot = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) {
  }

  searchShows(query: string): Observable<Show[]> {
    const url = `${this.apiRoot}/search/shows?q=${query}`;
    return this.http.get<ShowResponse[]>(url)
      .pipe(map(showResponses => showResponses.map(({show}) => show)));
  }

  getShow(id: string): Observable<ShowDetails> {
    const url = `${this.apiRoot}/shows/${id}?embed=episodes`;
    return this.http.get<ShowDetails>(url);
  }
}
